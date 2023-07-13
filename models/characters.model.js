'use strict';

const gameCharacters = (connectSequelizeToDb, DataTypes) =>
    connectSequelizeToDb.define('gameCharacters', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ability: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = gameCharacters;