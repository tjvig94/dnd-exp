const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window ); 

class Character {
    constructor(charName, charRace, charClass) {
        this.charName = charName;
        this.charClass = charClass;
        this.charRace = charRace;
    }

    // Async/Await??? //
    
    getRaceData() {
        $.get(`https://www.dnd5eapi.co/api/races/${this.charRace}/`).then(data => {
            let raceTraits = {
                "speed": data.speed,
                "languages": languages
            }
            return raceTraits;      
        });      
    }

    raceData = this.getRaceData();

    getClassData() {
        $.get(`https://www.dnd5eapi.co/api/classes/${this.charClass}/`);
    }

    classData = this.getClassData();

    // -------------- //

    getStats() {
        const values = [8, 10, 12, 13, 14, 15];
        const randomVal = () => {
            let index = Math.floor(Math.random() * values.length);
            let stat = values[index];
            values.splice(index, 1);
            return stat;
        }; 
        const str = randomVal();
        const dex = randomVal();
        const con = randomVal();
        const int = randomVal();
        const wis = randomVal();
        const cha = randomVal();
        const statsObj = {
            "strength": str,
            "dexterity": dex,
            "constitution": con,
            "intelligence": int,
            "wisdom": wis,
            "charisma": cha
        }
        return statsObj;
    }

    stats = this.getStats();

    getModifiers() {
        let stats = this.stats;
        const strMod = Math.floor((stats.strength - 10) / 2);
        const dexMod = Math.floor((stats.dexterity - 10) / 2);
        const conMod = Math.floor((stats.constitution - 10) / 2);
        const intMod = Math.floor((stats.intelligence - 10) / 2);
        const wisMod = Math.floor((stats.wisdom - 10) / 2);
        const chaMod = Math.floor((stats.charisma - 10) / 2);
        const modifiers = {
            "strength_mod": strMod,
            "dexterity_mod": dexMod,
            "constitution_mod": conMod,
            "intelligence_mod": intMod,
            "wisdom_mod": wisMod,
            "charisma_mod": chaMod
        }
        return modifiers;
    }

    modifiers = this.getModifiers();

    getSkills() {
        let modifiers = this.modifiers;
        let skills = {
            "acrobatics": modifiers.dexterity_mod,
            "animal_handling": modifiers.wisdom_mod,
            "arcana": modifiers.intelligence_mod,
            "atheltics": modifiers.strength_mod,
            "deception": modifiers.charisma_mod,
            "history": modifiers.intelligence_mod,
            "insight": modifiers.wisdom_mod,
            "intimidation": modifiers.charisma_mod,
            "investigation": modifiers.intelligence_mod,
            "medicine": modifiers.wisdom_mod,
            "nature": modifiers.intelligence_mod,
            "perception": modifiers.wisdom_mod,
            "performance": modifiers.charisma_mod,
            "persuasion": modifiers.charisma_mod,
            "religion": modifiers.intelligence_mod,
            "sleight_of_hand": modifiers.dexterity_mod,
            "stealth": modifiers.dexterity_mod,
            "survival": modifiers.wisdom_mod
        }
        return skills;
    }

    skills = this.getSkills();

    
}

const newCharacter = new Character("Billiam", "human", "rogue");