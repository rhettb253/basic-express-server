'use strict';

const coolGames = (connectSequelizeToDb, DataTypes) => 
    connectSequelizeToDb.define('coolGames', {
    title: {
        type: DataTypes.STRING,
        allowNull: false //makes this property/column a must have
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = coolGames;