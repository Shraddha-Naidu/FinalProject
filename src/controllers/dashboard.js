const express = require('express');
const route = express.Router();
// this connects the database connection and queries to the routing folder
const db = require('../models/db')

// db.getAllClients
// db.getToDosForDay
// db.getCalendarForDay

// Dashboard
route.get('/', (req, res) => {
     res.render('dashboard', {result, result1});
});

module.exports = route;

