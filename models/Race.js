const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Race extends Model {}

Race.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        abilityBonus: {
            type: DataTypes.STRING,
            allowNull: false
        },
        speed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        languages: {
            type: DataTypes.STRING,
            allowNull: false
        },
        trait1: {
            type: DataTypes.STRING
        },
        trait2: {
            type: DataTypes.STRING
        },
        trait3: {
            type: DataTypes.STRING
        },
        trait4: {
            type: DataTypes.STRING
        },
        trait5: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'race'
    }
);

module.exports = Race;