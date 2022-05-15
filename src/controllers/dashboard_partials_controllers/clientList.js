const express = require('express');
const route = express.Router();
// this connects the database connection and queries to the routing folder
const db = require('../../models/db.js')

//db getAllClientsBySocialWorkerId

// Client List Widget
route.get('/', (req, res) => {
  db.getClientsBySocialWorkerId(function (err, result) {
    console.log("CLIENT RESULT", result.rows)
    res.render('partials/clientList', { result: result.rows});
  })
});

module.exports = route;
