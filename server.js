const { Sequelize } = require('sequelize');
const path = require('path');
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;


const allowedOrigins = ['http://localhost:3001', 'http://localhost:3000', "https://powerful-brushlands-03027.herokuapp.com"];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));

app.use(express.json()); //req.body

var routesRouter = require('./app/routes/routes')

// Passing a connection URI for sequelize database
const sequelize = new Sequelize('postgres://user:"":5432/leavedb')

// Commented out sequelize auth temporarily so we can get app deployed, will revisit after
// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

// Have Node serve the files for our built React app
app.use(express.static(path.join(__dirname, 'react-client/build')));

//Requiring the routes
var routes = require("./app/routes/routes");
app.use('/', routes);

// A simple endpoint just for testing GET requests
app.get("/ping", (req, res) => {
  res.json({ message: "The express server is working!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/react-client/build/index.html'));
}); 

/* app.use(function(req, res, next) {
  next(createError(404));
});  */

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));