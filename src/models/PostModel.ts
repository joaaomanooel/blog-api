import { Model } from 'sequelize';
import { ModelsInterface } from '../interfaces/ModelsInterface';
import User from './UserModel';

class Post extends Model {
  public id: string
  public title: string
  public content: string
  public photo: string
  public author: User

  static setInit(sequelize, DataTypes): void {
    return this.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      photo: {
        type: DataTypes.BLOB({
          length: 'long',
        }),
        allowNull: false,
      },
    }, {
      sequelize,
      tableName: 'posts',
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
  }
}

export default Post;
