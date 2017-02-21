import {logger} from './logger';

export const asyncRequest = handler =>
  (res, req) =>
        handler(req, res).catch(e => logger.error('error during request:', e));

