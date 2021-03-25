const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model { }

Character.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        race_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'race', key: 'id' }

        },

        class_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'class', key: 'id' }

        },

        user_id: {
            type: DataTypes.INTEGER,
            references: { model: 'user', key: 'id' }

        },

        stats: {
            type: DataTypes.INTEGER
        },

        modifiers: {
            type: DataTypes.INTEGER
        },

        skills: {
            type: DataTypes.INTEGER
        },

        armourclass: {
            type: DataTypes.INTEGER
        },

        initiative: {
            type: DataTypes.INTEGER
        },

        speed: {
            type: DataTypes.INTEGER
        },

        hitpoints: {
            type: DataTypes.INTEGER
        },

        hitdice: {
            type: DataTypes.INTEGER
        },

        weapon: {
            type: DataTypes.STRING
        },

        proficiencies: {
            type: DataTypes.TEXT
        },

        equipment: {
            type: DataTypes.TEXT
        },

        traits: {
            type: DataTypes.TEXT
        },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'character'
    }

)

module.exports = Character;