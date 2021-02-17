const { Sequelize } = require('sequelize');
const express = require("express");
const app = express();
const port = 3000;

// Passing a connection URI for sequelize database
const sequelize = new Sequelize('postgres://user:"":5432/leavedb')

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));