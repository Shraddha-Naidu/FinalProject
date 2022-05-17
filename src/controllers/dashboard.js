const express = require('express');
const route = express.Router();


module.exports = (db) => {
// Dashboard
route.get('/', (req, res) => {
     const date = '01-01-2022'
     const user_id = 1

     const getClientsByUserId = 'SELECT * FROM clients WHERE user_id = $1';
     const getToDosForDay = 'SELECT * FROM todos JOIN clients ON client.id = todos.client_id WHERE date = $1 AND todos.user_id = $2'
     db.query(getClientsByUserId, [user_id])
     .then((result) => {
          db.query(getToDosForDay, [date, user_id])
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

