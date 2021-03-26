const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Character, User }  = require('../../models');
const axios = require('axios').default;
const CharacterObj = require('../../lib/Character');
const dndApi = 'https://www.dnd5eapi.co/api'

let classData;
router.post('/', async (req, res) => {  
    try {
        classData = await axios.get(`${dndApi}/classes/${req.body.charClass}`);
        console.log(classData);
        // let billiam = new CharacterObj(req.body.charName, req.body.charRace, req.body.charClass);
        res.status(200).json(classData.data);
    } catch (err) { 
        res.status(500).json(err)
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