const express = require('express');
const route = express.Router();


module.exports = (db) => {

  route.get("/", function(req, res) {
    user_id = 1;
    const getToDos = 'SELECT todos.id AS todoId, todos.user_id, todos.client_id, todos.item, todos.date, todos.time, todos.completed, clients.name  FROM todos JOIN clients ON todos.client_id = clients.id WHERE todos.user_id = $1;'
    db.query(getToDos, [user_id])
      .then((result) => {
        console.log("GET TODOS REQUEST RESULT", result.rows)
        res.send(result.rows);
        })
        .catch((e) => {
        console.error(e);
        res.send(e);
      })

  });

  route.post('/', (req, res) => {
    console.log('REQUEST BODY', req.body)
    const { toDo, client, date, time } = req.body
    
    const user_id = 1
    const completed = false
  
    const findClientIdByName = 'SELECT id FROM clients WHERE name = $1'
    
    db.query(findClientIdByName, [client])
    .then((result) => {
      console.log("FINDCLIENTIDBYNAME RESULTS", result.rows[0].id)
      const client_id = result.rows[0].id
      const addToDo = 'INSERT INTO todos (user_id, client_id, item, date, time, completed) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;'
      db.query(addToDo, [user_id, client_id, toDo, date, time, completed])
      .then((result) => {
        res.status(201).send();
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
    })
  })

  route.post('/completed', (req, res) => {
    const id = req.body.id
    const updateToDoStatus = 'UPDATE todos SET completed = true WHERE id = $1 RETURNING *;'
      db.query(updateToDoStatus, [id])
      .then((result) => {
        res.status(201).send();
      })
  });


  route.post('/delete', (req, res) => {
    console.log('REQUEST BODY', req.body.id)
    const id = req.body.id
    const deleteToDo = 'DELETE FROM todos WHERE id = $1 RETURNING *;'
    db.query(deleteToDo, [id])
    .then((result) => {
    res.status(201).send();
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });

  });



  return route;
  };