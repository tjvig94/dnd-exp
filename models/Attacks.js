const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Attacks extends Model { }

Attacks.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        weapon: {
            type: DataTypes.STRING
        },
        spells: {
            type: DataTypes.STRING
        }
 

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'attacks'
    }


)
module.exports = Attacks;