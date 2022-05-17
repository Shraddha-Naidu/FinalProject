const express = require('express');
const route = express.Router();


module.exports = (db) => {
// Dashboard
route.get('/', (req, res) => {
     const date = '01-01-2022'
     const socialworker_id = 1

     const getClientsBySocialWorkerId = 'SELECT * FROM applicants WHERE socialworker_id = $1';
     const getToDosForDay = 'SELECT * FROM todos JOIN applicants ON applicants.id = todos.applicant_id WHERE date = $1 AND todos.socialworker_id = $2'
     db.query(getClientsBySocialWorkerId, [socialworker_id])
     .then((result) => {
          db.query(getToDosForDay, [date, socialworker_id])
          .then((result1) => {
               res.render("dashboard", { result: result, result1: result1})
          })
          .catch((e) => {
               console.error(e);
               res.send(e);
             })
     })
});

return route;
};

