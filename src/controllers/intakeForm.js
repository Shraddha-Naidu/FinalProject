const express = require('express');
const route = express.Router();

const addNewClient = 'INSERT INTO clients (user_id, name, age, email, phone, isHoused, address, known_locations, dependants, dependents_list, citizenship, applied_at) VALUES ($1,$2,$3,$4,$5,$6,$8,$9,$10,$11) RETURNING *;'
   

module.exports = (db) => {
   // Blank Intake Form
   route.get('/', (req, res) => {
      res.render("intakeForm")
   });

   //Filled Intake Form to send Data
  route.post('/', (req, res) => {
     const user_id = req.body.id
      db.query(addNewClient, [user_id, name, age, email, phone, isHoused, address, known_locations, dependants, dependents_list, citizenship, applied_at])
      .then ((clientData) => {
         res.send(clientData)
      })
      .catch((err) => {
         console.log(err.message)
       })
   });
   return route;
 };


 //QUERY CHANGE TO ADD RESOURCES//
/*
WITH ins AS (
  INSERT INTO clients
  (user_id, name, age, email, phone, isHoused, address, known_locations, dependants, dependents_list, citizenship, applied_at)
VALUES
  ($1,$2,$3,$4,$5,$6,$8,$9,$10,$11)
RETURNING id),
ins2 AS (
INSERT INTO resources
  (client_id, resources_requested)
VALUES
  ($1,$2)
)
 */