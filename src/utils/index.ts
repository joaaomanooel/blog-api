/* eslint-disable no-console */
import { Server } from 'http';
import { AddressInfo } from 'net';

export const normalizePort = (val: number | string): number | string | boolean => {
  const port: number = typeof val === 'string' ? parseInt(val) : val;
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
};

export const onError = (error: Error): void => {
  const splitedMessage: Array<string> = error.message.split(': ');
  console.error(`\n[${splitedMessage[0].toUpperCase()}]: ${splitedMessage[1]}\n`);
  process.exit(1);
};

export const onListening = (server: Server) => (): void => {
  const addr: string | AddressInfo = server.address();
  const bind: string = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  console.error(`
+===========================================+
|                 BLOG API!                 |
+===========================================+
|         Listening at ${bind}...         |
|                                           |
+===========================================+
`);
};
