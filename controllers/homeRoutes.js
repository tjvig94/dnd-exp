const router = require('express').Router();
const { User, Character } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    // if not logged in:
    // res.render('login')
    // otherwise...
    res.render('homepage');
    
});

router.get('/characterselect', async (req, res) => {
    try {
        const characterData = await Character.findAll({
            attributes: ['id', 'name', 'race', 'class'],
            include: [{ model: User }]
        })
        const characters = characterData.map((character) => character.get({ plain: true }));
        console.log(characters);
        res.render('characterselect', { characters });
        res.status(200);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/charactersheet', (req, res) => {
    res.render('charactersheet')
});

module.exports = router;
