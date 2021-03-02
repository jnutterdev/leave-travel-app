const { Favorites } = require('../../models');

// create a favorite
exports.favorites_create_post = async function(req, res) {
      
    const {  placeId, userId, place } = req.body;
    
    const newFavorite = await Favorites.create({
      placeId,
      userId,
      place,

     });
   
 
    res.send(newFavorite);
  }

  // get all favorites (tested and works)
exports.favorites_foruser_get = async function (req, res) {

    const usersFavorites = await Favorites.findAll();

    res.send(usersFavorites);
};