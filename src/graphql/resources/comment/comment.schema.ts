export const commentTypes = `
  # Comment definition type
  type Comment {
    id: ID!
    user: User!
    post: Post!
    comment: String!
    createdAt: String!
    updatedAt: String!
  }

  input CommentInput {
    comment: String!
    post: Int!
    user: Int!
  }
`;

export const commentQueries = 'commentsByPost(post: ID!, fist: Int, offset: Int): [ Comment! ]!';

export const commentMutations = `
  createComment(input: CommentInput!): Comment
  updateComment(id: ID!, input: CommentInput!): Comment
  deleteComment(id: ID!): Boolean
`;
