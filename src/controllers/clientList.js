const express = require('express');
const route = express.Router();

module.exports = (db) => {
  // ClientFile Page
  route.get('/', (req, res) => {

    const getAllClients = 'SELECT * FROM clients';

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



