const express = require('express');
const route = express.Router();


module.exports = (db) => {
     // Dashboard
     route.get('/', (req, res) => {
          const user_id = 1

          const getClientsByUserId = 'SELECT * FROM clients WHERE user_id = $1';
          const getToDos = 'SELECT todos.id, todos.user_id, todos.client_id, todos.item, todos.date, todos.time, todos.completed  FROM todos JOIN clients ON clients.id = todos.client_id WHERE todos.user_id = $1'
          db.query(getClientsByUserId, [user_id])
               .then((result) => {
                    db.query(getToDos, [user_id])
                         .then((result1) => {
                              console.log("RESULT1 ROWS RESULTS", result1.rows)

                              res.render("dashboard", { result: result, result1: result1 })
                         })
                         .catch((e) => {
                              console.error(e);
                              res.send(e);
                         })
               })
     });

     route.post('/', (req, res) => {
          const id = req.body.date;
          const date = req.body.date
          let [yyyy, mm, dd] = date.split("-");
          let revdate = `${dd}-${mm}-${yyyy}`;
          const searchParams = req.query.name;
          // 02-01-2022
          const user_id = 1
          console.log("REQ DATE", req.body.date)
          console.log("REVDATE", revdate)
          const getClientsBySocialWorkerId = 'SELECT * FROM clients WHERE user_id = $1';
          const getToDos = 'SELECT * FROM todos JOIN clients ON clients.id = todos.client_id WHERE date = $1 AND todos.user_id = $2'
          db.query(getClientsBySocialWorkerId, [user_id])
               .then((result) => {
                    console.log("RESULT", result.rows)
                    db.query(getToDos, [user_id])
                         .then((result1) => {
                              if (result1.rows.length === 0) {
                                   console.log("NO TODOS IN DATABASE")
                                   res.redirect("/")
                              } else {
                                   console.log("RESULT1", result1.rows)
                                   res.redirect(`/`, { result: result, result1: result1 })
                              }
                         })
                         .catch((e) => {
                              console.error(e);
                              res.send(e);
                         })
               })
     });


     return route;
};

