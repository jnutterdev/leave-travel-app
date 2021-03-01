const { Favorite } = require('../../models');

// create a favorite
exports.favorite_create_post = async function(req, res) {
      
    const { userId, placeId, place } = req.body;
    
    const newFavorite = await Favorite.create({
      userId,
      placeId,
      place,

     });
   
 
    res.send(newFavorite);
  }