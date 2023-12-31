'use strict';

const utensil = (connectSequelizeToDb, DataTypes) => 
    connectSequelizeToDb.define('utensil', {
    name: {
        type: DataTypes.STRING,
        allowNull: false, //makes this property/column a must have
        unique: true
    }
});

module.exports = utensil;