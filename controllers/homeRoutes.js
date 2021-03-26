const router = require('express').Router();
const { User, Character } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try{

    }catch (err) {
        res.status(500).json(err)
    }
})
