const express = require('express');
const route = express.Router();
// this connects the database connection and queries to the routing folder
const db = require('./db.js')

route.get('/', (req, res) => {
  res.render('index');
});

route.get('/users', db.getUsers)

module.exports = route;
