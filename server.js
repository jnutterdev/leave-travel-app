const { Sequelize } = require('sequelize');
const path = require('path');
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;


const cors = require("cors");
app.use(cors());
app.use(express.json()); //req.body

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

// A simple endpoint just for testing GET requests
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/react-client/build/index.html'));
});

app.use(function(req, res, next) {
  next(createError(404));
});

//Requiring the routes
var routes = require("./app/routes");
app.use('/', routes);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));