const express = require('express');
const route = express.Router();


module.exports = (db) => {
   // Intake Form
   route.get('/', (req, res) => {
      console.log('Heading to intake form...')
      res.render("intakeForm")
   });
   return route;
   };
