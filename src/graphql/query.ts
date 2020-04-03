import { commentQueries } from './resources/comment/comment.schema';
import { postQueries } from './resources/post/post.schema';
import { userQueries } from './resources/user/user.schema';

export default `
  type Query {
    ${commentQueries}
    ${postQueries}
    ${userQueries}
  }
`;
