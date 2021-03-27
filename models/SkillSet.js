const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SkillSet extends Model { }

SkillSet.init(
    {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Acrobatics: {
            type: DataTypes.INTEGER
        },
        Animal_Handling: {
            type: DataTypes.INTEGER
        },
        Arcana: {
            type: DataTypes.INTEGER
        },
        Athletics: {
            type: DataTypes.INTEGER
        },
        Deception: {
            type: DataTypes.INTEGER
        },
        History: {
            type: DataTypes.INTEGER
        },
        Insight: {
            type: DataTypes.INTEGER
        },
        Intimidation: {
            type: DataTypes.INTEGER
        },
        Investigation: {
            type: DataTypes.INTEGER
        },
        Medicine: {
            type: DataTypes.INTEGER
        },
        Nature: {
            type: DataTypes.INTEGER
        },
        Perception: {
            type: DataTypes.INTEGER
        },
        Performance: {
            type: DataTypes.INTEGER
        },
        Persuasion: {
            type: DataTypes.INTEGER
        },
        Religion: {
            type: DataTypes.INTEGER
        },
        Sleight_of_hand: {
            type: DataTypes.INTEGER
        },
        Stealth: {
            type: DataTypes.INTEGER
        },
        Survival: {
            type: DataTypes.INTEGER
        },
        Passive_Wisdom: {
            type: DataTypes.INTEGER
        },
        character_id: {
            type: DataTypes.INTEGER
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'skills'
    }
)

module.exports = SkillSet;