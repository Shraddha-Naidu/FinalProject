const express = require('express');
const route = express.Router();


module.exports = (db) => {
   // Intake Form
   route.get('/', (req, res) => {
      es.render("intakeForm")
   });
   return route;
   };
