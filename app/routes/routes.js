// Route module
const express = require('express');
const router = express.Router();

module.exports = router;
// Require controller modules
const trips_controller = require('../controllers/tripsController');
const users_controller = require('../controllers/usersController');

// MY TRIPS ROUTES //

// CREATES trip (enters trip details, selects place, saves - tested and works)
router.post('/mytrips', trips_controller.mytrips_create_post);

/* async (req,res) => {
    try {
        console.log(req.body);
    } catch (error) {
        console.error(err.message);
    }
}); */

// GET all My Trips (tested and works)
router.get('/mytrips/:userId', trips_controller.mytrips_get);

// GET a single trip  (tested and works)
router.get('/mytrips/:id', trips_controller.mytrips_get);


// update trip (patch for update - tested and works)
router.patch('/mytrips/:id', trips_controller.mytrips_update_patch);

// delete a trip (tested and works)
router.delete('/mytrips/:id', trips_controller.mytrips_delete_post);

