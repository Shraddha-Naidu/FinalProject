const express = require('express');
const route = express.Router();
// this connects the database connection and queries to the routing folder
const db = require('./db.js')

// example route for test purposes using db querying
route.get('/users', db.getUsers)

// Landing page
route.get('/', (req, res) => {
  res.render('dashboard');
});

// Login/Logout Routes
// authenticates user
route.post('/', db.loginQuery)
//logout
route.get('/logout', db.destroySession)

module.exports = route;
