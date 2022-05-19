const express = require('express');
const route = express.Router();


module.exports = (db) => {
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
      const addToDo = 'INSERT INTO todos (user_id, client_id, item, date, time, completed) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *'
      db.query(addToDo, [user_id, client_id, toDo, date, time, completed])
      .then((result1) => {
        console.log("ADDTODORESULTS", result1.rows)
      })
    })
     res.redirect("/")
  });

  route.post('/:completed', (req, res) => {
    console.log('REQUEST PARAMS', req.params.completed)
    console.log('REQ BODY', req.body)
    const toDoId = Object.keys(req.body)[0]
    if (req.params.completed = 'false') {
      const updateToDoStatus = 'UPDATE todos SET completed = true WHERE id = $1 RETURNING *'
      db.query(updateToDoStatus, [toDoId])
      .then((result) => {
        console.log("UPDATERESULTSFALSE", result.rows)
      })
      res.redirect("/")
    }
  });


  route.post('/delete/:id', (req, res) => {
    console.log('REQUEST PARAMS ID', req.params.id)
    const id = req.params.id
    const deleteToDo = 'DELETE FROM todos WHERE id = $1 RETURNING *'
      db.query(deleteToDo, [id])
      .then((result) => {
        console.log("DELETERESULTS", result.rows)
      })
      res.redirect("/")
  });



  return route;
  };