var express = require('express');
var route = express.Router();
var bodyParser = require('body-parser');
const db = require('../models/db')

// test
route.get('/', function (req, res) {
  db.getUsers(function (err, result) {
    res.status(200).json(result.rows)
  });
});

module.exports = route;