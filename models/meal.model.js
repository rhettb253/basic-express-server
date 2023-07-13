'use strict';

const meal = (connectSequelizeToDb, DataTypes) => 
    connectSequelizeToDb.define('meal', {
    mealName: {
        type: DataTypes.STRING,
        allowNull: false //makes this property/column a must have
    },
    eatWith: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = meal;