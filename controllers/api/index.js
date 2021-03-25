const router = require('express').Router();
const router = require('express').Router();
const characterRoutes = require('./characterRoutes');
const classRoutes = require('./classRoutes');
const raceRoutes = require('./raceRoutes');
const userRoutes = require('./userRoutes');

router.use('/character', characterRoutes);
router.use('/class', classRoutes);
router.use('/race', raceRoutes);
router.use('/user', userRoutes);

module.exports = router;