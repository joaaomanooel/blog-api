/* eslint-disable no-param-reassign */
import { compareSync, genSalt, hash } from 'bcrypt';
import { Model } from 'sequelize';

export default class User extends Model {
  public id: number
  public name: string
  public email: string
  public password: string
  public photo: string

  public static setInit(sequelize, DataTypes): void {
    return this.init({
      id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING(128), allowNull: false },
      email: { type: DataTypes.STRING(128), allowNull: false, unique: true },
      password: { type: DataTypes.STRING(128), allowNull: false, validate: { notEmpty: true } },
      photo: { type: DataTypes.BLOB({ length: 'long' }), allowNull: true, defaultValue: null },
    }, {
      sequelize,
      tableName: 'users',
      hooks: {
        beforeCreate: async (user: User): Promise<void> => {
          const salt = await genSalt();
          user.password = await hash(user.password, salt);
        },
        beforeUpdate: async (user: User): Promise<void> => {
          if (user.changed('password')) {
            const salt = await genSalt();
            user.password = await hash(user.password, salt);
          }
        },
      },
    });
  }

  public static isPassword(encodedPassword: string, password: string): boolean {
    return compareSync(password, encodedPassword);
  }
}
