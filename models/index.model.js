'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const gameCharacters = require('./characters.model.js'); 
const coolGames = require('./game.model.js');
const meal = require('./meal.model.js');
const utensil = require('./utensil.model.js');
const Collection = require('./collection.js');

const connectSequelizeToDb =
  process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.POSTGRESURI;

//connect sequelize to my db
const sequelizeConnect = new Sequelize(connectSequelizeToDb);

//call functions to make models
let Meal = meal(sequelizeConnect, DataTypes);
let Utensil = utensil(sequelizeConnect, DataTypes);

//make associations
Utensil.hasMany(Meal, {
  foreignKey: 'eatWith',
  sourceKey: 'name'
});
Meal.belongsTo(Utensil, {
  foreignKey: 'eatWith',
  targetKey: 'name'
});

//add the Collection class to each model
const UtensilCollection = new Collection(Utensil);
const MealCollection = new Collection(Meal);

//export connection instance
module.exports = {
    sequelizeConnect, 
    DataTypes,
    GameCharacters : gameCharacters(sequelizeConnect, DataTypes),
    CoolGames : coolGames(sequelizeConnect, DataTypes),
    UtensilCollection,
    MealCollection
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
