import {rethinkdb, connect} from 'rethinkdb-websocket-client';
import {server as serverConfig, db as dbConfig} from '../../config';

// Open a WebSocket connection to the server to send RethinkDB queries over
const options = {
  host: serverConfig.host || 'localhost', // hostname of the websocket server
  port: serverConfig.port || 8080,        // port number of the websocket server
  path: '/realtime',                      // HTTP path to websocket route
  secure: false,                          // set true to use secure TLS websockets
  db: dbConfig.db,                        // default database, passed to rethinkdb.connect
};

const connPromise = connect(options);
const r = rethinkdb;
export {
  r,
  connPromise,
};
