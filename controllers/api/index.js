const router = require('express').Router();
const characterRoutes = require('./characterRoutes');
const userRoutes = require('./userRoutes');
const featureRoutes = require('./featureRoutes')

router.use('/users', userRoutes);
router.use('/characterGenerator', characterRoutes);

module.exports = router;