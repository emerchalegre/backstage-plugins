/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Config } from '@backstage/config';
import fetch from 'node-fetch';

/**
 * Provide information about codacy instances and projects contained within
 * @public
 */
export interface CodacyInfoProvider {
    /**
     * Get the codacy URL in configuration from a provided instanceName.
     *
     * If instanceName is omitted, default codacy instance is queried in config
     *
     * @param instanceName - Name of the codacy instance to get the info from
     * @returns the url of the instance
     */
    getBaseUrl(options?: { instanceName?: string }): {
        baseUrl: string;
        externalBaseUrl?: string;
    };

    /**
     * Query the codacy instance corresponding to the instanceName to get all
     * measures for the component of key componentKey.
     *
     * If instanceName is omitted, default codacy instance is queried in config
     *
     * @param componentKey - component key of the project we want to get measure from.
     * @param instanceName - name of the instance (in config) where the project is hosted.
     * @returns All measures with the analysis date. Will return undefined if we
     * can't provide the full response
     */
    getFindings(options: {
        componentKey: string;
        instanceName?: string;
    }): Promise<CodacyFindings | undefined>;
}

/**
 * Information retrieved for a specific project in Codacy
 * @public
 */
export interface CodacyFindings {
}

/**
 * A specific measure on a project in Codacy
 * @public
 */
export interface CodacyMeasure {
    /**
     * Name of the measure
     */
    metric: string;
    /**
     * Value of the measure
     */
    value: string;
}

/**
 * Information about a Codacy instance.
 * @public
 */
export interface CodacyInstanceConfig {
    /**
     * Name of the instance. An instance name in configuration and catalog should match.
     */
    name: string;
    /**
     * Base url to access the instance
     */
    baseUrl: string;
    /**
     * External url to access the instance from the frontend
     */
    externalBaseUrl?: string;
    /**
     * Access token to access the codacy instance as generated in user profile.
     */
    apiKey: string;
}

interface ComponentWrapper {
    totalOpen: number;
    totalClosed: number;
    onTrack: number;
    closedOnTime: number;
    data: {
        grade: number;
        coveragePercentageWithDecimals: number;
        issuesPercentage: number;
        complexFilesPercentage: number;
        duplicationPercentage: number;
    }[];
}

interface SecurityComponentWrapper {
    data: {
        totalOpen: number;
        totalClosed: number;
        onTrack: number;
        closedOnTime: number;
    };
}

/**
 * Holds multiple Codacy configurations.
 * @public
 */
export class CodacyConfig {
    /**
     *
     * @param instances - All information on all codacy instance from the config file
     */
    constructor(public readonly instances: CodacyInstanceConfig[]) { }

    /**
     * Read all Codacy instance configurations.
     * @param config - Root configuration
     * @returns A CodacyConfig that contains all configured Codacy instances.
     */
    static fromConfig(config: Config): CodacyConfig {
        const DEFAULT_CODACY_NAME = 'default';

        const codacyConfig = config.getConfig('codacy');

        // load all named instance config
        const namedInstanceConfig =
            codacyConfig.getOptionalConfigArray('instances')?.map(c => ({
                name: c.getString('name'),
                baseUrl: c.getString('baseUrl'),
                externalBaseUrl: c.getOptionalString('externalBaseUrl'),
                apiKey: c.getString('apiKey'),
            })) || [];

        // load unnamed default config
        const hasNamedDefault = namedInstanceConfig.some(
            x => x.name === DEFAULT_CODACY_NAME,
        );

        // Get these as optional strings and check to give a better error message
        const baseUrl = codacyConfig.getOptionalString('baseUrl');
        const externalBaseUrl = codacyConfig.getOptionalString('externalBaseUrl');
        const apiKey = codacyConfig.getOptionalString('apiKey');

        if (hasNamedDefault && (baseUrl || externalBaseUrl || apiKey)) {
            throw new Error(
                `Found both a named codacy instance with name ${DEFAULT_CODACY_NAME} and top level baseUrl or apiKey config. Use only one style of config.`,
            );
        }

        const unnamedNonePresent = !baseUrl && !apiKey;
        const unnamedAllPresent = baseUrl && apiKey;
        if (!(unnamedAllPresent || unnamedNonePresent)) {
            throw new Error(
                `Found partial default codacy config. All (or none) of baseUrl and apiKey must be provided.`,
            );
        }

        if (unnamedAllPresent) {
            const unnamedInstanceConfig = [
                { name: DEFAULT_CODACY_NAME, baseUrl, externalBaseUrl, apiKey },
            ] as {
                name: string;
                baseUrl: string;
                externalBaseUrl?: string;
                apiKey: string;
            }[];

            return new CodacyConfig([
                ...namedInstanceConfig,
                ...unnamedInstanceConfig,
            ]);
        }

        return new CodacyConfig(namedInstanceConfig);
    }

    /**
     * Gets a Codacy instance configuration by name, or the default one if no name is provided.
     * @param codacyName - Optional name of the Codacy instance.
     * @returns The requested Codacy instance.
     * @throws Error when no default config could be found or the requested name couldn't be found in config.
     */
    getInstanceConfig(
        options: { codacyName?: string } = {},
    ): CodacyInstanceConfig {
        const { codacyName } = options;
        const DEFAULT_CODACY_NAME = 'default';

        if (!codacyName || codacyName === DEFAULT_CODACY_NAME) {
            // no name provided, use default
            const instanceConfig = this.instances.find(
                c => c.name === DEFAULT_CODACY_NAME,
            );

            if (!instanceConfig) {
                throw new Error(
                    `Couldn't find a default codacy instance in the config. Either configure an instance with name ${DEFAULT_CODACY_NAME} or add a prefix to your annotation value.`,
                );
            }

            return instanceConfig;
        }

        // A name is provided, look it up.
        const instanceConfig = this.instances.find(c => c.name === codacyName);

        if (!instanceConfig) {
            throw new Error(
                `Couldn't find a codacy instance in the config with name ${codacyName}`,
            );
        }
        return instanceConfig;
    }
}

/**
 * @public
 *
 * Use default config and annotations, build using fromConfig static function.
 */
export class DefaultCodacyInfoProvider implements CodacyInfoProvider {
    private constructor(private readonly config: CodacyConfig) { }

    /**
     * Generate an instance from a Config instance
     * @param config - Backend configuration
     */
    static fromConfig(config: Config): DefaultCodacyInfoProvider {
        return new DefaultCodacyInfoProvider(CodacyConfig.fromConfig(config));
    }

    private calculate_grade(grade: number): string {
        switch (true) {
            case grade >= 90:
                return 'A';
            case grade >= 80:
                return 'B';
            case grade >= 70:
                return 'C';
            case grade >= 60:
                return 'D';
            default:
                return 'F';
        }
    }

    /**
     * Call an API with provided arguments
     * @param url - URL of the API to call
     * @param path - path to call
     * @param authToken - token used as basic auth user without password
     * @param query - parameters to provide to the call
     * @returns A promise on the answer to the API call if the answer status code is 200, undefined otherwise.
     * @private
     */
    private static async callApi<T>(
        url: string,
        path: string,
        authToken: string,
    ): Promise<T | undefined> {
        const url_with_path = `${url}/${path} `;

        const response = await fetch(url_with_path, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'api-token': authToken,
            },
            body: JSON.stringify({}),
            method: 'POST',
        });
        if (response.status === 200) {
            return (await response.json()) as T;
        }
        return undefined;
    }

    /**
     * {@inheritDoc CodacyInfoProvider.getBaseUrl}
     * @throws Error If configuration can't be retrieved.
     */
    getBaseUrl(options: { instanceName?: string } = {}): {
        baseUrl: string;
        externalBaseUrl?: string;
    } {
        const instanceConfig = this.config.getInstanceConfig({
            codacyName: options.instanceName,
        });
        return {
            baseUrl: instanceConfig.baseUrl,
            externalBaseUrl: instanceConfig.externalBaseUrl,
        };
    }

    /**
     * {@inheritDoc CodacyInfoProvider.getFindings}
     * @throws Error If configuration can't be retrieved.
     */
    async getFindings(options: {
        componentKey: string;
        instanceName?: string;
    }): Promise<CodacyFindings | undefined> {
        const { componentKey, instanceName } = options;
        const { baseUrl, apiKey } = this.config.getInstanceConfig({
            codacyName: instanceName,
        });
        // https://app.codacy.com/api/v3/organizations/gh/MonkeyECX/security/dashboard
        // get component info to retrieve analysis date
        const security = await DefaultCodacyInfoProvider.callApi<SecurityComponentWrapper>(
            baseUrl,
            `organizations/gh/${componentKey}/security/dashboard`,
            apiKey,
        );
        if (!security) {
            return undefined;
        }
        
        const analysis = await DefaultCodacyInfoProvider.callApi<ComponentWrapper>(
            baseUrl,
            `search/analysis/organizations/gh/MonkeyECX/repositories`,
            apiKey,
        );
        if (!analysis || !analysis.data) {
            return undefined;
        }

        let grade_total = 0;
        let code_coverage = 0;
        let issuesPercentage = 0;
        let complexFilesPercentage = 0;
        let duplicationPercentage = 0;

        for (const i in analysis.data) {
            if (analysis.data[i].grade) {
                grade_total += analysis.data[i].grade;
            } else {
                grade_total += 100;
            }
            if (analysis.data[i].coveragePercentageWithDecimals) {
                code_coverage += analysis.data[i].coveragePercentageWithDecimals;
            } else {
                code_coverage += 100;
            }
            if (analysis.data[i].issuesPercentage) {
                issuesPercentage += analysis.data[i].issuesPercentage;
            } else {
                issuesPercentage += 100;
            }
            if (analysis.data[i].complexFilesPercentage) {
                complexFilesPercentage += analysis.data[i].complexFilesPercentage;
            } else {
                complexFilesPercentage += 100;
            }
            if (analysis.data[i].duplicationPercentage) {
                duplicationPercentage += analysis.data[i].duplicationPercentage;
            } else {
                duplicationPercentage += 100;
            }
        }

        const grade_average = grade_total / analysis.data.length;
        const code_coverage_average = code_coverage / analysis.data.length;
        const issuesPercentage_average = issuesPercentage / analysis.data.length;
        const complexFilesPercentage_average =
            complexFilesPercentage / analysis.data.length;
        const duplicationPercentage_average =
            duplicationPercentage / analysis.data.length;

        console.log(`Grade: ${grade_average}`);
        console.log(`Code Coverage: ${code_coverage_average}`);
        console.log(`Issues Percentage: ${issuesPercentage_average}`);
        console.log(`Complex Files Percentage: ${complexFilesPercentage_average}`);
        console.log(`Duplication Percentage: ${duplicationPercentage_average}`);

        const metrics_general = {
            grade: grade_average,
            grade_letter: this.calculate_grade(grade_average),
            code_coverage: code_coverage_average,
            issuesPercentage: issuesPercentage_average,
            complexFilesPercentage: complexFilesPercentage_average,
            duplicationPercentage: duplicationPercentage_average,
            totalOpen: security.data.totalOpen,
            totalClosed: security.data.totalClosed,
            onTrack: security.data.onTrack,
            closedOnTime: security.data.closedOnTime,
        };

        return metrics_general;

        // select the metrics that are supported by the Codacy instance
        // const supportedMetrics =
        //     await DefaultCodacyInfoProvider.getSupportedMetrics(baseUrl, apiKey);
        // const wantedMetrics: string[] = [
        //     'alert_status',
        //     'bugs',
        //     'reliability_rating',
        //     'vulnerabilities',
        //     'security_rating',
        //     'security_hotspots_reviewed',
        //     'security_review_rating',
        //     'code_smells',
        //     'sqale_rating',
        //     'coverage',
        //     'duplicated_lines_density',
        // ];

        // // only retrieve wanted metrics that are supported
        // const metricsToQuery = wantedMetrics.filter(el =>
        //     supportedMetrics.includes(el),
        // );

        // get all measures
        // const measures =
        //   await DefaultCodacyInfoProvider.callApi<MeasuresWrapper>(
        //     baseUrl,
        //     'api/measures/component',
        //     apiKey,
        //     {
        //       component: componentKey,
        //       metricKeys: metricsToQuery.join(','),
        //     },
        //   );
        // if (!measures) {
        //   return undefined;
        // }

        // return {
        //   analysisDate: component.component.analysisDate,
        //   measures: measures.component?.measures ?? [],
        // };
    }
}
