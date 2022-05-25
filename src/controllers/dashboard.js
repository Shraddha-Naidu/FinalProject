const express = require('express');
const route = express.Router();


module.exports = (db) => {
     // Dashboard
     route.get('/', (req, res) => {
          const user_id = 1
          const getClientsByUserId = 'SELECT * FROM clients WHERE user_id = $1';
          db.query(getClientsByUserId, [user_id])
               .then((result) => {
                    const getToDos = 'SELECT todos.id AS todoId, todos.user_id, todos.client_id, todos.item, todos.date, todos.time, todos.completed, clients.name  FROM todos JOIN clients ON todos.client_id = clients.id WHERE todos.user_id = $1 ORDER BY date ASC;'
                    db.query(getToDos, [user_id])
                    .then((result1) => {
                         res.render("dashboard", { result: result, result1: result1 })
                    })
                    .catch((e) => {
                         console.error(e);
                         res.send(e);
                    })

               })
          
     });

     return route;
};

