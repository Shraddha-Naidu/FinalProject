const express = require('express');
const route = express.Router();
// this connects the database connection and queries to the routing folder
const db = require('../models/db')

// Dashboard
route.get('/', (req, res) => {
     db.getClientsBySocialWorkerId(function (err, result) {
          db.getToDosForDay(function (err, result1) {
               res.render('dashboard', { result: result, result1: result1 });
          })
     })
});

module.exports = route;

