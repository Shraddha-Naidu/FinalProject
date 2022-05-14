const express = require('express');
const route = express.Router();
const db = require('./db.js')

route.get('/', (req, res) => {
  res.render('index');
});

route.get('/users', db.getUsers)

// this is a comment for the username config testing branch
module.exports = route;
