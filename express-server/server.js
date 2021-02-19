const { Sequelize } = require('sequelize');
const path = require('path');
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// Passing a connection URI for sequelize database
const sequelize = new Sequelize('postgres://user:"":5432/leavedb')

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../react-client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../react-client/build', 'index.html'));
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));