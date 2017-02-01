import {listen} from 'rethinkdb-websocket-server';

import {db as dbConfig} from '../../config';

const options = {
  httpPath: '/realtime',
  dbHost: dbConfig.host,
  dbPort: dbConfig.port,
  db: dbConfig.db,
  unsafelyAllowAnyQuery: true,
};

export const realtime = (httpServer) => {
  listen({
    ...options,
    httpServer,
  });
};
