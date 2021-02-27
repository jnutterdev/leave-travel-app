// Route module
const express = require('express');
const router = express.Router();

module.exports = router;
// Require controller modules
const trips_controller = require('../controllers/tripsController');
const users_controller = require('../controllers/usersController');

// MY TRIPS ROUTES //

// CREATES trip (enters trip details, selects place, saves)
router.post('/mytrips', trips_controller.mytrips_create_post);

/* async (req,res) => {
    try {
        console.log(req.body);
    } catch (error) {
        console.error(err.message);
    }
}); */

// GET My Trips
router.get('/mytrips/:userId', trips_controller.mytrips_get);

// add new reservation (put for new)

// update trip (patch for update)

// delete a trip


