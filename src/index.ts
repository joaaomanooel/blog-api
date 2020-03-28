import * as http from 'http';
import app from './app';
import { normalizePort, onError, onListening } from './utils';

const server = http.createServer(app);
const port = normalizePort(process.env.PORT || 5000);

server.listen(port);
server.on('error', e => onError(e));
server.on('listening', onListening(server));
