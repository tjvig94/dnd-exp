const Character = require('./Character');
const Class = require('./Class');
const Race = require('./Race');
const User = require('./User');
const Other = require('./Other');
const Language = require('./Language');
const StatSet = require('./StatSet');
const SkillSet = require('./SkillSet');
const Attacks = require('./Attacks');
const Feature = require('./Feature');
const Armor = require('./Armor');
//need to figure out how and what relates to eachother (hasmany etc...)

//Need to rework 

User.hasMany(Character, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Character.belongsTo(User, {
    foreignKey: 'user_id'
});

Character.hasOne(Other, {
    onDelete: 'CASCADE'
});
Other.belongsTo(Character, {
    foreignKey: 'character_id',
});
Character.belongsToMany(Language, {
    through: 'LanguageCharacter',
    onDelete: 'CASCADE'
});
Language.belongsToMany(Character, {
    through: 'LanguageCharacter',
    onDelete: 'CASCADE'
});

StatSet.belongsTo(Character, {
    foreignKey: 'character_id'
});

Character.hasOne(StatSet, {
    onDelete: 'CASCADE'
});

Character.belongsTo(Race, {
    foreignKey: 'race_id'
});

Race.hasMany(Character, {
    onDelete: 'RESTRICT'
});

Character.belongsTo(Class, {
    foreignKey: 'class_id'
});

Class.hasMany(Character, {
    onDelete: 'RESTRICT'
});
Character.hasOne(SkillSet, {
    onDelete: 'CASCADE'
});
Character.belongsToMany(Feature, {
    through: 'FeatureCharacter',
    onDelete: 'CASCADE'
});
Feature.belongsToMany(Character, {
    through: 'FeatureCharacter',
    onDelete: 'CASCADE'
});

Character.hasMany(Attacks, {
    onDelete: 'RESTRICT'
});

Character.belongsToMany(Armor, {
    through: 'ArmorCharacter',
    onDelete: 'CASCADE'
})

Armor.belongsToMany(Character, {
    through: 'ArmorCharacter',
    onDelete: 'RESTRICT'
})






module.exports = {
    Class,
    Race,
    Character,
    User,
    Other,
    StatSet,
    SkillSet,
    Language,
    Attacks,
    Feature,
}