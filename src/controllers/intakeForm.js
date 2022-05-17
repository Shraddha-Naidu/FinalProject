const express = require('express');
const route = express.Router();


module.exports = (db) => {
   // Intake Form
   route.get('/', (req, res) => {
      res.render("intakeForm")
   });
   return route;
   };
