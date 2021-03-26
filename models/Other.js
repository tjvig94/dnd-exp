const sequelize = require('../config/connection.js');
const { Model, DataTypes } = require('sequelize');

class Other extends Model { }

Other.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        equipment: {
            type: DataTypes.JSON,
        },
        character_id: {
            type: DataTypes.INTEGER,
            references: { model: 'character', key: 'id' }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'other'
    }
);

module.exports = Other;