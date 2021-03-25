const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Character }  = require('../../models');

router.get('/', async (req, res) => {
    try{
        const characterData = await Character.findAll({
            attributes: [],
            include: [{}]
        })

    } catch {}
})