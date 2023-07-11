'use strict';

const sevDeadCharacter = (connectSequelizeToDb, DataTypes) =>
    connectSequelizeToDb.define('sevDeadCharacter', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ability: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = sevDeadCharacter;