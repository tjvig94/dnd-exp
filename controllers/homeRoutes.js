const router = require('express').Router();
const { User, Character } = require('../models');
const withAuth = require('../utils/auth');
const path = require('path');

router.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../index.html'));
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/characterselect', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/characters.html'));
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
