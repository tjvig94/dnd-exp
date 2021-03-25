const router = require('express').Router();
const withAuth = require('../../utils/auth');
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