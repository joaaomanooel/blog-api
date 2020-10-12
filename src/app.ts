import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import schema from './graphql/schema';
import db from './models';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
  }

  private middleware(): void {
    this.express.use('/graphql', graphqlHTTP({
      graphiql: process.env.NODE_ENV === 'development',
      context: { db },
      schema,
    }));
  }
}

export default new App().express;
