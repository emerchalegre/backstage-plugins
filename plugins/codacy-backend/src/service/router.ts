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

import { errorHandler } from '@backstage/backend-common';
import express from 'express';
import Router from 'express-promise-router';
import { Logger } from 'winston';
import { CodacyInfoProvider } from './codacyInfoProvider';
import { InputError } from '@backstage/errors';


/**
 * Dependencies needed by the router
 * @public
 */
export interface RouterOptions {
  logger: Logger;
  codacyInfoProvider: CodacyInfoProvider;
}

/**
 * @public
 *
 * Constructs a codacy router.
 *
 * Expose endpoint to get information on or for a codacy instance.
 *
 * @param options - Dependencies of the router
 */
export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger, codacyInfoProvider } = options;

  const router = Router();
  router.use(express.json());

  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.json({ status: 'ok' });
  });

  router.get('/findings', async (request, response) => {
    const componentKey = request.query.componentKey as string;
    const instanceKey = request.query.instanceKey as string;

    if (!componentKey)
      throw new InputError('ComponentKey must be provided as a single string.');

    logger.info(
      instanceKey
        ? `Retrieving findings for component ${componentKey}  in codacy instance name ${instanceKey}`
        : `Retrieving findings for component ${componentKey} in default codacy instance`,
    );

    response.json(
      await codacyInfoProvider.getFindings({
        componentKey,
        instanceName: instanceKey,
      }),
    );
  });

  router.use(errorHandler());
  return router;
}
