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

export interface Config {
    /** Optional configurations for the Codayc plugin */
    codacy?: {
      /**
       * The base url of the sonarqube installation. Defaults to https://app.codacy.com/api/v3.
       * @visibility frontend
       */
      baseUrl?: string;
  
      /**
       * The external url of the codacy installation.
       * Use this if you want to use a different url for the frontend than the backend.
       * @visibility frontend
       */
      externalBaseUrl?: string;
  
      /**
       * The api key to access the codacy instance under baseUrl.
       * @visibility secret
       */
      apiKey?: string;
  
      /**
       * The optional codacy instances.
       * @visibility frontend
       */
      instances?: Array<{
        /**
         * The name of the codacy instance.
         * @visibility frontend
         */
        name: string;
  
        /**
         * The base url of the codacy instance.
         * @visibility frontend
         */
        baseUrl: string;
  
        /**
         * The external url of the codacy instance.
         * Use this if you want to use a different url for the frontend than the backend.
         * @visibility frontend
         */
        externalBaseUrl?: string;
  
        /**
         * The api key to access the sonacodacyrqube instance.
         * @visibility secret
         */
        apiKey: string;
      }>;
    };
  }