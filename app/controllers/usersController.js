const { User } = require('../../models');


// create a user - register (tested and works)
exports.user_create_post = async function(req, res) {
  
    const { email, firstName, lastName, myTripId, travelDates } = req.body;

    const newUser = await User.create({
        email,
        firstName,
        lastName,
        myTripId,
        travelDates,
    });

    
    res.send(newUser);
}

//get a user - login (tested and works)
exports.user_get = async function (req, res) 
 {
    
    const Login = await User.findOne({
        id: req.param.id,
    });
    res.send(Login);
};

//delete a user - delete acct (tested and works)
exports.user_delete_post = async function(req, res) {
    const { id } = req.params;
    
    const deletedUser = await User.destroy({
     where: {
       id
        }
    })
  
    res.send(deletedUser);
  };
