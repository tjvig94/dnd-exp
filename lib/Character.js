const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window ); 

class Character {
    constructor(charName, charRace, charClass) {
        this.charName = charName;
        this.charClass = charClass;
        this.charRace = charRace;
    }

    getRaceData() {
        $.get(`https://www.dnd5eapi.co/api/races/${this.charRace}/`);
    }

    getClassData() {
        $.get(`https://www.dnd5eapi.co/api/classes/${this.charClass}/`);
    }

    setStats() {
        const values = [8, 10, 12, 13, 14, 15];
        const randomVal = () => {
            let index = Math.floor(Math.random() * values.length);
            let stat = values[index];
            values.splice(index, 1);
            return stat;
        }; 
        let str = randomVal();
        let dex = randomVal();
        let con = randomVal();
        let int = randomVal();
        let wis = randomVal();
        let cha = randomVal();
        const statsObj = {
            "strength": str,
            "dexterity": dex,
            "constitution": con,
            "intelligence": int,
            "wisdom": wis,
            "charisma": cha
        }
        console.log(statsObj);
        return statsObj;
    }
}

const newCharacter = new Character("Billiam", "human", "rogue");
newCharacter.setStats();