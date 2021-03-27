const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Armor extends Model { }

Armor.init(
    {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true

        },
        armor_class: {
            type: DataTypes.INTEGER

        },
        initiative: {
            type: DataTypes.INTEGER

        },
        speed: {
            type: DataTypes.INTEGER,

        },
        hp_max: {
            type: DataTypes.INTEGER

        },
        hit_dice: {
            type: DataTypes.INTEGER

        },



    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'armor'
    }
)
module.exports = Armor;