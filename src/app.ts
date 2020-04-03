import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import schema from './graphql/schema';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
  }

  env = process.env.NODE_ENV;
  private middleware(): void {
    this.express.use('/graphql', graphqlHTTP({ schema, graphiql: this.env === 'development' }));
  }
}

export default new App().express;
