const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class StatSet extends Model {}

StatSet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        str_stat: {
            type: DataTypes.INTEGER
        },
        str_mod: {
            type: DataTypes.INTEGER
        },
        str_sav: {
            type: DataTypes.INTEGER
        },
        dex_stat: {
            type: DataTypes.INTEGER
        },
        dex_mod: {
            type: DataTypes.INTEGER
        },
        con_stat: {
            type: DataTypes.INTEGER
        },
        con_mod: {
            type: DataTypes.INTEGER
        },
        con_sav: {
            type: DataTypes.INTEGER
        },
        int_stat: {
            type: DataTypes.INTEGER
        },
        int_mod: {
            type: DataTypes.INTEGER
        },
        int_sav: {
            type: DataTypes.INTEGER
        },
        wis_stat: {
            type: DataTypes.INTEGER
        },
        wis_mod: {
            type: DataTypes.INTEGER
        },
        cha_stat: {
            type: DataTypes.INTEGER
        },
        cha_mod: {
            type: DataTypes.INTEGER
        },
        cha_save: {
            type: DataTypes.INTEGER
        },
        prof_bonus: {
            type: DataTypes.INTEGER
        },
        character_id: {
            type: DataTypes.INTEGER,
            references:{ model: 'character', key: 'id'}
        }
       

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'stat_set'
    }
)

module.exports = StatSet;