const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');

router.use('/users', userRoutes);
router.use('/projects', characterRoutes);

module.exports = router;
