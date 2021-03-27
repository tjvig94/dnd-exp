const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Character, User }  = require('../../models');
const axios = require('axios').default;
const CharacterObj = require('../../lib/Character');
const dndApi = 'https://www.dnd5eapi.co/api'

const getCategory = (response) => {
    let array = [];
    let category = response;
    category.forEach(item => {
        array.push(item.name);
    });
    return array;
}

const getEquipment = (response) => {
    let equipmentArray = [];
    let equipmentOptions = response;
    equipmentOptions.forEach(option => {
        equipmentArray.push(option.equipment.name);
    });
    return equipmentArray;
}

const chooseEquipment = (response) => {
    let equipmentArray = [];
    let allOptions = response;
    allOptions.forEach(choice => {
        let choiceNumber = choice.choose;
        for (i = 0; i < choiceNumber; i++) {
            let options = choice.from;
            equipmentArray.push(options[i].equipment.name);
        }   
    });
    return equipmentArray;
}

router.post('/', async (req, res) => {  
    try {
        let classData = await axios.get(`${dndApi}/classes/${req.body.charClass}`);
        let hitDie = classData.data.hit_die;
        let proficiencies = getCategory(classData.data.proficiencies);
        let savingThrows = getCategory(classData.data.saving_throws);
        let startingEquipment = getEquipment(classData.data.starting_equipment);
        let moreEquipment = chooseEquipment(classData.data.starting_equipment_options);
        const newCharacter = new CharacterObj(req.body.charName, req.body.charClass, req.body.charRace, hitDie, proficiencies, savingThrows, startingEquipment, moreEquipment)
       
        res.status(200).json(newCharacter);
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

router.get('/',  async (req, res) => {
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