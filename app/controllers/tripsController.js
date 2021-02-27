// const db = require('../../models');
const {MyTrips} = require('../../models');

// const Trips = db.mytrips;

// CREATES Trip (enters trip details, selects place, saves)
exports.mytrips_create_post = async function(req, res) {
      
    const { placeId, place, userID, reservations, travelDates} = req.body;
    
    const newTrip = await MyTrips.create({
      placeId,
      place,
      userID,
      reservations,
      travelDates,
     });
   
// const { dataValues } = newTrip;
    res.send('/mytrips');
  }
  

// get all trips
exports.mytrips_findOneUser_get = async function(req, res) {

    const MyTrips = await MyTrips.findAll()
    
    res.send('/mytrips');
  };

// add new reservation (put for new)

// update trip (patch for update)

// delete a trip

