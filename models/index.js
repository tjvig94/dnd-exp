const Character = require('./Character');
const Class = require('./Class');
const Race = require('./Race');
const User = require('./User');

//need to figure out how and what relates to eachother (hasmany etc...)

//Need to rework 

User.hasMany(Character, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
}),

Character.belongsTo(User, {
    foreignKey: 'user_id'
}),

// Character.hasMany(Race)


//  Race.belongsToMany(Character, {
//      through: Race,
//      foreignKey: 'race_id'
//  })

//  Character.hasMany(Class, {
//      foreignKey: 'class_id'
//  })

 



module.exports = {
    Class,
    Race, 
    Character,
    User
}