// const db = require('../../models');
const { MyTrips, User } = require('../../models');
// const Trips = db.mytrips;

// CREATES Trip (enters trip details, selects place, saves - tested and works)
exports.mytrips_create_post = async function(req, res) {
      
    const { placeId, place, userId, reservations, travelDates, photo, placeURL } = req.body;
    
    const newTrip = await MyTrips.create({
      placeId,
      place,
      userId,
      reservations,
      travelDates,
      photo,
      placeURL
     });
   
    // const { dataValues } = newTrip;
    res.send(newTrip);
  }
  

// get all trips (tested and works)
exports.mytrips_foruser_get = async function (req, res) {

    const usersTrips = await MyTrips.findAll();

    res.send(usersTrips);
};

// get a single trip
// exports.mytrips_get = async function (req, res) 
//  {
    
//     const oneTrip = await MyTrips.findOne({
//         id: req.param.id,
//     });
//     res.send(oneTrip);
// };

// update trip (patch for update - tested and works)
exports.mytrips_update_patch = async function(req, res) { 
    const { id } = req.params;

    const updatedTrip = await MyTrips.update(req.body, {
        where: {
            id
        }
    });

    res.send(updatedTrip);
};

// delete a trip (tested and works)
exports.mytrips_delete_post = async function(req, res) {
    const { id } = req.params;
    
    const deletedTrip = await MyTrips.destroy({
     where: {
       id
        }
    })
  
    res.send(deletedTrip);
  };

  