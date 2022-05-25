const express = require('express');
const route = express.Router();

module.exports = (db) => {
  // ClientFile Page
  route.get('/', (req, res) => {

    const getAllClients = 'SELECT clients.*, users.name as user_name, clients.name as client_name FROM clients JOIN users ON users.id=clients.user_id';

    db.query(getAllClients)
      .then((result) => {
        res.render("clientList", { result: result })
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      })
  });

  return route;
};



