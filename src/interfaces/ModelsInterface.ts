import { ModelCtor } from 'sequelize';
import Post from '../models/PostModel';
import User from '../models/UserModel';
import Comment from '../models/CommentModel';

export interface ModelsInterface {
  Comment: ModelCtor<Comment>;
  Post: ModelCtor<User>;
  User: ModelCtor<Post>;
}
