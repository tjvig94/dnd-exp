const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Character, User }  = require('../../models');
const axios = require('axios').default;
const dndApi = 'https://www.dnd5eapi.co/api';
const CharacterCreator = require("../../lib/CharacterCreator");

// Create new character, and add it to the database

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
            
        Character.create({
            name: newChar.name,
            race: newChar.race,
            class: newChar.class,
            stats: newChar.stats,
            modifiers: newChar.modifiers,
            skills: newChar.skills,
            speed: newChar.speed,
            hitdice: newChar.hitdice,
            equipment: newChar.equipment,
            proficiencies: newChar.proficiencies,
            features: newChar.features,
            languages: newChar.languages
        })
        .then(character => res.status(200).json(character));

    } catch (err) { 
        res.status(500).json(err);
        console.log(err);
    }
})

// Get one character

router.get('/:id', async (req, res) => {
    try {
        const characterData = await Character.findByPk(req.params.id, {
            attributes: ['id', 'name', 'stats', 'modifiers', 'skills', 'armourclass', 'initiative', 'speed', 'hitpoints', 'hitdice', 'equipment', 'proficiencies', 'languages', 'features', 'race', 'class'],
            include: [{ model: User }]
        })
        res.status(200).json(characterData);

    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all characters that belong to a user

router.get('/', async (req, res) => {
    try {
        const characterData = await Character.findAll({
            attributes: ['id', 'name', 'race', 'class'],
            include: [{ model: User }]
        })
        res.status(200).json(characterData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const characterData = await Character.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(characterData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
})

module.exports = router;