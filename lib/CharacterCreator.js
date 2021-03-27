class CharacterCreator {

    constructor(
        classData, 
        raceData
    ) {
        this.classData = classData;
        this.raceData = raceData;
    }

    getEquipment() {
        this.classData.map((e) => e.equipment.name);
    }

    get equipment() {
        return this.classData.map((e) => e.equipment.name);
    }
    get character() {
        return {
            equipment: this.getEquipment(),
        }
    }


}

module.exports = CharacterCreator;