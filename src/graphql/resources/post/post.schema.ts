export const postTypes = `
  # Post definition type
  type Post {
    id: ID!
    title: String!
    content: String!
    photo: String!
    createdAt: String!
    updatedAt: String!
    author: User!
    comments: [ Comment! ]!
  }

  input PostInput {
    title: String!
    content: String!
    photo: String!
    author: Int!
  }
`;

export const postQueries = `
  posts(fist: Int, offset: Int): [ Post! ]!
  post(id: ID!): Post
`;

export const postMutations = `
  createPost(input: PostInput!): Post
  updatePost(id: ID!, input: PostInput!): Post
  deletePost(id: ID!): Boolean
`;
