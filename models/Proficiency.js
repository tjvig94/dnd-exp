const sequelize = require('../config/connection.js');
const { Model, DataTypes } = require('sequelize');

class Proficiency extends Model { }

Proficiency.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        proficiencies: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

module.exports = Proficiency;