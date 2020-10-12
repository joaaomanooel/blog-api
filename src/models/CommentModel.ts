import { Model, BelongsTo, ModelCtor } from 'sequelize';
import { ModelsInterface } from '../interfaces/ModelsInterface';
import User from './UserModel';
import Post from './PostModel';

export default class Comment extends Model {
  public id: string
  public comment: string
  public post: Post
  public author: User

  public static setInit(sequelize, DataTypes): void {
    return this.init({
      id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
      comment: { type: DataTypes.TEXT, allowNull: false },
    }, { sequelize, tableName: 'comments' });
  }

  private static setBelongsTo(model: ModelCtor<any>, field: string, allowNull = false): BelongsTo {
    return this.belongsTo(model, { foreignKey: { allowNull, field, name: field } });
  }

  static associate(models: ModelsInterface): void {
    this.setBelongsTo(models.User, 'author');
    this.setBelongsTo(models.Post, 'post');
  }
}
