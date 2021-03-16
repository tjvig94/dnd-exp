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
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTbleName: true,
        underscored: true,
        modelName: 'race'
    }
);

module.exports = Race;