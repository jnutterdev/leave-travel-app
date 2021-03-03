const { Sequelize } = require('sequelize');
const path = require('path');
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

app.use(express.json()); //req.body
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


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
app.use('/', cors(), routes);

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