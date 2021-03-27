const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Character, User }  = require('../../models');
const axios = require('axios').default;
// const CharacterObj = require('../../lib/Character');
const dndApi = 'https://www.dnd5eapi.co/api';
const CharacterCreator = require("../../lib/CharacterCreator");

// helper functions

// const getCategory = (response) => {
//     return response.map((e) => e.name);
// }
// const getEquipment = (response) => {
//     return response.map((e) => e.equipment.name);
// }

// const chooseEquipment = (response) => {
//     const equipmentArray = [];
//     response.forEach(choice => {
//         let choiceNumber = choice.choose;
//         for (i = 0; i < choiceNumber; i++) {
//             let options = choice.from;
//             equipmentArray.push(options[i].equipment.name);
//         }   
//     });
//     return equipmentArray;
// }

// const chooseProfOrLang = (response) => {
//     let array = [];
//     let allOptions = response.from;
//     let choiceNumber = response.choose;
//     for (i = 0; i < choiceNumber; i++) {
//         array.push(allOptions[i].name);
//     }   
//     return array;
// }

// create character object with help from dnd api

router.post('/', async (req, res) => {  
    try {

        const [classData, raceData] = await Promise.all([
            axios.get(`${dndApi}/classes/${req.body.charClass}`).then((res) => res.data),
            axios.get(`${dndApi}/races/${req.body.charRace}`).then((res) => res.data)
        ]);

        const newChar = new CharacterCreator(
            classData, 
            raceData, 
            req.body.charClass, 
            req.body.charRace, 
            req.body.charName
            ).character; 

        // data from class
        // let hitDie = classData.hit_die;       
        // let savingThrows = getCategory(classData.saving_throws);

        // let startingEquipment = getEquipment(classData.starting_equipment);
        // let moreEquipment = chooseEquipment(classData.starting_equipment_options);
        // let equipment = startingEquipment.concat(moreEquipment);

        // data from race
        // let speed = raceData.speed;

        // let classProficiencies = getCategory(classData.proficiencies);
        // let raceProficiencies = getCategory(raceData.starting_proficiencies);
        // let moreProficiencies = (raceData.starting_proficiency_options) ? chooseProfOrLang(raceData.starting_proficiency_options) : null;
        // let proficiencies = raceProficiencies.concat(moreProficiencies).concat(classProficiencies);

        // let someLanguages = getCategory(raceData.languages);
        // let moreLanguages = (raceData.language_options) ? chooseProfOrLang(raceData.language_options) : "";
        // let languages = someLanguages.concat(moreLanguages);

        // let features = getCategory(raceData.traits);     

        res.status(200).json(newChar);
    } catch (err) { 
        res.status(500).json(err);
        console.log(err);
    }   

    //     promise info 
    //     taker info and input into char class
    //     new Character(datas.hitdie)
    //     post to db

})

// Get all characters that belong to user 

router.get('/', async (req, res) => {
    try {
        const characterData = await Character.findAll({
            attributes: ['id', 'name'],
            include: [{ model: User }]
        })
        res.status(200).json(characterData);

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;