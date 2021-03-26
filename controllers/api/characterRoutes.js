const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Character }  = require('../../models');
const axios = require('axios').default;
const CharacterObj = require('../../lib/Character');
const dndApi = 'https://www.dnd5eapi.co/api'

router.post('/', async (req, res) => {
    // pull out info from req body
    // make axios call to d&d api with req body info   

    const classData = await axios.get(`${dndApi}/classes/${req.body.charClass}`);
    let newCharacter = new CharacterObj(req.body.charName, req.body.charClass, req.body.charRace);
    res.json(newCharacter);
    

    //     promise info 
    //     taker info and input into char class
    //     new Character(datas.hitdie)
    //     post to db
})

const { Character, User } = require('../../models');
const { Router } = require('express');

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