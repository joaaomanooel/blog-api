import { makeExecutableSchema } from 'graphql-tools';

const users: any[] = [
  { id: 1, name: 'João', email: 'joaaomanooel@gmail.com' },
  { id: 2, name: 'Thais', email: 'thhaisalmeida1@gmail.com' },
];

const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    allUsers: [User!]!
  }
`;

const resolvers = {
  Query: {
    allUsers: (): any[] => users,
  },
};

export default makeExecutableSchema({ typeDefs, resolvers });
