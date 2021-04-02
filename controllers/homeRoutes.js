const router = require('express').Router();
const { User, Character } = require('../models');
const auth = require('../utils/auth');

router.get('/', auth.withAuth, (req, res) => {
    res.render('homepage', {
        logged_in: true,
    });
});

router.get('/login', auth.notAuth, (req, res) => {
    res.render('login');
})


// some sort of need to be logged in to continue - cc

router.get('/characterselect', auth.withAuth, async (req, res) => {
    try {
        console.log(req.session)
        const characterData = await Character.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: ['id', 'name', 'race', 'class'],
            include: [{ model: User }]
        })
        const characters = characterData.map((character) => character.get({ plain: true }));
        console.log(characters);
        res.render('characterselect', {
            characters,
            logged_in: true,
        });
        res.status(200);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/charactersheet', auth.withAuth, (req, res) => {
    res.render('charactercreated')

});

router.get('/character/:id', auth.withAuth, async (req, res) => {
    //req.params.id
    try {
        const character = await Character.findByPk(req.params.id, {
            attributes: ['id', 'name', 'stats', 'modifiers', 'skills', 'armourclass', 'initiative', 'speed', 'hitpoints', 'hitdice', 'equipment', 'proficiencies', 'languages', 'features', 'race', 'class'],
            include: [{ model: User }]
        })
        console.log(character.toJSON());

        res.render('charactercreated', {
            character: character.toJSON(),
            logged_in: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
