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

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;

const resolvers = {
  Query: {
    allUsers: (): any[] => users,
  },
  Mutation: {
    createUser: (_parent, args): any => {
      const newUser = { id: users.length + 1, ...args };
      users.push(newUser);
      return newUser;
    },
  },
};

export default makeExecutableSchema({ typeDefs, resolvers });
