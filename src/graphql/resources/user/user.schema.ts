export const userTypes = `
  # User definition type
  type User {
    id: ID!
    name: String!
    photo: String
    createdAt: String!
    updatedAt: String!
  }

  input UserCreateInput {
    password: String!
    email: String!
    name: String!
  }

  input UserUpdateInput {
    photo: String!
    email: String!
    name: String!
  }

  input UserUpdatePasswordInput {
    password: String!
  }
`;

export const userQueries = `
  users(fist: Int, offset: Int): [ User! ]!
  user(id: ID!): User
`;

export const userMutations = `
  createUser(input: UserCreateInput!): User
  updateUser(id: ID!, input: UserUpdateInput!): User
  updateUserPassword(id: ID!, input: UserUpdatePasswordInput!): Boolean
  deleteUser(id: ID!): Boolean
`;
