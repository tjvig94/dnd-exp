const router = require('express').Router();
const characterRoutes = require('./characterRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/characterGenerator', characterRoutes);

module.exports = router;