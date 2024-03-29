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

import { ConfigReader } from '@backstage/config';
import {
  DefaultCodacyInfoProvider,
  CodacyConfig,
} from './codacyInfoProvider';
import { setupServer } from 'msw/node';
import { setupRequestMockHandlers } from '@backstage/backend-test-utils';
import { rest, RestRequest } from 'msw';

describe('CodacyConfig', () => {
  const CODACY_DEFAULT_INSTANCE_NAME = 'default';
  const DUMMY_CODACY_URL = 'https://codacy.example.com';
  const DUMMY_CODACY_APIKEY = '123456789abcdef0123456789abcedf012';

  const DUMMY_SIMPLE_OBJECT_FOR_DEFAULT_CODACY_CONFIG = {
    name: CODACY_DEFAULT_INSTANCE_NAME,
    baseUrl: DUMMY_CODACY_URL,
    apiKey: DUMMY_CODACY_APIKEY,
  };
  const DUMMY_SIMPLE_CONFIG = {
    codacy: {
      baseUrl: DUMMY_CODACY_URL,
      apiKey: DUMMY_CODACY_APIKEY,
    },
  };
  const DUMMY_NAMED_CONFIG = {
    codacy: {
      instances: [
        {
          name: CODACY_DEFAULT_INSTANCE_NAME,
          baseUrl: DUMMY_CODACY_URL,
          apiKey: DUMMY_CODACY_APIKEY,
        },
      ],
    },
  };

  describe('fromConfig', () => {
    it('Reads simple config and annotation', async () => {
      const config = CodacyConfig.fromConfig(
        new ConfigReader(DUMMY_SIMPLE_CONFIG),
      );

      expect(config.instances).toEqual([
        {
          name: CODACY_DEFAULT_INSTANCE_NAME,
          baseUrl: DUMMY_CODACY_URL,
          apiKey: DUMMY_CODACY_APIKEY,
        },
      ]);
    });

    it('Reads named default config and annotation', async () => {
      const config = CodacyConfig.fromConfig(
        new ConfigReader(DUMMY_NAMED_CONFIG),
      );

      expect(config.instances).toEqual([
        {
          name: CODACY_DEFAULT_INSTANCE_NAME,
          baseUrl: DUMMY_CODACY_URL,
          apiKey: DUMMY_CODACY_APIKEY,
        },
      ]);
    });

    it('Parses named default config (amongst named other configs)', async () => {
      const config = CodacyConfig.fromConfig(
        new ConfigReader({
          codacy: {
            instances: [
              {
                name: CODACY_DEFAULT_INSTANCE_NAME,
                baseUrl: DUMMY_CODACY_URL,
                apiKey: DUMMY_CODACY_APIKEY,
              },
              {
                name: 'other',
                baseUrl: 'https://codacy-other.example.com',
                apiKey: 'abcdef0123456789abcedf0123456789abc',
              },
            ],
          },
        }),
      );

      expect(config.instances).toEqual([
        {
          name: CODACY_DEFAULT_INSTANCE_NAME,
          baseUrl: DUMMY_CODACY_URL,
          apiKey: DUMMY_CODACY_APIKEY,
        },
        {
          name: 'other',
          baseUrl: 'https://codacy-other.example.com',
          apiKey: 'abcdef0123456789abcedf0123456789abc',
        },
      ]);
    });

    it('Throw an error if both a named default config and top level config', async () => {
      expect(() =>
        CodacyConfig.fromConfig(
          new ConfigReader({
            codacy: {
              baseUrl: DUMMY_CODACY_URL,
              apiKey: DUMMY_CODACY_APIKEY,
              instances: [
                {
                  name: CODACY_DEFAULT_INSTANCE_NAME,
                  baseUrl: DUMMY_CODACY_URL,
                  apiKey: DUMMY_CODACY_APIKEY,
                },
              ],
            },
          }),
        ),
      ).toThrow(Error);
    });

    it('Throw an error if default config is partially provided', async () => {
      expect(() =>
        CodacyConfig.fromConfig(
          new ConfigReader({
            codacy: {
              baseUrl: DUMMY_CODACY_URL,
            },
          }),
        ),
      ).toThrow(Error);
    });
  });

  describe('getInstanceConfig', () => {
    it('Gets default instance when no parameter given', async () => {
      const config = new CodacyConfig([
        DUMMY_SIMPLE_OBJECT_FOR_DEFAULT_CODACY_CONFIG,
        {
          name: 'other',
          baseUrl: 'https://codacy-other.example.com',
          apiKey: '123456789abcdef0123456789abcedf012',
        },
      ]);

      expect(config.getInstanceConfig()).toEqual({
        name: CODACY_DEFAULT_INSTANCE_NAME,
        baseUrl: DUMMY_CODACY_URL,
        apiKey: DUMMY_CODACY_APIKEY,
      });
    });

    it('Gets default instance when "default" given', async () => {
      const config = new CodacyConfig([
        DUMMY_SIMPLE_OBJECT_FOR_DEFAULT_CODACY_CONFIG,
        {
          name: 'other',
          baseUrl: 'https://codacy-other.example.com',
          apiKey: 'abcdef0123456789abcedf0123456789abc',
        },
      ]);

      expect(config.getInstanceConfig({ codacyName: 'default' })).toEqual({
        name: 'default',
        baseUrl: 'https://codacy.example.com',
        apiKey: '123456789abcdef0123456789abcedf012',
      });
    });

    it('Gets named instance', async () => {
      const config = new CodacyConfig([
        DUMMY_SIMPLE_OBJECT_FOR_DEFAULT_CODACY_CONFIG,
        {
          name: 'other',
          baseUrl: 'https://codacy-other.example.com',
          apiKey: '123456789abcdef0123456789abcedf012',
        },
      ]);

      expect(config.getInstanceConfig({ codacyName: 'other' })).toEqual({
        name: 'other',
        baseUrl: 'https://codacy-other.example.com',
        apiKey: '123456789abcdef0123456789abcedf012',
      });
    });

    it('Throw an error if default instance could not be found', async () => {
      const config = new CodacyConfig([
        {
          name: 'other',
          baseUrl: 'https://codacy-other.example.com',
          apiKey: '123456789abcdef0123456789abcedf012',
        },
      ]);

      expect(() =>
        config.getInstanceConfig({ codacyName: 'default' }),
      ).toThrow(Error);
    });

    it('Throw an error if named instance could not be found', async () => {
      const config = new CodacyConfig([
        DUMMY_SIMPLE_OBJECT_FOR_DEFAULT_CODACY_CONFIG,
      ]);

      expect(() =>
        config.getInstanceConfig({ codacyName: 'other' }),
      ).toThrow(Error);
    });
  });
});

const server = setupServer();

describe('DefaultCodacyInfoProvider', () => {
  function configureProvider(configData: any) {
    const config = new ConfigReader(configData);

    return DefaultCodacyInfoProvider.fromConfig(config);
  }

  describe('getBaseUrl', () => {
    it('Provide base url for default from simple config and non provided instanceName', async () => {
      const provider = configureProvider({
        codacy: {
          baseUrl: 'https://codacy.example.com',
          apiKey: '123456789abcdef0123456789abcedf012',
        },
      });

      expect(provider.getBaseUrl()).toEqual({
        baseUrl: 'https://codacy.example.com',
      });
    });

    it('Provide base url for default from simple config and empty string', async () => {
      const provider = configureProvider({
        codacy: {
          baseUrl: 'https://codacy.example.com',
          apiKey: '123456789abcdef0123456789abcedf012',
        },
      });

      expect(provider.getBaseUrl({ instanceName: '' })).toEqual({
        baseUrl: 'https://codacy.example.com',
      });
    });

    it('Provide base url for named default config and "default" string', async () => {
      const provider = configureProvider({
        codacy: {
          instances: [
            {
              name: 'default',
              baseUrl: 'https://codacy.example.com',
              apiKey: '123456789abcdef0123456789abcedf012',
            },
          ],
        },
      });

      expect(provider.getBaseUrl({ instanceName: 'default' })).toEqual({
        baseUrl: 'https://codacy.example.com',
      });
    });

    it('Provide base url for named config', async () => {
      const provider = configureProvider({
        codacy: {
          instances: [
            {
              name: 'default',
              baseUrl: 'https://codacy.example.com',
              apiKey: '123456789abcdef0123456789abcedf012',
            },
            {
              name: 'other',
              baseUrl: 'https://codacy-other.example.com',
              apiKey: '123456789abcdef0123456789abcedf012',
            },
          ],
        },
      });

      expect(provider.getBaseUrl({ instanceName: 'other' })).toEqual({
        baseUrl: 'https://codacy-other.example.com',
      });
    });

    it('Provide external base url for simple config', async () => {
      const provider = configureProvider({
        codacy: {
          baseUrl: 'https://codacy-internal.example.com',
          externalBaseUrl: 'https://codacy.example.com',
          apiKey: '123456789abcdef0123456789abcedf012',
        },
      });

      expect(provider.getBaseUrl()).toEqual({
        baseUrl: 'https://codacy-internal.example.com',
        externalBaseUrl: 'https://codacy.example.com',
      });
    });

    it('Provide external base url for named config', async () => {
      const provider = configureProvider({
        codacy: {
          instances: [
            {
              name: 'default',
              baseUrl: 'https://codacy.example.com',
              apiKey: '123456789abcdef0123456789abcedf012',
            },
            {
              name: 'other',
              baseUrl: 'https://codacy-other-internal.example.com',
              externalBaseUrl: 'https://codacy-other.example.com',
              apiKey: '123456789abcdef0123456789abcedf012',
            },
          ],
        },
      });

      expect(provider.getBaseUrl({ instanceName: 'other' })).toEqual({
        baseUrl: 'https://codacy-other-internal.example.com',
        externalBaseUrl: 'https://codacy-other.example.com',
      });
    });
  });

  describe('getFindings', () => {
    setupRequestMockHandlers(server);
    const MOCK_BASE_URL = 'http://backstage:9191';
    const DUMMY_COMPONENT_KEY = 'dummyComponentKey';
    const DUMMY_ANALYSIS_DATE = '2022-01-01T00:00:00Z';
    const DUMMY_API_KEY = '123456789abcdef0123456789abcedf012';

    const checkBasicAuthToken = (req: RestRequest<never>) => {
      if (req.headers && req.headers.has('Authorization')) {
        expect(req.headers.get('Authorization')).toEqual(
          `Basic MTIzNDU2Nzg5YWJjZGVmMDEyMzQ1Njc4OWFiY2VkZjAxMjo=`,
        );
      } else {
        throw new Error('Basic auth token not provided');
      }
    };

    const setupComponentHandler = () => {
      server.use(
        rest.get(`${MOCK_BASE_URL}/api/components/show`, (req, res, ctx) => {
          checkBasicAuthToken(req);
          expect(req.url.searchParams.toString()).toBe(
            `component=${DUMMY_COMPONENT_KEY}`,
          );
          return res(
            ctx.json({
              component: { analysisDate: DUMMY_ANALYSIS_DATE },
            }),
          );
        }),
      );
    };
    const setupMetricsHandler = () => {
      server.use(
        rest.get(`${MOCK_BASE_URL}/api/metrics/search`, (req, res, ctx) => {
          checkBasicAuthToken(req);
          return res(
            ctx.json({
              total: 4,
              metrics: [
                { key: 'coverage' },
                { key: 'code_smells' },
                { key: 'vulnerabilities' },
                { key: 'unused_metric' },
              ],
            }),
          );
        }),
      );
    };
    const setupMeasureHandler = () => {
      server.use(
        rest.get(`${MOCK_BASE_URL}/api/measures/component`, (req, res, ctx) => {
          checkBasicAuthToken(req);
          expect(req.url.searchParams.toString()).toBe(
            `component=${DUMMY_COMPONENT_KEY}&metricKeys=vulnerabilities%2Ccode_smells%2Ccoverage`,
          );
          return res(
            ctx.json({
              component: {
                measures: [
                  { metric: 'coverage', value: '86' },
                  { metric: 'code_smells', value: '40' },
                  { metric: 'vulnerabilities', value: '3' },
                ],
              },
            }),
          );
        }),
      );
    };

    const setupHandlers = () => {
      setupComponentHandler();
      setupMetricsHandler();
      setupMeasureHandler();
    };

    const DUMMY_SIMPLE_CONFIG_FOR_PROVIDER = {
      codacy: {
        baseUrl: MOCK_BASE_URL,
        apiKey: DUMMY_API_KEY,
      },
    };

    it('Provide findings when everything is ok', async () => {
      setupHandlers();
      const provider = configureProvider(DUMMY_SIMPLE_CONFIG_FOR_PROVIDER);
      expect(
        await provider.getFindings({
          componentKey: DUMMY_COMPONENT_KEY,
          instanceName: 'default',
        }),
      ).toEqual({
        analysisDate: DUMMY_ANALYSIS_DATE,
        measures: [
          { metric: 'coverage', value: '86' },
          { metric: 'code_smells', value: '40' },
          { metric: 'vulnerabilities', value: '3' },
        ],
      });
    });

    it('Provide undefined as finding if component API answer code is not 200', async () => {
      server.use(
        rest.get(`${MOCK_BASE_URL}/api/components/show`, (req, res, ctx) => {
          checkBasicAuthToken(req);
          expect(req.url.searchParams.toString()).toBe(
            `component=${DUMMY_COMPONENT_KEY}`,
          );
          return res(ctx.status(500));
        }),
      );

      const provider = configureProvider({
        codacy: {
          baseUrl: MOCK_BASE_URL,
          apiKey: '123456789abcdef0123456789abcedf012',
        },
      });
      expect(
        await provider.getFindings({
          componentKey: DUMMY_COMPONENT_KEY,
          instanceName: 'default',
        }),
      ).toBeUndefined();
    });
    it('Provide undefined as finding if component API answer incorrectly', async () => {
      server.use(
        rest.get(`${MOCK_BASE_URL}/api/components/show`, (req, res, ctx) => {
          checkBasicAuthToken(req);
          expect(req.url.searchParams.toString()).toBe(
            `component=${DUMMY_COMPONENT_KEY}`,
          );
          return res(
            ctx.json({
              invalid: true,
            }),
          );
        }),
      );

      const provider = configureProvider(DUMMY_SIMPLE_CONFIG_FOR_PROVIDER);
      expect(
        await provider.getFindings({
          componentKey: DUMMY_COMPONENT_KEY,
          instanceName: 'default',
        }),
      ).toBeUndefined();
    });
    it('Provide findings when metrics API uses pages', async () => {
      setupComponentHandler();
      setupMeasureHandler();
      // custom metrics handler that provide two pages
      server.use(
        rest.get(`${MOCK_BASE_URL}/api/metrics/search`, (req, res, ctx) => {
          checkBasicAuthToken(req);
          if (req.url.searchParams.get('p') === '1')
            return res(
              ctx.json({
                total: 4,
                metrics: [{ key: 'coverage' }, { key: 'code_smells' }],
              }),
            );
          return res(
            ctx.json({
              total: 4,
              metrics: [{ key: 'vulnerabilities' }, { key: 'unused_metric' }],
            }),
          );
        }),
      );

      const provider = configureProvider(DUMMY_SIMPLE_CONFIG_FOR_PROVIDER);
      expect(
        await provider.getFindings({
          componentKey: DUMMY_COMPONENT_KEY,
          instanceName: 'default',
        }),
      ).toEqual({
        analysisDate: DUMMY_ANALYSIS_DATE,
        measures: [
          { metric: 'coverage', value: '86' },
          { metric: 'code_smells', value: '40' },
          { metric: 'vulnerabilities', value: '3' },
        ],
      });
    });

    it('Provide undefined as findings when measure API answer code is not 200', async () => {
      setupComponentHandler();
      setupMetricsHandler();
      // custom metrics handler that provide two pages
      server.use(
        rest.get(`${MOCK_BASE_URL}/api/measures/component`, (req, res, ctx) => {
          checkBasicAuthToken(req);
          expect(req.url.searchParams.toString()).toBe(
            `component=${DUMMY_COMPONENT_KEY}&metricKeys=vulnerabilities%2Ccode_smells%2Ccoverage`,
          );
          return res(ctx.status(500));
        }),
      );

      const provider = configureProvider(DUMMY_SIMPLE_CONFIG_FOR_PROVIDER);
      expect(
        await provider.getFindings({
          componentKey: DUMMY_COMPONENT_KEY,
          instanceName: 'default',
        }),
      ).toBeUndefined();
    });

    it('Provide findings with empty measures when metrics API answer incorrectly', async () => {
      setupComponentHandler();
      setupMetricsHandler();
      // custom metrics handler that provide two pages
      server.use(
        rest.get(`${MOCK_BASE_URL}/api/measures/component`, (req, res, ctx) => {
          checkBasicAuthToken(req);
          expect(req.url.searchParams.toString()).toBe(
            `component=${DUMMY_COMPONENT_KEY}&metricKeys=vulnerabilities%2Ccode_smells%2Ccoverage`,
          );
          return res(ctx.json({}));
        }),
      );

      const provider = configureProvider(DUMMY_SIMPLE_CONFIG_FOR_PROVIDER);
      expect(
        await provider.getFindings({
          componentKey: DUMMY_COMPONENT_KEY,
          instanceName: 'default',
        }),
      ).toEqual({
        analysisDate: DUMMY_ANALYSIS_DATE,
        measures: [],
      });
    });
  });
});