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

        // },
        // speed: {
        //     INT,

        // },
        // hp_max: {
        //     INT,

        // },
        // hit_dice: {
        //     INT,

        // },



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