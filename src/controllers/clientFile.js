const express = require('express');
const route = express.Router();

module.exports = (db) => {
  // ClientFile Page
  route.get('/', (req, res) => {
    const client_id = 1

    const getClientById = 'SELECT * FROM clients WHERE id = $1';
    const getResources = 'SELECT * FROM resources';
    const getFlagsByClientId = 'SELECT * FROM flags WHERE client_id = $1'
    const getCommentsByClientId = 'SELECT * FROM updates WHERE client_id = $1'

    db.query(getClientById, [client_id])
      .then((result) => {
        res.render("clientFile", { result: result })
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      })
  });

  return route;
};



