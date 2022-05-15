const express = require('express');
const route = express.Router();
// this connects the database connection and queries to the routing folder
const db = require('../models/db')

// db.getClientById, db.getResources, db.getFlagsbyClientId, db.getCommentsByClientId

route.get('/', (req, res) => {
  res.render('clientFile');
});



module.exports = route;
