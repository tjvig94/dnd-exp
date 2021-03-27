const router = require('express').Router();
const { Class, Race, Character } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const raceData = await Race.findAll({
            attributes: ['id', 'name'],
            include: [{ model: Character }]
        })
        res.status(200).json(raceData)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
      const raceData = await Race.findByPk(req.params.id, {
        include: [{ model: Character }],
      });
  
      if (!raceData) {
        res.status(404).json
        ({ message: 'Sorry, no race found matching our records, try again' });
        return;
      }
  
      res.status(200).json (raceData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', async (req,res) => {
    try {
        const raceData = await Race.create({
            race: req.body.race
        })
        res.status(200).json(raceData)

    }catch (err) {
        res.status(500).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const destroyRace = await Race.destroy(
        {
          where: {
            id: req.params.id
          }
        }).then(destroyRace => (destroyRace) ? res.status(200).json : res.status(404).json
          ({ message: 'You cant destroy something that is NOT there!' }));
    } catch (err) {
      res.status(500).json(err)
    }
  });

  
module.exports = router;