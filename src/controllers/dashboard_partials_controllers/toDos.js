const express = require('express');
const route = express.Router();
// this connects the database connection and queries to the routing folder
const db = require('../../models/db.js')


//db getToDosForDay

// ToDos Widget
route.get('/', (req, res) => {
  db.getToDosForDay(function(err, result) {
    console.log("TODOS RESULTS", result.rows)
    res.render('partials/toDos', { result: result.rows});
})
});

module.exports = route;
