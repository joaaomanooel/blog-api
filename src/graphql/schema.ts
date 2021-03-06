import { makeExecutableSchema } from 'graphql-tools';

import Mutation from './mutation';
import Query from './query';

import { commentTypes } from './resources/comment/comment.schema';
import { postTypes } from './resources/post/post.schema';
import { userTypes } from './resources/user/user.schema';

const SchemaDefinition = `
  type Schema {
    query: Query
    mutantion: Mutation
  }
`;

export default makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    commentTypes,
    postTypes,
    userTypes,
    Mutation,
    Query,
  ],
});
