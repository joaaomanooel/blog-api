/* eslint-disable import/first */
require('dotenv').config();

import * as http from 'http';
import app from './app';
import db from './models';

import { normalizePort, onError, onListening } from './utils';

const server = http.createServer(app);
const port = normalizePort(process.env.PORT || 5000);

db.sequelize.sync().then(() => {
  server.listen(port);
  server.on('error', e => onError(e));
  server.on('listening', onListening(server));
});
