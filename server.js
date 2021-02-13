const { Sequelize } = require('sequelize');
const express = require("express");
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');

// Passing a connection URI for sequelize database
const sequelize = new Sequelize('postgres://user:"":5432/leavedb') 

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }