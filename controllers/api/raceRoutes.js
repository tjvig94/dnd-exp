const router = require('express').Router();
const { Class, Race } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const raceData = await Race.findAll({
            attributes: ['']

        })
        res.status(200).json(raceData)
    } catch (err) {
        res.status(500).json(err)
    }
})