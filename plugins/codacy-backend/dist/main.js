/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/run.ts":
/*!********************!*\
  !*** ./src/run.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var yn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yn */ \"yn\");\n/* harmony import */ var yn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yn__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _service_standaloneServer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/standaloneServer */ \"./src/service/standaloneServer.ts\");\n\n\n\nconst port = process.env.PLUGIN_PORT ? Number(process.env.PLUGIN_PORT) : 7007;\nconst enableCors = yn__WEBPACK_IMPORTED_MODULE_1___default()(process.env.PLUGIN_CORS, {\n    default: false\n});\nconst logger = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.getRootLogger)();\n(0,_service_standaloneServer__WEBPACK_IMPORTED_MODULE_2__.startStandaloneServer)({\n    port,\n    enableCors,\n    logger\n}).catch((err)=>{\n    logger.error(err);\n    process.exit(1);\n});\nprocess.on('SIGINT', ()=>{\n    logger.info('CTRL+C pressed; exiting.');\n    process.exit(0);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcnVuLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2VtZXJzb24uY2hhbGVncmUvbW9ua2V5L2JhY2tzdGFnZS9wbHVnaW5zL2NvZGFjeS1iYWNrZW5kL3NyYy9ydW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Um9vdExvZ2dlciB9IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1jb21tb24nO1xuaW1wb3J0IHluIGZyb20gJ3luJztcbmltcG9ydCB7IHN0YXJ0U3RhbmRhbG9uZVNlcnZlciB9IGZyb20gJy4vc2VydmljZS9zdGFuZGFsb25lU2VydmVyJztcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBMVUdJTl9QT1JUID8gTnVtYmVyKHByb2Nlc3MuZW52LlBMVUdJTl9QT1JUKSA6IDcwMDc7XG5jb25zdCBlbmFibGVDb3JzID0geW4ocHJvY2Vzcy5lbnYuUExVR0lOX0NPUlMsIHsgZGVmYXVsdDogZmFsc2UgfSk7XG5jb25zdCBsb2dnZXIgPSBnZXRSb290TG9nZ2VyKCk7XG5cbnN0YXJ0U3RhbmRhbG9uZVNlcnZlcih7IHBvcnQsIGVuYWJsZUNvcnMsIGxvZ2dlciB9KS5jYXRjaChlcnIgPT4ge1xuICBsb2dnZXIuZXJyb3IoZXJyKTtcbiAgcHJvY2Vzcy5leGl0KDEpO1xufSk7XG5cbnByb2Nlc3Mub24oJ1NJR0lOVCcsICgpID0+IHtcbiAgbG9nZ2VyLmluZm8oJ0NUUkwrQyBwcmVzc2VkOyBleGl0aW5nLicpO1xuICBwcm9jZXNzLmV4aXQoMCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/run.ts\n");

/***/ }),

/***/ "./src/service/codacyInfoProvider.ts":
/*!*******************************************!*\
  !*** ./src/service/codacyInfoProvider.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CodacyConfig: () => (/* binding */ CodacyConfig),\n/* harmony export */   DefaultCodacyInfoProvider: () => (/* binding */ DefaultCodacyInfoProvider)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * Copyright 2020 The Backstage Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ function _define_property(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\n\n/**\n * Holds multiple Codacy configurations.\n * @public\n */ class CodacyConfig {\n    /**\n     * Read all Codacy instance configurations.\n     * @param config - Root configuration\n     * @returns A CodacyConfig that contains all configured Codacy instances.\n     */ static fromConfig(config) {\n        var _codacyConfig_getOptionalConfigArray;\n        const DEFAULT_CODACY_NAME = 'default';\n        const codacyConfig = config.getConfig('codacy');\n        // load all named instance config\n        const namedInstanceConfig = ((_codacyConfig_getOptionalConfigArray = codacyConfig.getOptionalConfigArray('instances')) === null || _codacyConfig_getOptionalConfigArray === void 0 ? void 0 : _codacyConfig_getOptionalConfigArray.map((c)=>({\n                name: c.getString('name'),\n                baseUrl: c.getString('baseUrl'),\n                externalBaseUrl: c.getOptionalString('externalBaseUrl'),\n                apiKey: c.getString('apiKey')\n            }))) || [];\n        // load unnamed default config\n        const hasNamedDefault = namedInstanceConfig.some((x)=>x.name === DEFAULT_CODACY_NAME);\n        // Get these as optional strings and check to give a better error message\n        const baseUrl = codacyConfig.getOptionalString('baseUrl');\n        const externalBaseUrl = codacyConfig.getOptionalString('externalBaseUrl');\n        const apiKey = codacyConfig.getOptionalString('apiKey');\n        if (hasNamedDefault && (baseUrl || externalBaseUrl || apiKey)) {\n            throw new Error(`Found both a named codacy instance with name ${DEFAULT_CODACY_NAME} and top level baseUrl or apiKey config. Use only one style of config.`);\n        }\n        const unnamedNonePresent = !baseUrl && !apiKey;\n        const unnamedAllPresent = baseUrl && apiKey;\n        if (!(unnamedAllPresent || unnamedNonePresent)) {\n            throw new Error(`Found partial default codacy config. All (or none) of baseUrl and apiKey must be provided.`);\n        }\n        if (unnamedAllPresent) {\n            const unnamedInstanceConfig = [\n                {\n                    name: DEFAULT_CODACY_NAME,\n                    baseUrl,\n                    externalBaseUrl,\n                    apiKey\n                }\n            ];\n            return new CodacyConfig([\n                ...namedInstanceConfig,\n                ...unnamedInstanceConfig\n            ]);\n        }\n        return new CodacyConfig(namedInstanceConfig);\n    }\n    /**\n     * Gets a Codacy instance configuration by name, or the default one if no name is provided.\n     * @param codacyName - Optional name of the Codacy instance.\n     * @returns The requested Codacy instance.\n     * @throws Error when no default config could be found or the requested name couldn't be found in config.\n     */ getInstanceConfig(options = {}) {\n        const { codacyName } = options;\n        const DEFAULT_CODACY_NAME = 'default';\n        if (!codacyName || codacyName === DEFAULT_CODACY_NAME) {\n            // no name provided, use default\n            const instanceConfig = this.instances.find((c)=>c.name === DEFAULT_CODACY_NAME);\n            if (!instanceConfig) {\n                throw new Error(`Couldn't find a default codacy instance in the config. Either configure an instance with name ${DEFAULT_CODACY_NAME} or add a prefix to your annotation value.`);\n            }\n            return instanceConfig;\n        }\n        // A name is provided, look it up.\n        const instanceConfig = this.instances.find((c)=>c.name === codacyName);\n        if (!instanceConfig) {\n            throw new Error(`Couldn't find a codacy instance in the config with name ${codacyName}`);\n        }\n        return instanceConfig;\n    }\n    /**\n     *\n     * @param instances - All information on all codacy instance from the config file\n     */ constructor(instances){\n        _define_property(this, \"instances\", void 0);\n        this.instances = instances;\n    }\n}\n/**\n * @public\n *\n * Use default config and annotations, build using fromConfig static function.\n */ class DefaultCodacyInfoProvider {\n    /**\n     * Generate an instance from a Config instance\n     * @param config - Backend configuration\n     */ static fromConfig(config) {\n        return new DefaultCodacyInfoProvider(CodacyConfig.fromConfig(config));\n    }\n    calculate_grade(grade) {\n        switch(true){\n            case grade >= 90:\n                return 'A';\n            case grade >= 80:\n                return 'B';\n            case grade >= 70:\n                return 'C';\n            case grade >= 60:\n                return 'D';\n            default:\n                return 'F';\n        }\n    }\n    /**\n     * Call an API with provided arguments\n     * @param url - URL of the API to call\n     * @param path - path to call\n     * @param authToken - token used as basic auth user without password\n     * @param query - parameters to provide to the call\n     * @returns A promise on the answer to the API call if the answer status code is 200, undefined otherwise.\n     * @private\n     */ static async callApi(url, path, authToken) {\n        const url_with_path = `${url}/${path} `;\n        const response = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url_with_path, {\n            headers: {\n                'Content-Type': 'application/json',\n                Accept: 'application/json',\n                'api-token': authToken\n            },\n            body: JSON.stringify({}),\n            method: 'POST'\n        });\n        if (response.status === 200) {\n            return await response.json();\n        }\n        return undefined;\n    }\n    /**\n     * {@inheritDoc CodacyInfoProvider.getBaseUrl}\n     * @throws Error If configuration can't be retrieved.\n     */ getBaseUrl(options = {}) {\n        const instanceConfig = this.config.getInstanceConfig({\n            codacyName: options.instanceName\n        });\n        return {\n            baseUrl: instanceConfig.baseUrl,\n            externalBaseUrl: instanceConfig.externalBaseUrl\n        };\n    }\n    /**\n     * {@inheritDoc CodacyInfoProvider.getFindings}\n     * @throws Error If configuration can't be retrieved.\n     */ async getFindings(options) {\n        const { componentKey, instanceName } = options;\n        const { baseUrl, apiKey } = this.config.getInstanceConfig({\n            codacyName: instanceName\n        });\n        // https://app.codacy.com/api/v3/organizations/gh/MonkeyECX/security/dashboard\n        // get component info to retrieve analysis date\n        const security = await DefaultCodacyInfoProvider.callApi(baseUrl, `organizations/gh/${componentKey}/security/dashboard`, apiKey);\n        if (!security) {\n            return undefined;\n        }\n        const analysis = await DefaultCodacyInfoProvider.callApi(baseUrl, `search/analysis/organizations/gh/MonkeyECX/repositories`, apiKey);\n        if (!analysis || !analysis.data) {\n            return undefined;\n        }\n        let grade_total = 0;\n        let code_coverage = 0;\n        let issuesPercentage = 0;\n        let complexFilesPercentage = 0;\n        let duplicationPercentage = 0;\n        for(const i in analysis.data){\n            if (analysis.data[i].grade) {\n                grade_total += analysis.data[i].grade;\n            } else {\n                grade_total += 100;\n            }\n            if (analysis.data[i].coveragePercentageWithDecimals) {\n                code_coverage += analysis.data[i].coveragePercentageWithDecimals;\n            } else {\n                code_coverage += 100;\n            }\n            if (analysis.data[i].issuesPercentage) {\n                issuesPercentage += analysis.data[i].issuesPercentage;\n            } else {\n                issuesPercentage += 100;\n            }\n            if (analysis.data[i].complexFilesPercentage) {\n                complexFilesPercentage += analysis.data[i].complexFilesPercentage;\n            } else {\n                complexFilesPercentage += 100;\n            }\n            if (analysis.data[i].duplicationPercentage) {\n                duplicationPercentage += analysis.data[i].duplicationPercentage;\n            } else {\n                duplicationPercentage += 100;\n            }\n        }\n        const grade_average = grade_total / analysis.data.length;\n        const code_coverage_average = code_coverage / analysis.data.length;\n        const issuesPercentage_average = issuesPercentage / analysis.data.length;\n        const complexFilesPercentage_average = complexFilesPercentage / analysis.data.length;\n        const duplicationPercentage_average = duplicationPercentage / analysis.data.length;\n        console.log(`Grade: ${grade_average}`);\n        console.log(`Code Coverage: ${code_coverage_average}`);\n        console.log(`Issues Percentage: ${issuesPercentage_average}`);\n        console.log(`Complex Files Percentage: ${complexFilesPercentage_average}`);\n        console.log(`Duplication Percentage: ${duplicationPercentage_average}`);\n        const metrics_general = {\n            grade: grade_average,\n            grade_letter: this.calculate_grade(grade_average),\n            code_coverage: code_coverage_average,\n            issuesPercentage: issuesPercentage_average,\n            complexFilesPercentage: complexFilesPercentage_average,\n            duplicationPercentage: duplicationPercentage_average,\n            totalOpen: security.data.totalOpen,\n            totalClosed: security.data.totalClosed,\n            onTrack: security.data.onTrack,\n            closedOnTime: security.data.closedOnTime\n        };\n        return metrics_general;\n    // select the metrics that are supported by the Codacy instance\n    // const supportedMetrics =\n    //     await DefaultCodacyInfoProvider.getSupportedMetrics(baseUrl, apiKey);\n    // const wantedMetrics: string[] = [\n    //     'alert_status',\n    //     'bugs',\n    //     'reliability_rating',\n    //     'vulnerabilities',\n    //     'security_rating',\n    //     'security_hotspots_reviewed',\n    //     'security_review_rating',\n    //     'code_smells',\n    //     'sqale_rating',\n    //     'coverage',\n    //     'duplicated_lines_density',\n    // ];\n    // // only retrieve wanted metrics that are supported\n    // const metricsToQuery = wantedMetrics.filter(el =>\n    //     supportedMetrics.includes(el),\n    // );\n    // get all measures\n    // const measures =\n    //   await DefaultCodacyInfoProvider.callApi<MeasuresWrapper>(\n    //     baseUrl,\n    //     'api/measures/component',\n    //     apiKey,\n    //     {\n    //       component: componentKey,\n    //       metricKeys: metricsToQuery.join(','),\n    //     },\n    //   );\n    // if (!measures) {\n    //   return undefined;\n    // }\n    // return {\n    //   analysisDate: component.component.analysisDate,\n    //   measures: measures.component?.measures ?? [],\n    // };\n    }\n    constructor(config){\n        _define_property(this, \"config\", void 0);\n        this.config = config;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZS9jb2RhY3lJbmZvUHJvdmlkZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBOzs7Ozs7Ozs7Ozs7O0FBR0E7QUF5R0E7OztBQUdBO0FBUUE7Ozs7QUFJQTtBQVFBO0FBTkE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBeEdBOzs7QUFHQTs7QUFDQTtBQUFBO0FBcUdBO0FBRUE7Ozs7QUFJQTtBQUlBOzs7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBak5BOztBQUFBO0FBQUE7QUFrTkEiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2VtZXJzb24uY2hhbGVncmUvbW9ua2V5L2JhY2tzdGFnZS9wbHVnaW5zL2NvZGFjeS1iYWNrZW5kL3NyYy9zZXJ2aWNlL2NvZGFjeUluZm9Qcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjAgVGhlIEJhY2tzdGFnZSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BiYWNrc3RhZ2UvY29uZmlnJztcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcblxuLyoqXG4gKiBQcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IGNvZGFjeSBpbnN0YW5jZXMgYW5kIHByb2plY3RzIGNvbnRhaW5lZCB3aXRoaW5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb2RhY3lJbmZvUHJvdmlkZXIge1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY29kYWN5IFVSTCBpbiBjb25maWd1cmF0aW9uIGZyb20gYSBwcm92aWRlZCBpbnN0YW5jZU5hbWUuXG4gICAgICpcbiAgICAgKiBJZiBpbnN0YW5jZU5hbWUgaXMgb21pdHRlZCwgZGVmYXVsdCBjb2RhY3kgaW5zdGFuY2UgaXMgcXVlcmllZCBpbiBjb25maWdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpbnN0YW5jZU5hbWUgLSBOYW1lIG9mIHRoZSBjb2RhY3kgaW5zdGFuY2UgdG8gZ2V0IHRoZSBpbmZvIGZyb21cbiAgICAgKiBAcmV0dXJucyB0aGUgdXJsIG9mIHRoZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIGdldEJhc2VVcmwob3B0aW9ucz86IHsgaW5zdGFuY2VOYW1lPzogc3RyaW5nIH0pOiB7XG4gICAgICAgIGJhc2VVcmw6IHN0cmluZztcbiAgICAgICAgZXh0ZXJuYWxCYXNlVXJsPzogc3RyaW5nO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBRdWVyeSB0aGUgY29kYWN5IGluc3RhbmNlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGluc3RhbmNlTmFtZSB0byBnZXQgYWxsXG4gICAgICogbWVhc3VyZXMgZm9yIHRoZSBjb21wb25lbnQgb2Yga2V5IGNvbXBvbmVudEtleS5cbiAgICAgKlxuICAgICAqIElmIGluc3RhbmNlTmFtZSBpcyBvbWl0dGVkLCBkZWZhdWx0IGNvZGFjeSBpbnN0YW5jZSBpcyBxdWVyaWVkIGluIGNvbmZpZ1xuICAgICAqXG4gICAgICogQHBhcmFtIGNvbXBvbmVudEtleSAtIGNvbXBvbmVudCBrZXkgb2YgdGhlIHByb2plY3Qgd2Ugd2FudCB0byBnZXQgbWVhc3VyZSBmcm9tLlxuICAgICAqIEBwYXJhbSBpbnN0YW5jZU5hbWUgLSBuYW1lIG9mIHRoZSBpbnN0YW5jZSAoaW4gY29uZmlnKSB3aGVyZSB0aGUgcHJvamVjdCBpcyBob3N0ZWQuXG4gICAgICogQHJldHVybnMgQWxsIG1lYXN1cmVzIHdpdGggdGhlIGFuYWx5c2lzIGRhdGUuIFdpbGwgcmV0dXJuIHVuZGVmaW5lZCBpZiB3ZVxuICAgICAqIGNhbid0IHByb3ZpZGUgdGhlIGZ1bGwgcmVzcG9uc2VcbiAgICAgKi9cbiAgICBnZXRGaW5kaW5ncyhvcHRpb25zOiB7XG4gICAgICAgIGNvbXBvbmVudEtleTogc3RyaW5nO1xuICAgICAgICBpbnN0YW5jZU5hbWU/OiBzdHJpbmc7XG4gICAgfSk6IFByb21pc2U8Q29kYWN5RmluZGluZ3MgfCB1bmRlZmluZWQ+O1xufVxuXG4vKipcbiAqIEluZm9ybWF0aW9uIHJldHJpZXZlZCBmb3IgYSBzcGVjaWZpYyBwcm9qZWN0IGluIENvZGFjeVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgaW50ZXJmYWNlIENvZGFjeUZpbmRpbmdzIHtcbn1cblxuLyoqXG4gKiBBIHNwZWNpZmljIG1lYXN1cmUgb24gYSBwcm9qZWN0IGluIENvZGFjeVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgaW50ZXJmYWNlIENvZGFjeU1lYXN1cmUge1xuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIG1lYXN1cmVcbiAgICAgKi9cbiAgICBtZXRyaWM6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBWYWx1ZSBvZiB0aGUgbWVhc3VyZVxuICAgICAqL1xuICAgIHZhbHVlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW5mb3JtYXRpb24gYWJvdXQgYSBDb2RhY3kgaW5zdGFuY2UuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29kYWN5SW5zdGFuY2VDb25maWcge1xuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIGluc3RhbmNlLiBBbiBpbnN0YW5jZSBuYW1lIGluIGNvbmZpZ3VyYXRpb24gYW5kIGNhdGFsb2cgc2hvdWxkIG1hdGNoLlxuICAgICAqL1xuICAgIG5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBCYXNlIHVybCB0byBhY2Nlc3MgdGhlIGluc3RhbmNlXG4gICAgICovXG4gICAgYmFzZVVybDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEV4dGVybmFsIHVybCB0byBhY2Nlc3MgdGhlIGluc3RhbmNlIGZyb20gdGhlIGZyb250ZW5kXG4gICAgICovXG4gICAgZXh0ZXJuYWxCYXNlVXJsPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEFjY2VzcyB0b2tlbiB0byBhY2Nlc3MgdGhlIGNvZGFjeSBpbnN0YW5jZSBhcyBnZW5lcmF0ZWQgaW4gdXNlciBwcm9maWxlLlxuICAgICAqL1xuICAgIGFwaUtleTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ29tcG9uZW50V3JhcHBlciB7XG4gICAgdG90YWxPcGVuOiBudW1iZXI7XG4gICAgdG90YWxDbG9zZWQ6IG51bWJlcjtcbiAgICBvblRyYWNrOiBudW1iZXI7XG4gICAgY2xvc2VkT25UaW1lOiBudW1iZXI7XG4gICAgZGF0YToge1xuICAgICAgICBncmFkZTogbnVtYmVyO1xuICAgICAgICBjb3ZlcmFnZVBlcmNlbnRhZ2VXaXRoRGVjaW1hbHM6IG51bWJlcjtcbiAgICAgICAgaXNzdWVzUGVyY2VudGFnZTogbnVtYmVyO1xuICAgICAgICBjb21wbGV4RmlsZXNQZXJjZW50YWdlOiBudW1iZXI7XG4gICAgICAgIGR1cGxpY2F0aW9uUGVyY2VudGFnZTogbnVtYmVyO1xuICAgIH1bXTtcbn1cblxuaW50ZXJmYWNlIFNlY3VyaXR5Q29tcG9uZW50V3JhcHBlciB7XG4gICAgZGF0YToge1xuICAgICAgICB0b3RhbE9wZW46IG51bWJlcjtcbiAgICAgICAgdG90YWxDbG9zZWQ6IG51bWJlcjtcbiAgICAgICAgb25UcmFjazogbnVtYmVyO1xuICAgICAgICBjbG9zZWRPblRpbWU6IG51bWJlcjtcbiAgICB9O1xufVxuXG4vKipcbiAqIEhvbGRzIG11bHRpcGxlIENvZGFjeSBjb25maWd1cmF0aW9ucy5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIENvZGFjeUNvbmZpZyB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2VzIC0gQWxsIGluZm9ybWF0aW9uIG9uIGFsbCBjb2RhY3kgaW5zdGFuY2UgZnJvbSB0aGUgY29uZmlnIGZpbGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgaW5zdGFuY2VzOiBDb2RhY3lJbnN0YW5jZUNvbmZpZ1tdKSB7IH1cblxuICAgIC8qKlxuICAgICAqIFJlYWQgYWxsIENvZGFjeSBpbnN0YW5jZSBjb25maWd1cmF0aW9ucy5cbiAgICAgKiBAcGFyYW0gY29uZmlnIC0gUm9vdCBjb25maWd1cmF0aW9uXG4gICAgICogQHJldHVybnMgQSBDb2RhY3lDb25maWcgdGhhdCBjb250YWlucyBhbGwgY29uZmlndXJlZCBDb2RhY3kgaW5zdGFuY2VzLlxuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tQ29uZmlnKGNvbmZpZzogQ29uZmlnKTogQ29kYWN5Q29uZmlnIHtcbiAgICAgICAgY29uc3QgREVGQVVMVF9DT0RBQ1lfTkFNRSA9ICdkZWZhdWx0JztcblxuICAgICAgICBjb25zdCBjb2RhY3lDb25maWcgPSBjb25maWcuZ2V0Q29uZmlnKCdjb2RhY3knKTtcblxuICAgICAgICAvLyBsb2FkIGFsbCBuYW1lZCBpbnN0YW5jZSBjb25maWdcbiAgICAgICAgY29uc3QgbmFtZWRJbnN0YW5jZUNvbmZpZyA9XG4gICAgICAgICAgICBjb2RhY3lDb25maWcuZ2V0T3B0aW9uYWxDb25maWdBcnJheSgnaW5zdGFuY2VzJyk/Lm1hcChjID0+ICh7XG4gICAgICAgICAgICAgICAgbmFtZTogYy5nZXRTdHJpbmcoJ25hbWUnKSxcbiAgICAgICAgICAgICAgICBiYXNlVXJsOiBjLmdldFN0cmluZygnYmFzZVVybCcpLFxuICAgICAgICAgICAgICAgIGV4dGVybmFsQmFzZVVybDogYy5nZXRPcHRpb25hbFN0cmluZygnZXh0ZXJuYWxCYXNlVXJsJyksXG4gICAgICAgICAgICAgICAgYXBpS2V5OiBjLmdldFN0cmluZygnYXBpS2V5JyksXG4gICAgICAgICAgICB9KSkgfHwgW107XG5cbiAgICAgICAgLy8gbG9hZCB1bm5hbWVkIGRlZmF1bHQgY29uZmlnXG4gICAgICAgIGNvbnN0IGhhc05hbWVkRGVmYXVsdCA9IG5hbWVkSW5zdGFuY2VDb25maWcuc29tZShcbiAgICAgICAgICAgIHggPT4geC5uYW1lID09PSBERUZBVUxUX0NPREFDWV9OQU1FLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIEdldCB0aGVzZSBhcyBvcHRpb25hbCBzdHJpbmdzIGFuZCBjaGVjayB0byBnaXZlIGEgYmV0dGVyIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgY29uc3QgYmFzZVVybCA9IGNvZGFjeUNvbmZpZy5nZXRPcHRpb25hbFN0cmluZygnYmFzZVVybCcpO1xuICAgICAgICBjb25zdCBleHRlcm5hbEJhc2VVcmwgPSBjb2RhY3lDb25maWcuZ2V0T3B0aW9uYWxTdHJpbmcoJ2V4dGVybmFsQmFzZVVybCcpO1xuICAgICAgICBjb25zdCBhcGlLZXkgPSBjb2RhY3lDb25maWcuZ2V0T3B0aW9uYWxTdHJpbmcoJ2FwaUtleScpO1xuXG4gICAgICAgIGlmIChoYXNOYW1lZERlZmF1bHQgJiYgKGJhc2VVcmwgfHwgZXh0ZXJuYWxCYXNlVXJsIHx8IGFwaUtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgRm91bmQgYm90aCBhIG5hbWVkIGNvZGFjeSBpbnN0YW5jZSB3aXRoIG5hbWUgJHtERUZBVUxUX0NPREFDWV9OQU1FfSBhbmQgdG9wIGxldmVsIGJhc2VVcmwgb3IgYXBpS2V5IGNvbmZpZy4gVXNlIG9ubHkgb25lIHN0eWxlIG9mIGNvbmZpZy5gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVubmFtZWROb25lUHJlc2VudCA9ICFiYXNlVXJsICYmICFhcGlLZXk7XG4gICAgICAgIGNvbnN0IHVubmFtZWRBbGxQcmVzZW50ID0gYmFzZVVybCAmJiBhcGlLZXk7XG4gICAgICAgIGlmICghKHVubmFtZWRBbGxQcmVzZW50IHx8IHVubmFtZWROb25lUHJlc2VudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgRm91bmQgcGFydGlhbCBkZWZhdWx0IGNvZGFjeSBjb25maWcuIEFsbCAob3Igbm9uZSkgb2YgYmFzZVVybCBhbmQgYXBpS2V5IG11c3QgYmUgcHJvdmlkZWQuYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodW5uYW1lZEFsbFByZXNlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHVubmFtZWRJbnN0YW5jZUNvbmZpZyA9IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6IERFRkFVTFRfQ09EQUNZX05BTUUsIGJhc2VVcmwsIGV4dGVybmFsQmFzZVVybCwgYXBpS2V5IH0sXG4gICAgICAgICAgICBdIGFzIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgYmFzZVVybDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4dGVybmFsQmFzZVVybD86IHN0cmluZztcbiAgICAgICAgICAgICAgICBhcGlLZXk6IHN0cmluZztcbiAgICAgICAgICAgIH1bXTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2RhY3lDb25maWcoW1xuICAgICAgICAgICAgICAgIC4uLm5hbWVkSW5zdGFuY2VDb25maWcsXG4gICAgICAgICAgICAgICAgLi4udW5uYW1lZEluc3RhbmNlQ29uZmlnLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IENvZGFjeUNvbmZpZyhuYW1lZEluc3RhbmNlQ29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgQ29kYWN5IGluc3RhbmNlIGNvbmZpZ3VyYXRpb24gYnkgbmFtZSwgb3IgdGhlIGRlZmF1bHQgb25lIGlmIG5vIG5hbWUgaXMgcHJvdmlkZWQuXG4gICAgICogQHBhcmFtIGNvZGFjeU5hbWUgLSBPcHRpb25hbCBuYW1lIG9mIHRoZSBDb2RhY3kgaW5zdGFuY2UuXG4gICAgICogQHJldHVybnMgVGhlIHJlcXVlc3RlZCBDb2RhY3kgaW5zdGFuY2UuXG4gICAgICogQHRocm93cyBFcnJvciB3aGVuIG5vIGRlZmF1bHQgY29uZmlnIGNvdWxkIGJlIGZvdW5kIG9yIHRoZSByZXF1ZXN0ZWQgbmFtZSBjb3VsZG4ndCBiZSBmb3VuZCBpbiBjb25maWcuXG4gICAgICovXG4gICAgZ2V0SW5zdGFuY2VDb25maWcoXG4gICAgICAgIG9wdGlvbnM6IHsgY29kYWN5TmFtZT86IHN0cmluZyB9ID0ge30sXG4gICAgKTogQ29kYWN5SW5zdGFuY2VDb25maWcge1xuICAgICAgICBjb25zdCB7IGNvZGFjeU5hbWUgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IERFRkFVTFRfQ09EQUNZX05BTUUgPSAnZGVmYXVsdCc7XG5cbiAgICAgICAgaWYgKCFjb2RhY3lOYW1lIHx8IGNvZGFjeU5hbWUgPT09IERFRkFVTFRfQ09EQUNZX05BTUUpIHtcbiAgICAgICAgICAgIC8vIG5vIG5hbWUgcHJvdmlkZWQsIHVzZSBkZWZhdWx0XG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZUNvbmZpZyA9IHRoaXMuaW5zdGFuY2VzLmZpbmQoXG4gICAgICAgICAgICAgICAgYyA9PiBjLm5hbWUgPT09IERFRkFVTFRfQ09EQUNZX05BTUUsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoIWluc3RhbmNlQ29uZmlnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgICBgQ291bGRuJ3QgZmluZCBhIGRlZmF1bHQgY29kYWN5IGluc3RhbmNlIGluIHRoZSBjb25maWcuIEVpdGhlciBjb25maWd1cmUgYW4gaW5zdGFuY2Ugd2l0aCBuYW1lICR7REVGQVVMVF9DT0RBQ1lfTkFNRX0gb3IgYWRkIGEgcHJlZml4IHRvIHlvdXIgYW5ub3RhdGlvbiB2YWx1ZS5gLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZUNvbmZpZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEEgbmFtZSBpcyBwcm92aWRlZCwgbG9vayBpdCB1cC5cbiAgICAgICAgY29uc3QgaW5zdGFuY2VDb25maWcgPSB0aGlzLmluc3RhbmNlcy5maW5kKGMgPT4gYy5uYW1lID09PSBjb2RhY3lOYW1lKTtcblxuICAgICAgICBpZiAoIWluc3RhbmNlQ29uZmlnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYENvdWxkbid0IGZpbmQgYSBjb2RhY3kgaW5zdGFuY2UgaW4gdGhlIGNvbmZpZyB3aXRoIG5hbWUgJHtjb2RhY3lOYW1lfWAsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnN0YW5jZUNvbmZpZztcbiAgICB9XG59XG5cbi8qKlxuICogQHB1YmxpY1xuICpcbiAqIFVzZSBkZWZhdWx0IGNvbmZpZyBhbmQgYW5ub3RhdGlvbnMsIGJ1aWxkIHVzaW5nIGZyb21Db25maWcgc3RhdGljIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgRGVmYXVsdENvZGFjeUluZm9Qcm92aWRlciBpbXBsZW1lbnRzIENvZGFjeUluZm9Qcm92aWRlciB7XG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbmZpZzogQ29kYWN5Q29uZmlnKSB7IH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGFuIGluc3RhbmNlIGZyb20gYSBDb25maWcgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gY29uZmlnIC0gQmFja2VuZCBjb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgc3RhdGljIGZyb21Db25maWcoY29uZmlnOiBDb25maWcpOiBEZWZhdWx0Q29kYWN5SW5mb1Byb3ZpZGVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEZWZhdWx0Q29kYWN5SW5mb1Byb3ZpZGVyKENvZGFjeUNvbmZpZy5mcm9tQ29uZmlnKGNvbmZpZykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlX2dyYWRlKGdyYWRlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgZ3JhZGUgPj0gOTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBJztcbiAgICAgICAgICAgIGNhc2UgZ3JhZGUgPj0gODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdCJztcbiAgICAgICAgICAgIGNhc2UgZ3JhZGUgPj0gNzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdDJztcbiAgICAgICAgICAgIGNhc2UgZ3JhZGUgPj0gNjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdEJztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdGJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgYW4gQVBJIHdpdGggcHJvdmlkZWQgYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCAtIFVSTCBvZiB0aGUgQVBJIHRvIGNhbGxcbiAgICAgKiBAcGFyYW0gcGF0aCAtIHBhdGggdG8gY2FsbFxuICAgICAqIEBwYXJhbSBhdXRoVG9rZW4gLSB0b2tlbiB1c2VkIGFzIGJhc2ljIGF1dGggdXNlciB3aXRob3V0IHBhc3N3b3JkXG4gICAgICogQHBhcmFtIHF1ZXJ5IC0gcGFyYW1ldGVycyB0byBwcm92aWRlIHRvIHRoZSBjYWxsXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIG9uIHRoZSBhbnN3ZXIgdG8gdGhlIEFQSSBjYWxsIGlmIHRoZSBhbnN3ZXIgc3RhdHVzIGNvZGUgaXMgMjAwLCB1bmRlZmluZWQgb3RoZXJ3aXNlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgY2FsbEFwaTxUPihcbiAgICAgICAgdXJsOiBzdHJpbmcsXG4gICAgICAgIHBhdGg6IHN0cmluZyxcbiAgICAgICAgYXV0aFRva2VuOiBzdHJpbmcsXG4gICAgKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPiB7XG4gICAgICAgIGNvbnN0IHVybF93aXRoX3BhdGggPSBgJHt1cmx9LyR7cGF0aH0gYDtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybF93aXRoX3BhdGgsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdhcGktdG9rZW4nOiBhdXRoVG9rZW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe30pLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHJldHVybiAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBUO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0Bpbmhlcml0RG9jIENvZGFjeUluZm9Qcm92aWRlci5nZXRCYXNlVXJsfVxuICAgICAqIEB0aHJvd3MgRXJyb3IgSWYgY29uZmlndXJhdGlvbiBjYW4ndCBiZSByZXRyaWV2ZWQuXG4gICAgICovXG4gICAgZ2V0QmFzZVVybChvcHRpb25zOiB7IGluc3RhbmNlTmFtZT86IHN0cmluZyB9ID0ge30pOiB7XG4gICAgICAgIGJhc2VVcmw6IHN0cmluZztcbiAgICAgICAgZXh0ZXJuYWxCYXNlVXJsPzogc3RyaW5nO1xuICAgIH0ge1xuICAgICAgICBjb25zdCBpbnN0YW5jZUNvbmZpZyA9IHRoaXMuY29uZmlnLmdldEluc3RhbmNlQ29uZmlnKHtcbiAgICAgICAgICAgIGNvZGFjeU5hbWU6IG9wdGlvbnMuaW5zdGFuY2VOYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJhc2VVcmw6IGluc3RhbmNlQ29uZmlnLmJhc2VVcmwsXG4gICAgICAgICAgICBleHRlcm5hbEJhc2VVcmw6IGluc3RhbmNlQ29uZmlnLmV4dGVybmFsQmFzZVVybCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGluaGVyaXREb2MgQ29kYWN5SW5mb1Byb3ZpZGVyLmdldEZpbmRpbmdzfVxuICAgICAqIEB0aHJvd3MgRXJyb3IgSWYgY29uZmlndXJhdGlvbiBjYW4ndCBiZSByZXRyaWV2ZWQuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0RmluZGluZ3Mob3B0aW9uczoge1xuICAgICAgICBjb21wb25lbnRLZXk6IHN0cmluZztcbiAgICAgICAgaW5zdGFuY2VOYW1lPzogc3RyaW5nO1xuICAgIH0pOiBQcm9taXNlPENvZGFjeUZpbmRpbmdzIHwgdW5kZWZpbmVkPiB7XG4gICAgICAgIGNvbnN0IHsgY29tcG9uZW50S2V5LCBpbnN0YW5jZU5hbWUgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHsgYmFzZVVybCwgYXBpS2V5IH0gPSB0aGlzLmNvbmZpZy5nZXRJbnN0YW5jZUNvbmZpZyh7XG4gICAgICAgICAgICBjb2RhY3lOYW1lOiBpbnN0YW5jZU5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBodHRwczovL2FwcC5jb2RhY3kuY29tL2FwaS92My9vcmdhbml6YXRpb25zL2doL01vbmtleUVDWC9zZWN1cml0eS9kYXNoYm9hcmRcbiAgICAgICAgLy8gZ2V0IGNvbXBvbmVudCBpbmZvIHRvIHJldHJpZXZlIGFuYWx5c2lzIGRhdGVcbiAgICAgICAgY29uc3Qgc2VjdXJpdHkgPSBhd2FpdCBEZWZhdWx0Q29kYWN5SW5mb1Byb3ZpZGVyLmNhbGxBcGk8U2VjdXJpdHlDb21wb25lbnRXcmFwcGVyPihcbiAgICAgICAgICAgIGJhc2VVcmwsXG4gICAgICAgICAgICBgb3JnYW5pemF0aW9ucy9naC8ke2NvbXBvbmVudEtleX0vc2VjdXJpdHkvZGFzaGJvYXJkYCxcbiAgICAgICAgICAgIGFwaUtleSxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFzZWN1cml0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgYW5hbHlzaXMgPSBhd2FpdCBEZWZhdWx0Q29kYWN5SW5mb1Byb3ZpZGVyLmNhbGxBcGk8Q29tcG9uZW50V3JhcHBlcj4oXG4gICAgICAgICAgICBiYXNlVXJsLFxuICAgICAgICAgICAgYHNlYXJjaC9hbmFseXNpcy9vcmdhbml6YXRpb25zL2doL01vbmtleUVDWC9yZXBvc2l0b3JpZXNgLFxuICAgICAgICAgICAgYXBpS2V5LFxuICAgICAgICApO1xuICAgICAgICBpZiAoIWFuYWx5c2lzIHx8ICFhbmFseXNpcy5kYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGdyYWRlX3RvdGFsID0gMDtcbiAgICAgICAgbGV0IGNvZGVfY292ZXJhZ2UgPSAwO1xuICAgICAgICBsZXQgaXNzdWVzUGVyY2VudGFnZSA9IDA7XG4gICAgICAgIGxldCBjb21wbGV4RmlsZXNQZXJjZW50YWdlID0gMDtcbiAgICAgICAgbGV0IGR1cGxpY2F0aW9uUGVyY2VudGFnZSA9IDA7XG5cbiAgICAgICAgZm9yIChjb25zdCBpIGluIGFuYWx5c2lzLmRhdGEpIHtcbiAgICAgICAgICAgIGlmIChhbmFseXNpcy5kYXRhW2ldLmdyYWRlKSB7XG4gICAgICAgICAgICAgICAgZ3JhZGVfdG90YWwgKz0gYW5hbHlzaXMuZGF0YVtpXS5ncmFkZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JhZGVfdG90YWwgKz0gMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFuYWx5c2lzLmRhdGFbaV0uY292ZXJhZ2VQZXJjZW50YWdlV2l0aERlY2ltYWxzKSB7XG4gICAgICAgICAgICAgICAgY29kZV9jb3ZlcmFnZSArPSBhbmFseXNpcy5kYXRhW2ldLmNvdmVyYWdlUGVyY2VudGFnZVdpdGhEZWNpbWFscztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29kZV9jb3ZlcmFnZSArPSAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYW5hbHlzaXMuZGF0YVtpXS5pc3N1ZXNQZXJjZW50YWdlKSB7XG4gICAgICAgICAgICAgICAgaXNzdWVzUGVyY2VudGFnZSArPSBhbmFseXNpcy5kYXRhW2ldLmlzc3Vlc1BlcmNlbnRhZ2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlzc3Vlc1BlcmNlbnRhZ2UgKz0gMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFuYWx5c2lzLmRhdGFbaV0uY29tcGxleEZpbGVzUGVyY2VudGFnZSkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXhGaWxlc1BlcmNlbnRhZ2UgKz0gYW5hbHlzaXMuZGF0YVtpXS5jb21wbGV4RmlsZXNQZXJjZW50YWdlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wbGV4RmlsZXNQZXJjZW50YWdlICs9IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbmFseXNpcy5kYXRhW2ldLmR1cGxpY2F0aW9uUGVyY2VudGFnZSkge1xuICAgICAgICAgICAgICAgIGR1cGxpY2F0aW9uUGVyY2VudGFnZSArPSBhbmFseXNpcy5kYXRhW2ldLmR1cGxpY2F0aW9uUGVyY2VudGFnZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZHVwbGljYXRpb25QZXJjZW50YWdlICs9IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdyYWRlX2F2ZXJhZ2UgPSBncmFkZV90b3RhbCAvIGFuYWx5c2lzLmRhdGEubGVuZ3RoO1xuICAgICAgICBjb25zdCBjb2RlX2NvdmVyYWdlX2F2ZXJhZ2UgPSBjb2RlX2NvdmVyYWdlIC8gYW5hbHlzaXMuZGF0YS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGlzc3Vlc1BlcmNlbnRhZ2VfYXZlcmFnZSA9IGlzc3Vlc1BlcmNlbnRhZ2UgLyBhbmFseXNpcy5kYXRhLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY29tcGxleEZpbGVzUGVyY2VudGFnZV9hdmVyYWdlID1cbiAgICAgICAgICAgIGNvbXBsZXhGaWxlc1BlcmNlbnRhZ2UgLyBhbmFseXNpcy5kYXRhLmxlbmd0aDtcbiAgICAgICAgY29uc3QgZHVwbGljYXRpb25QZXJjZW50YWdlX2F2ZXJhZ2UgPVxuICAgICAgICAgICAgZHVwbGljYXRpb25QZXJjZW50YWdlIC8gYW5hbHlzaXMuZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgY29uc29sZS5sb2coYEdyYWRlOiAke2dyYWRlX2F2ZXJhZ2V9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDb2RlIENvdmVyYWdlOiAke2NvZGVfY292ZXJhZ2VfYXZlcmFnZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYElzc3VlcyBQZXJjZW50YWdlOiAke2lzc3Vlc1BlcmNlbnRhZ2VfYXZlcmFnZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYENvbXBsZXggRmlsZXMgUGVyY2VudGFnZTogJHtjb21wbGV4RmlsZXNQZXJjZW50YWdlX2F2ZXJhZ2V9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBEdXBsaWNhdGlvbiBQZXJjZW50YWdlOiAke2R1cGxpY2F0aW9uUGVyY2VudGFnZV9hdmVyYWdlfWApO1xuXG4gICAgICAgIGNvbnN0IG1ldHJpY3NfZ2VuZXJhbCA9IHtcbiAgICAgICAgICAgIGdyYWRlOiBncmFkZV9hdmVyYWdlLFxuICAgICAgICAgICAgZ3JhZGVfbGV0dGVyOiB0aGlzLmNhbGN1bGF0ZV9ncmFkZShncmFkZV9hdmVyYWdlKSxcbiAgICAgICAgICAgIGNvZGVfY292ZXJhZ2U6IGNvZGVfY292ZXJhZ2VfYXZlcmFnZSxcbiAgICAgICAgICAgIGlzc3Vlc1BlcmNlbnRhZ2U6IGlzc3Vlc1BlcmNlbnRhZ2VfYXZlcmFnZSxcbiAgICAgICAgICAgIGNvbXBsZXhGaWxlc1BlcmNlbnRhZ2U6IGNvbXBsZXhGaWxlc1BlcmNlbnRhZ2VfYXZlcmFnZSxcbiAgICAgICAgICAgIGR1cGxpY2F0aW9uUGVyY2VudGFnZTogZHVwbGljYXRpb25QZXJjZW50YWdlX2F2ZXJhZ2UsXG4gICAgICAgICAgICB0b3RhbE9wZW46IHNlY3VyaXR5LmRhdGEudG90YWxPcGVuLFxuICAgICAgICAgICAgdG90YWxDbG9zZWQ6IHNlY3VyaXR5LmRhdGEudG90YWxDbG9zZWQsXG4gICAgICAgICAgICBvblRyYWNrOiBzZWN1cml0eS5kYXRhLm9uVHJhY2ssXG4gICAgICAgICAgICBjbG9zZWRPblRpbWU6IHNlY3VyaXR5LmRhdGEuY2xvc2VkT25UaW1lLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBtZXRyaWNzX2dlbmVyYWw7XG5cbiAgICAgICAgLy8gc2VsZWN0IHRoZSBtZXRyaWNzIHRoYXQgYXJlIHN1cHBvcnRlZCBieSB0aGUgQ29kYWN5IGluc3RhbmNlXG4gICAgICAgIC8vIGNvbnN0IHN1cHBvcnRlZE1ldHJpY3MgPVxuICAgICAgICAvLyAgICAgYXdhaXQgRGVmYXVsdENvZGFjeUluZm9Qcm92aWRlci5nZXRTdXBwb3J0ZWRNZXRyaWNzKGJhc2VVcmwsIGFwaUtleSk7XG4gICAgICAgIC8vIGNvbnN0IHdhbnRlZE1ldHJpY3M6IHN0cmluZ1tdID0gW1xuICAgICAgICAvLyAgICAgJ2FsZXJ0X3N0YXR1cycsXG4gICAgICAgIC8vICAgICAnYnVncycsXG4gICAgICAgIC8vICAgICAncmVsaWFiaWxpdHlfcmF0aW5nJyxcbiAgICAgICAgLy8gICAgICd2dWxuZXJhYmlsaXRpZXMnLFxuICAgICAgICAvLyAgICAgJ3NlY3VyaXR5X3JhdGluZycsXG4gICAgICAgIC8vICAgICAnc2VjdXJpdHlfaG90c3BvdHNfcmV2aWV3ZWQnLFxuICAgICAgICAvLyAgICAgJ3NlY3VyaXR5X3Jldmlld19yYXRpbmcnLFxuICAgICAgICAvLyAgICAgJ2NvZGVfc21lbGxzJyxcbiAgICAgICAgLy8gICAgICdzcWFsZV9yYXRpbmcnLFxuICAgICAgICAvLyAgICAgJ2NvdmVyYWdlJyxcbiAgICAgICAgLy8gICAgICdkdXBsaWNhdGVkX2xpbmVzX2RlbnNpdHknLFxuICAgICAgICAvLyBdO1xuXG4gICAgICAgIC8vIC8vIG9ubHkgcmV0cmlldmUgd2FudGVkIG1ldHJpY3MgdGhhdCBhcmUgc3VwcG9ydGVkXG4gICAgICAgIC8vIGNvbnN0IG1ldHJpY3NUb1F1ZXJ5ID0gd2FudGVkTWV0cmljcy5maWx0ZXIoZWwgPT5cbiAgICAgICAgLy8gICAgIHN1cHBvcnRlZE1ldHJpY3MuaW5jbHVkZXMoZWwpLFxuICAgICAgICAvLyApO1xuXG4gICAgICAgIC8vIGdldCBhbGwgbWVhc3VyZXNcbiAgICAgICAgLy8gY29uc3QgbWVhc3VyZXMgPVxuICAgICAgICAvLyAgIGF3YWl0IERlZmF1bHRDb2RhY3lJbmZvUHJvdmlkZXIuY2FsbEFwaTxNZWFzdXJlc1dyYXBwZXI+KFxuICAgICAgICAvLyAgICAgYmFzZVVybCxcbiAgICAgICAgLy8gICAgICdhcGkvbWVhc3VyZXMvY29tcG9uZW50JyxcbiAgICAgICAgLy8gICAgIGFwaUtleSxcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgY29tcG9uZW50OiBjb21wb25lbnRLZXksXG4gICAgICAgIC8vICAgICAgIG1ldHJpY0tleXM6IG1ldHJpY3NUb1F1ZXJ5LmpvaW4oJywnKSxcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgKTtcbiAgICAgICAgLy8gaWYgKCFtZWFzdXJlcykge1xuICAgICAgICAvLyAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyByZXR1cm4ge1xuICAgICAgICAvLyAgIGFuYWx5c2lzRGF0ZTogY29tcG9uZW50LmNvbXBvbmVudC5hbmFseXNpc0RhdGUsXG4gICAgICAgIC8vICAgbWVhc3VyZXM6IG1lYXN1cmVzLmNvbXBvbmVudD8ubWVhc3VyZXMgPz8gW10sXG4gICAgICAgIC8vIH07XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/service/codacyInfoProvider.ts\n");

/***/ }),

/***/ "./src/service/router.ts":
/*!*******************************!*\
  !*** ./src/service/router.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRouter: () => (/* binding */ createRouter)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _backstage_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @backstage/errors */ \"@backstage/errors\");\n/* harmony import */ var _backstage_errors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_backstage_errors__WEBPACK_IMPORTED_MODULE_3__);\n/*\n * Copyright 2020 The Backstage Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\n\n\n/**\n * @public\n *\n * Constructs a codacy router.\n *\n * Expose endpoint to get information on or for a codacy instance.\n *\n * @param options - Dependencies of the router\n */ async function createRouter(options) {\n    const { logger, codacyInfoProvider } = options;\n    const router = express_promise_router__WEBPACK_IMPORTED_MODULE_2___default()();\n    router.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());\n    router.get('/health', (_, response)=>{\n        logger.info('PONG!');\n        response.json({\n            status: 'ok'\n        });\n    });\n    router.get('/findings', async (request, response)=>{\n        const componentKey = \"MonkeyECX\"; //request.query.componentKey as string;\n        const instanceKey = \"codacy\"; //request.query.instanceKey as string;\n        if (!componentKey) throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_3__.InputError('ComponentKey must be provided as a single string.');\n        logger.info(instanceKey ? `Retrieving findings for component ${componentKey}  in codacy instance name ${instanceKey}` : `Retrieving findings for component ${componentKey} in default codacy instance`);\n        response.json(await codacyInfoProvider.getFindings({\n            componentKey,\n            instanceName: instanceKey\n        }));\n    });\n    router.use((0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.errorHandler)());\n    return router;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZS9yb3V0ZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFHQTtBQUNBO0FBR0E7QUFZQTs7Ozs7Ozs7QUFRQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9lbWVyc29uLmNoYWxlZ3JlL21vbmtleS9iYWNrc3RhZ2UvcGx1Z2lucy9jb2RhY3ktYmFja2VuZC9zcmMvc2VydmljZS9yb3V0ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDIwIFRoZSBCYWNrc3RhZ2UgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBlcnJvckhhbmRsZXIgfSBmcm9tICdAYmFja3N0YWdlL2JhY2tlbmQtY29tbW9uJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICdleHByZXNzLXByb21pc2Utcm91dGVyJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJ3dpbnN0b24nO1xuaW1wb3J0IHsgQ29kYWN5SW5mb1Byb3ZpZGVyIH0gZnJvbSAnLi9jb2RhY3lJbmZvUHJvdmlkZXInO1xuaW1wb3J0IHsgSW5wdXRFcnJvciB9IGZyb20gJ0BiYWNrc3RhZ2UvZXJyb3JzJztcblxuXG4vKipcbiAqIERlcGVuZGVuY2llcyBuZWVkZWQgYnkgdGhlIHJvdXRlclxuICogQHB1YmxpY1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlck9wdGlvbnMge1xuICBsb2dnZXI6IExvZ2dlcjtcbiAgY29kYWN5SW5mb1Byb3ZpZGVyOiBDb2RhY3lJbmZvUHJvdmlkZXI7XG59XG5cbi8qKlxuICogQHB1YmxpY1xuICpcbiAqIENvbnN0cnVjdHMgYSBjb2RhY3kgcm91dGVyLlxuICpcbiAqIEV4cG9zZSBlbmRwb2ludCB0byBnZXQgaW5mb3JtYXRpb24gb24gb3IgZm9yIGEgY29kYWN5IGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSBvcHRpb25zIC0gRGVwZW5kZW5jaWVzIG9mIHRoZSByb3V0ZXJcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJvdXRlcihcbiAgb3B0aW9uczogUm91dGVyT3B0aW9ucyxcbik6IFByb21pc2U8ZXhwcmVzcy5Sb3V0ZXI+IHtcbiAgY29uc3QgeyBsb2dnZXIsIGNvZGFjeUluZm9Qcm92aWRlciB9ID0gb3B0aW9ucztcblxuICBjb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcbiAgcm91dGVyLnVzZShleHByZXNzLmpzb24oKSk7XG5cbiAgcm91dGVyLmdldCgnL2hlYWx0aCcsIChfLCByZXNwb25zZSkgPT4ge1xuICAgIGxvZ2dlci5pbmZvKCdQT05HIScpO1xuICAgIHJlc3BvbnNlLmpzb24oeyBzdGF0dXM6ICdvaycgfSk7XG4gIH0pO1xuXG4gIHJvdXRlci5nZXQoJy9maW5kaW5ncycsIGFzeW5jIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudEtleSA9IFwiTW9ua2V5RUNYXCI7IC8vcmVxdWVzdC5xdWVyeS5jb21wb25lbnRLZXkgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGluc3RhbmNlS2V5ID0gXCJjb2RhY3lcIjsgLy9yZXF1ZXN0LnF1ZXJ5Lmluc3RhbmNlS2V5IGFzIHN0cmluZztcblxuICAgIGlmICghY29tcG9uZW50S2V5KVxuICAgICAgdGhyb3cgbmV3IElucHV0RXJyb3IoJ0NvbXBvbmVudEtleSBtdXN0IGJlIHByb3ZpZGVkIGFzIGEgc2luZ2xlIHN0cmluZy4nKTtcblxuICAgIGxvZ2dlci5pbmZvKFxuICAgICAgaW5zdGFuY2VLZXlcbiAgICAgICAgPyBgUmV0cmlldmluZyBmaW5kaW5ncyBmb3IgY29tcG9uZW50ICR7Y29tcG9uZW50S2V5fSAgaW4gY29kYWN5IGluc3RhbmNlIG5hbWUgJHtpbnN0YW5jZUtleX1gXG4gICAgICAgIDogYFJldHJpZXZpbmcgZmluZGluZ3MgZm9yIGNvbXBvbmVudCAke2NvbXBvbmVudEtleX0gaW4gZGVmYXVsdCBjb2RhY3kgaW5zdGFuY2VgLFxuICAgICk7XG5cbiAgICByZXNwb25zZS5qc29uKFxuICAgICAgYXdhaXQgY29kYWN5SW5mb1Byb3ZpZGVyLmdldEZpbmRpbmdzKHtcbiAgICAgICAgY29tcG9uZW50S2V5LFxuICAgICAgICBpbnN0YW5jZU5hbWU6IGluc3RhbmNlS2V5LFxuICAgICAgfSksXG4gICAgKTtcbiAgfSk7XG5cbiAgcm91dGVyLnVzZShlcnJvckhhbmRsZXIoKSk7XG4gIHJldHVybiByb3V0ZXI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/service/router.ts\n");

/***/ }),

/***/ "./src/service/standaloneServer.ts":
/*!*****************************************!*\
  !*** ./src/service/standaloneServer.ts ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startStandaloneServer: () => (/* binding */ startStandaloneServer)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ \"./src/service/router.ts\");\n/* harmony import */ var _codacyInfoProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codacyInfoProvider */ \"./src/service/codacyInfoProvider.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _module_hot;\n\n\n\nasync function startStandaloneServer(options) {\n    const logger = options.logger.child({\n        service: 'codacy-backend'\n    });\n    logger.debug('Starting application server...');\n    const config = await (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.loadBackendConfig)({\n        logger,\n        argv: process.argv\n    });\n    const router = await (0,_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n        logger,\n        codacyInfoProvider: _codacyInfoProvider__WEBPACK_IMPORTED_MODULE_2__.DefaultCodacyInfoProvider.fromConfig(config)\n    });\n    let service = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.createServiceBuilder)(module).setPort(options.port).addRouter('/codacy', router);\n    if (options.enableCors) {\n        service = service.enableCors({\n            origin: 'http://localhost:3000'\n        });\n    }\n    return await service.start().catch((err)=>{\n        logger.error(err);\n        process.exit(1);\n    });\n}\n(_module_hot = module.hot) === null || _module_hot === void 0 ? void 0 : _module_hot.accept();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZS9zdGFuZGFsb25lU2VydmVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9DQTtBQXBDQTtBQUdBO0FBQ0E7QUFRQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvZW1lcnNvbi5jaGFsZWdyZS9tb25rZXkvYmFja3N0YWdlL3BsdWdpbnMvY29kYWN5LWJhY2tlbmQvc3JjL3NlcnZpY2Uvc3RhbmRhbG9uZVNlcnZlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZXJ2aWNlQnVpbGRlciwgbG9hZEJhY2tlbmRDb25maWcgfSBmcm9tICdAYmFja3N0YWdlL2JhY2tlbmQtY29tbW9uJztcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJ2h0dHAnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgeyBjcmVhdGVSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcic7XG5pbXBvcnQgeyBEZWZhdWx0Q29kYWN5SW5mb1Byb3ZpZGVyIH0gZnJvbSAnLi9jb2RhY3lJbmZvUHJvdmlkZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZlck9wdGlvbnMge1xuICBwb3J0OiBudW1iZXI7XG4gIGVuYWJsZUNvcnM6IGJvb2xlYW47XG4gIGxvZ2dlcjogTG9nZ2VyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRTdGFuZGFsb25lU2VydmVyKFxuICBvcHRpb25zOiBTZXJ2ZXJPcHRpb25zLFxuKTogUHJvbWlzZTxTZXJ2ZXI+IHtcbiAgY29uc3QgbG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIuY2hpbGQoeyBzZXJ2aWNlOiAnY29kYWN5LWJhY2tlbmQnIH0pO1xuICBsb2dnZXIuZGVidWcoJ1N0YXJ0aW5nIGFwcGxpY2F0aW9uIHNlcnZlci4uLicpO1xuICBjb25zdCBjb25maWcgPSBhd2FpdCBsb2FkQmFja2VuZENvbmZpZyh7IGxvZ2dlciwgYXJndjogcHJvY2Vzcy5hcmd2IH0pO1xuICBjb25zdCByb3V0ZXIgPSBhd2FpdCBjcmVhdGVSb3V0ZXIoe1xuICAgIGxvZ2dlcixcbiAgICBjb2RhY3lJbmZvUHJvdmlkZXI6IERlZmF1bHRDb2RhY3lJbmZvUHJvdmlkZXIuZnJvbUNvbmZpZyhjb25maWcpLFxuICB9KTtcblxuICBsZXQgc2VydmljZSA9IGNyZWF0ZVNlcnZpY2VCdWlsZGVyKG1vZHVsZSlcbiAgICAuc2V0UG9ydChvcHRpb25zLnBvcnQpXG4gICAgLmFkZFJvdXRlcignL2NvZGFjeScsIHJvdXRlcik7XG4gIGlmIChvcHRpb25zLmVuYWJsZUNvcnMpIHtcbiAgICBzZXJ2aWNlID0gc2VydmljZS5lbmFibGVDb3JzKHsgb3JpZ2luOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyB9KTtcbiAgfVxuXG4gIHJldHVybiBhd2FpdCBzZXJ2aWNlLnN0YXJ0KCkuY2F0Y2goZXJyID0+IHtcbiAgICBsb2dnZXIuZXJyb3IoZXJyKTtcbiAgICBwcm9jZXNzLmV4aXQoMSk7XG4gIH0pO1xufVxuXG5tb2R1bGUuaG90Py5hY2NlcHQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/service/standaloneServer.ts\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/log-apply-result.js":
/*!**********************************************************!*\
  !*** ../../node_modules/webpack/hot/log-apply-result.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\n/**\n * @param {(string | number)[]} updatedModules updated modules\n * @param {(string | number)[] | null} renewedModules renewed modules\n */\nmodule.exports = function (updatedModules, renewedModules) {\n\tvar unacceptedModules = updatedModules.filter(function (moduleId) {\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\n\t});\n\tvar log = __webpack_require__(/*! ./log */ \"../../node_modules/webpack/hot/log.js\");\n\n\tif (unacceptedModules.length > 0) {\n\t\tlog(\n\t\t\t\"warning\",\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\n\t\t);\n\t\tunacceptedModules.forEach(function (moduleId) {\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\n\t\t});\n\t}\n\n\tif (!renewedModules || renewedModules.length === 0) {\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\n\t} else {\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\n\t\trenewedModules.forEach(function (moduleId) {\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n\t\t\t\tvar parts = moduleId.split(\"!\");\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t\tlog.groupEnd(\"info\");\n\t\t\t} else {\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t}\n\t\t});\n\t\tvar numberIds = renewedModules.every(function (moduleId) {\n\t\t\treturn typeof moduleId === \"number\";\n\t\t});\n\t\tif (numberIds)\n\t\t\tlog(\n\t\t\t\t\"info\",\n\t\t\t\t'[HMR] Consider using the optimization.moduleIds: \"named\" for module names.'\n\t\t\t);\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy1hcHBseS1yZXN1bHQuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2VtZXJzb24uY2hhbGVncmUvbW9ua2V5L2JhY2tzdGFnZS9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLWFwcGx5LXJlc3VsdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG4vKipcbiAqIEBwYXJhbSB7KHN0cmluZyB8IG51bWJlcilbXX0gdXBkYXRlZE1vZHVsZXMgdXBkYXRlZCBtb2R1bGVzXG4gKiBAcGFyYW0geyhzdHJpbmcgfCBudW1iZXIpW10gfCBudWxsfSByZW5ld2VkTW9kdWxlcyByZW5ld2VkIG1vZHVsZXNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXBkYXRlZE1vZHVsZXMsIHJlbmV3ZWRNb2R1bGVzKSB7XG5cdHZhciB1bmFjY2VwdGVkTW9kdWxlcyA9IHVwZGF0ZWRNb2R1bGVzLmZpbHRlcihmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRyZXR1cm4gcmVuZXdlZE1vZHVsZXMgJiYgcmVuZXdlZE1vZHVsZXMuaW5kZXhPZihtb2R1bGVJZCkgPCAwO1xuXHR9KTtcblx0dmFyIGxvZyA9IHJlcXVpcmUoXCIuL2xvZ1wiKTtcblxuXHRpZiAodW5hY2NlcHRlZE1vZHVsZXMubGVuZ3RoID4gMCkge1xuXHRcdGxvZyhcblx0XHRcdFwid2FybmluZ1wiLFxuXHRcdFx0XCJbSE1SXSBUaGUgZm9sbG93aW5nIG1vZHVsZXMgY291bGRuJ3QgYmUgaG90IHVwZGF0ZWQ6IChUaGV5IHdvdWxkIG5lZWQgYSBmdWxsIHJlbG9hZCEpXCJcblx0XHQpO1xuXHRcdHVuYWNjZXB0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVJZCk7XG5cdFx0fSk7XG5cdH1cblxuXHRpZiAoIXJlbmV3ZWRNb2R1bGVzIHx8IHJlbmV3ZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSBOb3RoaW5nIGhvdCB1cGRhdGVkLlwiKTtcblx0fSBlbHNlIHtcblx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gVXBkYXRlZCBtb2R1bGVzOlwiKTtcblx0XHRyZW5ld2VkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtb2R1bGVJZCA9PT0gXCJzdHJpbmdcIiAmJiBtb2R1bGVJZC5pbmRleE9mKFwiIVwiKSAhPT0gLTEpIHtcblx0XHRcdFx0dmFyIHBhcnRzID0gbW9kdWxlSWQuc3BsaXQoXCIhXCIpO1xuXHRcdFx0XHRsb2cuZ3JvdXBDb2xsYXBzZWQoXCJpbmZvXCIsIFwiW0hNUl0gIC0gXCIgKyBwYXJ0cy5wb3AoKSk7XG5cdFx0XHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSAgLSBcIiArIG1vZHVsZUlkKTtcblx0XHRcdFx0bG9nLmdyb3VwRW5kKFwiaW5mb1wiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSAgLSBcIiArIG1vZHVsZUlkKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR2YXIgbnVtYmVySWRzID0gcmVuZXdlZE1vZHVsZXMuZXZlcnkoZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIG1vZHVsZUlkID09PSBcIm51bWJlclwiO1xuXHRcdH0pO1xuXHRcdGlmIChudW1iZXJJZHMpXG5cdFx0XHRsb2coXG5cdFx0XHRcdFwiaW5mb1wiLFxuXHRcdFx0XHQnW0hNUl0gQ29uc2lkZXIgdXNpbmcgdGhlIG9wdGltaXphdGlvbi5tb2R1bGVJZHM6IFwibmFtZWRcIiBmb3IgbW9kdWxlIG5hbWVzLidcblx0XHRcdCk7XG5cdH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/log-apply-result.js\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/log.js":
/*!*********************************************!*\
  !*** ../../node_modules/webpack/hot/log.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/** @typedef {\"info\" | \"warning\" | \"error\"} LogLevel */\n\n/** @type {LogLevel} */\nvar logLevel = \"info\";\n\nfunction dummy() {}\n\n/**\n * @param {LogLevel} level log level\n * @returns {boolean} true, if should log\n */\nfunction shouldLog(level) {\n\tvar shouldLog =\n\t\t(logLevel === \"info\" && level === \"info\") ||\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\n\treturn shouldLog;\n}\n\n/**\n * @param {(msg?: string) => void} logFn log function\n * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient\n */\nfunction logGroup(logFn) {\n\treturn function (level, msg) {\n\t\tif (shouldLog(level)) {\n\t\t\tlogFn(msg);\n\t\t}\n\t};\n}\n\n/**\n * @param {LogLevel} level log level\n * @param {string|Error} msg message\n */\nmodule.exports = function (level, msg) {\n\tif (shouldLog(level)) {\n\t\tif (level === \"info\") {\n\t\t\tconsole.log(msg);\n\t\t} else if (level === \"warning\") {\n\t\t\tconsole.warn(msg);\n\t\t} else if (level === \"error\") {\n\t\t\tconsole.error(msg);\n\t\t}\n\t}\n};\n\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n\nmodule.exports.group = logGroup(group);\n\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\n\nmodule.exports.groupEnd = logGroup(groupEnd);\n\n/**\n * @param {LogLevel} level log level\n */\nmodule.exports.setLogLevel = function (level) {\n\tlogLevel = level;\n};\n\n/**\n * @param {Error} err error\n * @returns {string} formatted error\n */\nmodule.exports.formatError = function (err) {\n\tvar message = err.message;\n\tvar stack = err.stack;\n\tif (!stack) {\n\t\treturn message;\n\t} else if (stack.indexOf(message) < 0) {\n\t\treturn message + \"\\n\" + stack;\n\t} else {\n\t\treturn stack;\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvZW1lcnNvbi5jaGFsZWdyZS9tb25rZXkvYmFja3N0YWdlL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEB0eXBlZGVmIHtcImluZm9cIiB8IFwid2FybmluZ1wiIHwgXCJlcnJvclwifSBMb2dMZXZlbCAqL1xuXG4vKiogQHR5cGUge0xvZ0xldmVsfSAqL1xudmFyIGxvZ0xldmVsID0gXCJpbmZvXCI7XG5cbmZ1bmN0aW9uIGR1bW15KCkge31cblxuLyoqXG4gKiBAcGFyYW0ge0xvZ0xldmVsfSBsZXZlbCBsb2cgbGV2ZWxcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlLCBpZiBzaG91bGQgbG9nXG4gKi9cbmZ1bmN0aW9uIHNob3VsZExvZyhsZXZlbCkge1xuXHR2YXIgc2hvdWxkTG9nID1cblx0XHQobG9nTGV2ZWwgPT09IFwiaW5mb1wiICYmIGxldmVsID09PSBcImluZm9cIikgfHxcblx0XHQoW1wiaW5mb1wiLCBcIndhcm5pbmdcIl0uaW5kZXhPZihsb2dMZXZlbCkgPj0gMCAmJiBsZXZlbCA9PT0gXCJ3YXJuaW5nXCIpIHx8XG5cdFx0KFtcImluZm9cIiwgXCJ3YXJuaW5nXCIsIFwiZXJyb3JcIl0uaW5kZXhPZihsb2dMZXZlbCkgPj0gMCAmJiBsZXZlbCA9PT0gXCJlcnJvclwiKTtcblx0cmV0dXJuIHNob3VsZExvZztcbn1cblxuLyoqXG4gKiBAcGFyYW0geyhtc2c/OiBzdHJpbmcpID0+IHZvaWR9IGxvZ0ZuIGxvZyBmdW5jdGlvblxuICogQHJldHVybnMgeyhsZXZlbDogTG9nTGV2ZWwsIG1zZz86IHN0cmluZykgPT4gdm9pZH0gZnVuY3Rpb24gdGhhdCBsb2dzIHdoZW4gbG9nIGxldmVsIGlzIHN1ZmZpY2llbnRcbiAqL1xuZnVuY3Rpb24gbG9nR3JvdXAobG9nRm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChsZXZlbCwgbXNnKSB7XG5cdFx0aWYgKHNob3VsZExvZyhsZXZlbCkpIHtcblx0XHRcdGxvZ0ZuKG1zZyk7XG5cdFx0fVxuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7TG9nTGV2ZWx9IGxldmVsIGxvZyBsZXZlbFxuICogQHBhcmFtIHtzdHJpbmd8RXJyb3J9IG1zZyBtZXNzYWdlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxldmVsLCBtc2cpIHtcblx0aWYgKHNob3VsZExvZyhsZXZlbCkpIHtcblx0XHRpZiAobGV2ZWwgPT09IFwiaW5mb1wiKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhtc2cpO1xuXHRcdH0gZWxzZSBpZiAobGV2ZWwgPT09IFwid2FybmluZ1wiKSB7XG5cdFx0XHRjb25zb2xlLndhcm4obXNnKTtcblx0XHR9IGVsc2UgaWYgKGxldmVsID09PSBcImVycm9yXCIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IobXNnKTtcblx0XHR9XG5cdH1cbn07XG5cbnZhciBncm91cCA9IGNvbnNvbGUuZ3JvdXAgfHwgZHVtbXk7XG52YXIgZ3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkIHx8IGR1bW15O1xudmFyIGdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZCB8fCBkdW1teTtcblxubW9kdWxlLmV4cG9ydHMuZ3JvdXAgPSBsb2dHcm91cChncm91cCk7XG5cbm1vZHVsZS5leHBvcnRzLmdyb3VwQ29sbGFwc2VkID0gbG9nR3JvdXAoZ3JvdXBDb2xsYXBzZWQpO1xuXG5tb2R1bGUuZXhwb3J0cy5ncm91cEVuZCA9IGxvZ0dyb3VwKGdyb3VwRW5kKTtcblxuLyoqXG4gKiBAcGFyYW0ge0xvZ0xldmVsfSBsZXZlbCBsb2cgbGV2ZWxcbiAqL1xubW9kdWxlLmV4cG9ydHMuc2V0TG9nTGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWwpIHtcblx0bG9nTGV2ZWwgPSBsZXZlbDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyIGVycm9yXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBmb3JtYXR0ZWQgZXJyb3JcbiAqL1xubW9kdWxlLmV4cG9ydHMuZm9ybWF0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdHZhciBtZXNzYWdlID0gZXJyLm1lc3NhZ2U7XG5cdHZhciBzdGFjayA9IGVyci5zdGFjaztcblx0aWYgKCFzdGFjaykge1xuXHRcdHJldHVybiBtZXNzYWdlO1xuXHR9IGVsc2UgaWYgKHN0YWNrLmluZGV4T2YobWVzc2FnZSkgPCAwKSB7XG5cdFx0cmV0dXJuIG1lc3NhZ2UgKyBcIlxcblwiICsgc3RhY2s7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/log.js\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/poll.js?100":
/*!**************************************************!*\
  !*** ../../node_modules/webpack/hot/poll.js?100 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __resourceQuery = \"?100\";\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/*globals __resourceQuery */\nif (true) {\n\tvar hotPollInterval = +__resourceQuery.slice(1) || 0;\n\tvar log = __webpack_require__(/*! ./log */ \"../../node_modules/webpack/hot/log.js\");\n\n\t/**\n\t * @param {boolean=} fromUpdate true when called from update\n\t */\n\tvar checkForUpdate = function checkForUpdate(fromUpdate) {\n\t\tif (module.hot.status() === \"idle\") {\n\t\t\tmodule.hot\n\t\t\t\t.check(true)\n\t\t\t\t.then(function (updatedModules) {\n\t\t\t\t\tif (!updatedModules) {\n\t\t\t\t\t\tif (fromUpdate) log(\"info\", \"[HMR] Update applied.\");\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"../../node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\t\t\t\t\tcheckForUpdate(true);\n\t\t\t\t})\n\t\t\t\t.catch(function (err) {\n\t\t\t\t\tvar status = module.hot.status();\n\t\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Cannot apply update.\");\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] \" + log.formatError(err));\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] You need to restart the application!\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t}\n\t};\n\tsetInterval(checkForUpdate, hotPollInterval);\n} else {}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L3BvbGwuanM/MTAwIiwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9lbWVyc29uLmNoYWxlZ3JlL21vbmtleS9iYWNrc3RhZ2Uvbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L3BvbGwuanM/MTAwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vKmdsb2JhbHMgX19yZXNvdXJjZVF1ZXJ5ICovXG5pZiAobW9kdWxlLmhvdCkge1xuXHR2YXIgaG90UG9sbEludGVydmFsID0gK19fcmVzb3VyY2VRdWVyeS5zbGljZSgxKSB8fCAxMCAqIDYwICogMTAwMDtcblx0dmFyIGxvZyA9IHJlcXVpcmUoXCIuL2xvZ1wiKTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtib29sZWFuPX0gZnJvbVVwZGF0ZSB0cnVlIHdoZW4gY2FsbGVkIGZyb20gdXBkYXRlXG5cdCAqL1xuXHR2YXIgY2hlY2tGb3JVcGRhdGUgPSBmdW5jdGlvbiBjaGVja0ZvclVwZGF0ZShmcm9tVXBkYXRlKSB7XG5cdFx0aWYgKG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09IFwiaWRsZVwiKSB7XG5cdFx0XHRtb2R1bGUuaG90XG5cdFx0XHRcdC5jaGVjayh0cnVlKVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAodXBkYXRlZE1vZHVsZXMpIHtcblx0XHRcdFx0XHRpZiAoIXVwZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRcdFx0XHRpZiAoZnJvbVVwZGF0ZSkgbG9nKFwiaW5mb1wiLCBcIltITVJdIFVwZGF0ZSBhcHBsaWVkLlwiKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVxdWlyZShcIi4vbG9nLWFwcGx5LXJlc3VsdFwiKSh1cGRhdGVkTW9kdWxlcywgdXBkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRcdGNoZWNrRm9yVXBkYXRlKHRydWUpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuXHRcdFx0XHRcdHZhciBzdGF0dXMgPSBtb2R1bGUuaG90LnN0YXR1cygpO1xuXHRcdFx0XHRcdGlmIChbXCJhYm9ydFwiLCBcImZhaWxcIl0uaW5kZXhPZihzdGF0dXMpID49IDApIHtcblx0XHRcdFx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSBDYW5ub3QgYXBwbHkgdXBkYXRlLlwiKTtcblx0XHRcdFx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSBcIiArIGxvZy5mb3JtYXRFcnJvcihlcnIpKTtcblx0XHRcdFx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSBZb3UgbmVlZCB0byByZXN0YXJ0IHRoZSBhcHBsaWNhdGlvbiFcIik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSBVcGRhdGUgZmFpbGVkOiBcIiArIGxvZy5mb3JtYXRFcnJvcihlcnIpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblx0c2V0SW50ZXJ2YWwoY2hlY2tGb3JVcGRhdGUsIGhvdFBvbGxJbnRlcnZhbCk7XG59IGVsc2Uge1xuXHR0aHJvdyBuZXcgRXJyb3IoXCJbSE1SXSBIb3QgTW9kdWxlIFJlcGxhY2VtZW50IGlzIGRpc2FibGVkLlwiKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/poll.js?100\n");

/***/ }),

/***/ "@backstage/backend-common":
/*!********************************************************************************************************************!*\
  !*** external "/Users/emerson.chalegre/monkey/backstage/node_modules/@backstage/backend-common/dist/index.cjs.js" ***!
  \********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/emerson.chalegre/monkey/backstage/node_modules/@backstage/backend-common/dist/index.cjs.js");

/***/ }),

/***/ "express-promise-router":
/*!*****************************************************************************************************************************!*\
  !*** external "/Users/emerson.chalegre/monkey/backstage/node_modules/express-promise-router/lib/express-promise-router.js" ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/emerson.chalegre/monkey/backstage/node_modules/express-promise-router/lib/express-promise-router.js");

/***/ }),

/***/ "express":
/*!*****************************************************************************************!*\
  !*** external "/Users/emerson.chalegre/monkey/backstage/node_modules/express/index.js" ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/emerson.chalegre/monkey/backstage/node_modules/express/index.js");

/***/ }),

/***/ "node-fetch":
/*!************************************************************************************************!*\
  !*** external "/Users/emerson.chalegre/monkey/backstage/node_modules/node-fetch/lib/index.js" ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/emerson.chalegre/monkey/backstage/node_modules/node-fetch/lib/index.js");

/***/ }),

/***/ "yn":
/*!************************************************************************************!*\
  !*** external "/Users/emerson.chalegre/monkey/backstage/node_modules/yn/index.js" ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/emerson.chalegre/monkey/backstage/node_modules/yn/index.js");

/***/ }),

/***/ "@backstage/errors":
/*!***********************************************************************************************************************************!*\
  !*** external "/Users/emerson.chalegre/monkey/backstage/plugins/codacy-backend/node_modules/@backstage/errors/dist/index.cjs.js" ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/emerson.chalegre/monkey/backstage/plugins/codacy-backend/node_modules/@backstage/errors/dist/index.cjs.js");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("584814a4ad6ddfb58367")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			})['catch'](function(err) { if(err.code !== 'MODULE_NOT_FOUND') throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("../../node_modules/webpack/hot/poll.js?100");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/run.ts");
/******/ 	
/******/ })()
;