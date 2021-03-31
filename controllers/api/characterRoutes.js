const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Character, User }  = require('../../models');
const axios = require('axios').default;
const dndApi = 'https://www.dnd5eapi.co/api';
const CharacterCreator = require("../../lib/CharacterCreator");
const Human = require('../../lib/Human');
const Dwarf = require('../../lib/Dwarf');
const Elf = require('../../lib/Elf');

// Create new character, and add it to the database

router.post('/', async (req, res) => {  
    try {
        const [classData, raceData] = await Promise.all([
            axios.get(`${dndApi}/classes/${req.body.charClass}`).then((res) => res.data),
            axios.get(`${dndApi}/races/${req.body.charRace}`).then((res) => res.data)
        ]);

        const newChar = () => {
            switch (req.body.charRace) {
                case "human":
                    return new Human(
                        classData, 
                        raceData, 
                        req.body.charClass,
                        req.body.charName, 
                        req.body.charRace           
                        ).character;
                case "dwarf":
                    return new Dwarf(
                        classData, 
                        raceData, 
                        req.body.charClass,
                        req.body.charName, 
                        req.body.charRace           
                        ).character;
                case "elf":
                    return new Elf(
                        classData,
                        raceData,
                        req.body.charClass,
                        req.body.charName,
                        req.body.charRace
                    ).character;
                default:
                    break;
            }
            return;
        }
        
        const finChar = newChar();
            
        Character.create({
            name: finChar.name,
            race: finChar.race,
            class: finChar.class,
            stats: finChar.stats,
            modifiers: finChar.modifiers,
            skills: finChar.skills,
            speed: finChar.speed,
            hitdice: finChar.hit_die,
            equipment: finChar.equipment,
            proficiencies: finChar.proficiencies,
            features: finChar.features,
            languages: finChar.languages
        })
        .then((character) => res.status(200).json(character));

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

        // TODO: Send user to character-sheet page filled with this character's data

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
        // TODO: Send page with all character data cards
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
        res.status(200).json({ message: "Character Deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;