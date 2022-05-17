const express = require('express');
const route = express.Router();

//Create route for new client to blank form
//Create route to existing client filled form that can be edited and updated in db
//On intake user should be asked whether its a new client or existing


module.exports = (db) => {
   // Intake Form
   route.get('/', (req, res) => {
      res.render("intakeForm")
   });
   return route;
   };
