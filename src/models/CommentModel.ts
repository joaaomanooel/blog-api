import { Model } from 'sequelize';
import { ModelsInterface } from '../interfaces/ModelsInterface';
import User from './UserModel';
import Post from './PostModel';

class Comment extends Model {
  public id: string
  public comment: string
  public post: Post
  public author: User

  static setInit(sequelize, DataTypes): void {
    return this.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    }, {
      sequelize,
      tableName: 'comments',
    });
  }

  static associate(models: ModelsInterface): void {
    this.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
        field: 'author',
        name: 'author',
      },
    });
    this.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false,
        field: 'post',
        name: 'post',
      },
    });
  }
}

export default Comment;
