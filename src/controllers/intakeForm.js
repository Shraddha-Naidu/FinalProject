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
     const user_id = 1;
      db.query(addNewClient, [user_id, name, age, email, phone, isHoused, address, known_locations, citizenship, applied_at])
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
//Comments below are just basics to create a form that will send data to separate tables from one form.
/*
WITH ins AS (
  (INSERT INTO clients
  (user_id, name, age, email, phone, isHoused, address, known_locations, dependants, dependents_list, citizenship, applied_at)
VALUES)
  ($1,$2,$3,$4,$5,$6,$8,$9,$10,$11)
RETURNING id),
ins2 AS (
INSERT INTO resources
  (client_id, resources_requested)
VALUES
  ($1,$2)
)
 */

/*
Insert query in three steps, return id instead of star
.the for id return the passed to promise all for other two queries

.then of query/return id in promise all

call another query with both queries and reference id

create a function that saves result, using async await
const id = db query without

response would be a success
*/