const router = require('express').Router();
const matchupRoutes = require('./matchup-routes');


router.use('/matchup', matchupRoutes);
router.use('/tech', techRoutes);

module.exports = router;
