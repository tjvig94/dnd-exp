const router = require('express').Router();
const { Class, Character } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const classData = await Class.findAll({
            attributes: ['id', 'name'],
            include: [
                { model: Character },

            ]

        })
        res.status(200).json(classData);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const classData = await Class.findByPk(req.params.id, {
            include: [
                { model: Character }
            ],
        });
        if (!classData) {
            res.status(404).json
                ({ message: 'Sorry, no class found with that id' });
            return;
        }
        res.status(200).json(classData)
    } catch (err) {
        res.status(500).json(err)
    }
});




module.exports = router;