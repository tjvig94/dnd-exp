class CharacterCreator {

    constructor(
        classData, 
        raceData,
        charClass,
        // charRace,
        charName
    ) {
        this.classData = classData;
        this.raceData = raceData;
        this.charClass = charClass;
        // this.charRace = charRace;
        this.charName = charName;
    }

    // getStats() {
    //     // Select random number from array
    //     const values = [8, 10, 12, 13, 14, 15];
    //     const randomVal = () => {
    //         let index = Math.floor(Math.random() * values.length);
    //         let stat = values[index];
    //         values.splice(index, 1);
    //         return stat;
    //     };
    //     // Assign random number to each stat, and build an object containing stat info
    //     const str = randomVal();
    //     const dex = randomVal();
    //     const con = randomVal();
    //     const int = randomVal();
    //     const wis = randomVal();
    //     const cha = randomVal();
    //     let baseStats = {
    //         "strength": str,
    //         "dexterity": dex,
    //         "constitution": con,
    //         "intelligence": int,
    //         "wisdom": wis,
    //         "charisma": cha
    //     };
    //     // Modify stat values depending on race
        
    //     switch (this.charRace) {
    //         case "human":               
    //             baseStats.strength = baseStats.strength + 1;                
    //             baseStats.dexterity = baseStats.dexterity + 1;
    //             baseStats.constitution = baseStats.constitution + 1;
    //             baseStats.intelligence = baseStats.intelligence + 1;
    //             baseStats.wisdom = baseStats.wisdom + 1;
    //             baseStats.charisma = baseStats.charisma + 1;
    //             break;
    //         case "elf":
    //             baseStats.dexterity = baseStats.dexterity + 2;               
    //             baseStats.wisdom = baseStats.wisdom + 1; // Wood elf subrace
    //             break;
    //         case "dwarf":
    //             baseStats.constitution = baseStats.constitution + 2;
    //             baseStats.strength = baseStats.strength + 2; // Mountain dwarf subrace
    //             break;
    //         default:
    //             break;
    //     }
    //     return baseStats;       
    // }

    // stats = this.getStats();

    // getModifiers() {
    //     let stats = this.stats;
    //     const strMod = Math.floor((stats.strength - 10) / 2);
    //     const dexMod = Math.floor((stats.dexterity - 10) / 2);
    //     const conMod = Math.floor((stats.constitution - 10) / 2);
    //     const intMod = Math.floor((stats.intelligence - 10) / 2);
    //     const wisMod = Math.floor((stats.wisdom - 10) / 2);
    //     const chaMod = Math.floor((stats.charisma - 10) / 2);
    //     const modifiers = {
    //         "strength_mod": strMod,
    //         "dexterity_mod": dexMod,
    //         "constitution_mod": conMod,
    //         "intelligence_mod": intMod,
    //         "wisdom_mod": wisMod,
    //         "charisma_mod": chaMod
    //     }
    //     return modifiers;
    // }

    // modifiers = this.getModifiers();

    // getSkills() {
    //     let modifiers = this.modifiers;
    //     let skills = {
    //         "acrobatics": modifiers.dexterity_mod,
    //         "animal_handling": modifiers.wisdom_mod,
    //         "arcana": modifiers.intelligence_mod,
    //         "atheltics": modifiers.strength_mod,
    //         "deception": modifiers.charisma_mod,
    //         "history": modifiers.intelligence_mod,
    //         "insight": modifiers.wisdom_mod,
    //         "intimidation": modifiers.charisma_mod,
    //         "investigation": modifiers.intelligence_mod,
    //         "medicine": modifiers.wisdom_mod,
    //         "nature": modifiers.intelligence_mod,
    //         "perception": modifiers.wisdom_mod,
    //         "performance": modifiers.charisma_mod,
    //         "persuasion": modifiers.charisma_mod,
    //         "religion": modifiers.intelligence_mod,
    //         "sleight_of_hand": modifiers.dexterity_mod,
    //         "stealth": modifiers.dexterity_mod,
    //         "survival": modifiers.wisdom_mod
    //     }
    //     return skills;
    // }

    // skills = this.getSkills();

    getEquipment(response) {
        return response.map((e) => e.equipment.name);
    }

    chooseEquipment(response) {
        const equipmentArray = [];
        response.forEach(choice => {
            let choiceNumber = choice.choose;
            for (let i = 0; i < choiceNumber; i++) {
                let options = choice.from;
                equipmentArray.push(options[i].equipment.name);
            }   
        });
        return equipmentArray;
    } 

    chooseProfOrLang(response) {
        if (response != null) {
            let array = [];
            for (let i = 0; i < response.choose; i++) {
                array.push(response.from[i].name);
            }   
            return array;
        } else {
            return "";
        }        
    }

    getCategory(response) {
        return response.map((e) => e.name);
    }

    // get character() {
    //     return {
    //         name: this.charName,
    //         race: this.charRace,
    //         class: this.charClass,
    //         stats: this.stats,
    //         modifiers: this.modifiers,
    //         skills: this.skills,
    //         hit_die: this.classData.hit_die,
    //         speed: this.raceData.speed,
    //         equipment: this.getEquipment(this.classData.starting_equipment).concat(this.chooseEquipment(this.classData.starting_equipment_options)),
    //         proficiencies: this.getCategory(this.raceData.starting_proficiencies).concat(this.getCategory(this.classData.proficiencies)).concat(this.chooseProfOrLang(this.raceData.starting_proficiency_options)),                
    //         saving_throws: this.getCategory(this.classData.saving_throws),
    //         equipment: this.getEquipment(this.classData.starting_equipment).concat(this.chooseEquipment(this.classData.starting_equipment_options)),
    //         languages: this.getCategory(this.raceData.languages).concat(this.chooseProfOrLang(this.raceData.language_options)),
    //         features: this.getCategory(this.raceData.traits)
    //     }
    // }
}

module.exports = CharacterCreator;