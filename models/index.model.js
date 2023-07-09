'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
// const 7deadModel = require('./7dead.model.js');
// const gameModel = require('./game.model.js');

const connectSequelizeToDb =
  process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URI;

//connect sequelize to my db
const sequelizeConnect = new Sequelize(connectSequelizeToDb);

//export connection instance
module.exports = sequelizeConnect; 


// const testDbConnection = async () => {
// try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// testDbConnection();
