const express = require('express');
const route = express.Router();
// this connects the database connection and queries to the routing folder
const db = require('./db.js')

// example route for test purposes using db querying
route.get('/users', db.getUsers)

// Landing page
route.get('/', (req, res) => {
  res.render('index');
});

// Login/Logout Routes
// authenticates user
route.post('/', db.loginQuery)
// verifies that the user is logged in
route.get('/dashboard', db.verifyLogin)
//logout
route.get('/logout', db.destroySession)


// Client Routes
route.get('/clients/socialworker/:socialworkerid', db.getClientsBySocialWorker)
route.get('/clients/:id', db.getClientById)
route.post('clients', db.createClient)
route.put('/clients/:id', db.updateClient)

// Resources Routes
route.get('/resources', db.getResources)
route.get('/resources/:id', db.getResourcesById)

// Flags Routes
route.get('/flags/clients/:clientid', db.getFlagsByClientId)
route.post('flags', db.createFlag)
route.delete('/flags/:id', db.deleteFlag)

// To-Dos Routes
route.get('/to-dos/:day', db.getToDosByDay)
route.post('to-dos', db.createToDo)
route.delete('to-dos/:id', db.deleteToDo)

// Client File Comments Routes
route.get('/comments/clients/:clientid', db.getCommentsByClientId)
route.post('comments', db.createComment)
route.delete('comments/:id', db.deleteComment)

module.exports = route;
