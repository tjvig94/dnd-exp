const sequelize = require('../config/connection.js');
const { Model, DataTypes } = require('sequelize');

class Language extends Model { }

Language.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'language'
    }
);

module.exports = Language;

// origin for icing?