const Character = require('./Character');
const Class = require('./Class');
const Race = require('./Race');
const User = require('./User');
const Other = require('./Other')
const Language = require('./Language')
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

    Character.hasOne(Other, {
        onDelete: 'cascade'
    });
Other.belongsTo(Character, {
    foreignKey: 'character_id',
});
Character.belongsToMany(Language, {
    onDelete: 'cascade'
});
Language.belongsToMany(Character, {
    onDelete: 'cascade'
});




module.exports = {
    Class,
    Race,
    Character,
    User,
    Other
}