const express = require('express');
const route = express.Router();


module.exports = (db) => {
  // Intake Form
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
    console.log("OBJECT KEYS", Object.keys(req.body)[0])
    if (req.params.completed = false) {
      const completed = true
      const toDoId = Object.keys(req.body)[0]
      const updateToDoStatus = 'UPDATE todos SET completed = $1 WHERE id = $2'
      db.query(updateToDoStatus, [completed, toDoId])
      .then((result) => {
        res.redirect("/")
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
   })
  }

  });
  return route;
  };