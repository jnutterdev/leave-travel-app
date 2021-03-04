// Route module
const express = require('express');
const router = express.Router();


module.exports = router;
// Require controller modules
const trips_controller = require('../controllers/tripsController');
const users_controller = require('../controllers/usersController');
const favorite_controller = require('../controllers/favoriteController')

// MY TRIPS ROUTES //

// CREATES trip (enters trip details, selects place, saves - tested and works)
router.post('/mytrips', trips_controller.mytrips_create_post);

// GET all My Trips (tested and works)
router.get('/mytrips', trips_controller.mytrips_foruser_get);

// // GET a single trip  (tested and works)
// router.get('/mytrips/:id', trips_controller.mytrips_get);


// update trip (patch for update - tested and works)
router.patch('/mytrips/:id', trips_controller.mytrips_update_patch);

// delete a trip (tested and works)
router.delete('/mytrips/:id', trips_controller.mytrips_delete_post);

// FAVORITE ROUTES
// creates favorite (clicks heart on card)
router.post('/favorites', favorite_controller.favorites_create_post);

// GET all My favorites (tested and works)
router.get('/favorites/:id', favorite_controller.favorites_foruser_get);


// USER ROUTES

//create a user - register (tested and works)
router.post('/user', users_controller.user_create_post);

//get a user - login (tested and works)
router.get('/user/:id', users_controller.user_get);

//delete a user - delete acct
router.delete('/user/:id', users_controller.user_delete_post); 