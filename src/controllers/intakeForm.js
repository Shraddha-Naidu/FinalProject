const express = require('express');
const route = express.Router();

const { addNewClient } = require('lib/helperFunctions.js')(db);

//First page leeads to new client/returning client as
//If new client then to blank form
//Else to client Directory to find returning client(inActive) and click on name to generate dynamically filled form
//
//CREATE for new client
//EDIT Create route to existing client filled form that can be edited and updated in db
//DELETE to turn inActive


module.exports = (db) => {
   // Blank Intake Form
   route.get('/', (req, res) => {
      res.render("intakeForm")
   });

   //Filled Intake Form to send Data
  route.post('/', (req, res) => {
      addNewClient(req.body.name, req.body.age, req.body.email, req.body.phone, req.body.isHoused, req.body.address, req.body.known_locations, req.body.dependants, req.body.dependents_list, req.body.citizenship, req.body.applied_at)
      .then ((clientData) => {
         res.send(clientData)
      })
      .catch((err) => {
         console.log(err.message)
       })
 
   });
   return route;
 };
