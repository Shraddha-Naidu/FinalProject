const express = require('express');
const route = express.Router();
// this connects the database connection and queries to the routing folder
const db = require('../models/db')

route.get('/', (req, res) => {
   res.render('intakeForm');
});

module.exports = route;
