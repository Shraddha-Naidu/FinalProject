const express = require('express');
const route = express.Router();

//First page leeads to new client/returning client as
//If new client then to blank form
//Else to client Directory to find returning client(inActive) and click on name to generate dynamically filled form
//
//CREATE for new client
//EDIT Create route to existing client filled form that can be edited and updated in db
//DELETE to turn inActive


module.exports = (db) => {
   // Intake Form
   route.get('/', (req, res) => {
      res.render("intakeForm")
   });
   return route;
   };
