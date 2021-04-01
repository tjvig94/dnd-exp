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
        race: {
            type: DataTypes.STRING,
        },
        class: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: { model: 'user', key: 'id' }
        },
        stats: {
            type: DataTypes.JSON
        },
        modifiers: {
            type: DataTypes.JSON
        },

        skills: {
            type: DataTypes.JSON
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
        equipment: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        proficiencies: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        features: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        languages: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
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