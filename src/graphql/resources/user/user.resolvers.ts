
import { Model } from 'sequelize';
import { DbConnection } from '../../../interfaces/DbConnectionInterface';
import User from '../../../models/UserModel';

import Bluebird = require('bluebird');

const userResolvers = {
  Query: {

    users(_, { first = 10, offset = 0 }, { db }: { db: DbConnection }): Promise<Model<User>[]> {
      return db.User.findAll({ limit: first, offset });
    },

    user(_, { id }, { db }: { db: DbConnection }): Bluebird<User> {
      return db.User.findByPk(id).then((user: User) => {
        if (!user) throw new Error(`User with id ${id} not found!`);
        return user;
      });
    },

  },

  Mutation: {

    createUser(_, { input }, { db }: { db: DbConnection }): Promise<Model<User>> {
      return db.sequelize.transaction(t => db.User.create(input, { transaction: t }));
    },

    updateUser(_, { id, input }, { db }: { db: DbConnection }): Promise<Model<User>> {
      const userId = parseInt(id);
      return db.sequelize.transaction(t => db.User
        .findByPk(userId)
        .then((user: User) => {
          if (!user) throw new Error(`User with id ${id} not found!`);
          return user.update(input, { transaction: t });
        }));
    },

    updateUserPassword(_, { id, input }, { db }: { db: DbConnection }): Promise<boolean> {
      const userId = parseInt(id);
      return db.sequelize.transaction(t => db.User
        .findByPk(userId)
        .then((user: User) => {
          if (!user) throw new Error(`User with id ${id} not found!`);
          return user.update(input, { transaction: t }).then(u => !!u);
        }));
    },

    deleteUser(_, { id }, { db }: { db: DbConnection }): Promise<boolean> {
      const userId = parseInt(id);
      return db.sequelize.transaction(t => db.User
        .findByPk(userId)
        .then((user: User) => {
          if (!user) throw new Error(`User with id ${id} not found!`);
          return user.destroy({ transaction: t }).then(() => true).catch(() => false);
        }));
    },

  },
};
