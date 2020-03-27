import { Server } from "http";

export const normalizePort = (val: number | string): number | string | boolean => {
  const port: number = (typeof val === 'string') ? parseInt(val) : val;
  if (isNaN(port)) return val;
  else if (port >= 0) return port;
  else return false;
}

export const onError = (error: Error) => {
  const splitedMessage: Array<string> = error.message.split(': ');
  console.log(`\n[${splitedMessage[0].toUpperCase()}]: ${splitedMessage[1]}\n`);
  process.exit(1);
}

export const onListening = (server: Server) => (): void => {
  const addr: any = server.address();
  const bind: string = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`
+===========================================+
|                 BLOG API!                 |
+===========================================+
|         Listening at ${bind}...         |
|                                           |
+===========================================+
`)
}
