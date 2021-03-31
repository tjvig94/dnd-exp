class CharacterCreator {

    constructor(
        classData, 
        raceData,
        charClass,
        charName
    ) {
        this.classData = classData;
        this.raceData = raceData;
        this.charClass = charClass;
        this.charName = charName;
    }

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

    getHitPoints(charClass, conMod) {
        switch (charClass) {
            case "rogue":
                return parseInt(conMod) + 8;
            case "barbarian":
                return parseInt(conMod) + 12;
            case "ranger":
                return parseInt(conMod) + 10;
        }
    }

    getArmorClass(charClass, dexMod, conMod) {
        switch (charClass) {
            case "rogue":
                return parseInt(dexMod) + 11;
            case "barbarian":
                return parseInt(dexMod) + parseInt(conMod) + 10;
            case "ranger":
                return (parseInt(dexMod) <= 2) ? parseInt(dexMod) + 14: 16;            
        }
    }
}

module.exports = CharacterCreator;