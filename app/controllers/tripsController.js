// const db = require('../../models');
const { MyTrips, User } = require('../../models');
// const Trips = db.mytrips;

// CREATES Trip (enters trip details, selects place, saves)
exports.mytrips_create_post = async function(req, res) {
      
    const { placeId, place, userId, reservations, travelDates} = req.body;
    
    const newTrip = await MyTrips.create({
      placeId,
      place,
      userId,
      reservations,
      travelDates,
     });
   
    // const { dataValues } = newTrip;
    res.send('/mytrips');
  }
  

// get all trips
exports.mytrips_get = async function (req, res) 
 {
    
    // const oneUser = await MyTrips.findAll(req.params.userId);
    const oneUser = await MyTrips.findAll({
        userId: req.param.userId,
    });
    res.send(oneUser);
};


/* exports.mytrips_findOneUser_get = async function(req, res) {

    const MyTrips = await MyTrips.findAll()
    
    res.send('/mytrips/:userId');
  }; */

// add new reservation (put for new)

// update trip (patch for update)

// delete a trip

