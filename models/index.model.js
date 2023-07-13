'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const gameCharacters = require('./characters.model.js'); 
const coolGames = require('./game.model.js');

const connectSequelizeToDb =
  process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.POSTGRESURI;

//connect sequelize to my db
const sequelizeConnect = new Sequelize(connectSequelizeToDb);

//export connection instance
module.exports = {
    sequelizeConnect, 
    DataTypes,
    GameCharacters : gameCharacters(sequelizeConnect, DataTypes),
    CoolGames : coolGames(sequelizeConnect, DataTypes)
}; 


// const testDbConnection = async () => {
// try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// testDbConnection();
