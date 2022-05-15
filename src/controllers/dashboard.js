const express = require('express');
const route = express.Router();
// this connects the database connection and queries to the routing folder
const db = require('../models/db')

// Dashboard
route.get('/', (req, res) => {
     // db.getClientsBySocialWorkerId(function (err, result) {
     //      console.log("CLIENT RESULT", result.rows)
     //      db.getToDosForDay(function(err, result1) {
     //           console.log("TODOS RESULTS", result1.rows)
               res.render('dashboard');
     //       })
     //    })
});

module.exports = route;

