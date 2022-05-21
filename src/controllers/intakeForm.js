const express = require('express');
const route = express.Router();

const addNewClient = 'INSERT INTO clients (user_id, name, age, email, phone, isHoused, address, known_locations, dependants, dependents_list, citizenship, applied_at)'
   

module.exports = (db) => {
   // Blank Intake Form
   route.get('/', (req, res) => {
      res.render("intakeForm")
   });

   //Filled Intake Form to send Data
  route.post('/', (req, res) => {
      db.query(addNewClient)
      .then ((clientData) => {
         res.send(clientData)
      })
      .catch((err) => {
         console.log(err.message)
       })
   });
   return route;
 };
