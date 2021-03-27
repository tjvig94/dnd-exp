const router = require('express').Router();
const characterRoutes = require('./characterRoutes');
const classRoutes = require('./classRoutes');
const raceRoutes = require('./raceRoutes');
const userRoutes = require('./userRoutes');
const featureRoutes = require('./featureRoutes')

router.use('/users', userRoutes);
router.use('/characterGenerator', characterRoutes);
router.use('/character', characterRoutes);
router.use('/class', classRoutes);
router.use('/race', raceRoutes);
router.use('/user', userRoutes);
router.use('/feature', featureRoutes);

module.exports = router;