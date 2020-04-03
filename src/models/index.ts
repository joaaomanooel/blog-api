/* eslint-disable global-require */
import * as fs from 'fs';
import * as path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import { DbConnection } from '../interfaces/DbConnectionInterface';
// import config from '../config';

const basename: string = path.basename(module.filename);

let db = null;

if (!db) {
  db = {};

  const defaultDbUrl = `mysql://root:root@localhost:3306/blog_${process.env.NODE_ENV}`;
  const { NODE_ENV, DB_URL = defaultDbUrl, TEST_DB_URL = defaultDbUrl } = process.env;
  const sequelize: Sequelize = new Sequelize(NODE_ENV !== 'test' ? DB_URL : TEST_DB_URL);

  fs
    .readdirSync(__dirname)
    .filter((file: string) => (
      (file.indexOf('.') !== 0)
      && (file !== basename)
      && (file.slice(-3) === '.js')
    ))
    .forEach((file: string) => {
      const model = require(path.join(__dirname, file)).default.setInit(sequelize, DataTypes);
      db[model.name] = model;
    });

  Object.keys(db).forEach((modelName: string) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
}

export default <DbConnection>db;
