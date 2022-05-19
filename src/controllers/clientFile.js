const express = require('express');
const route = express.Router();

module.exports = (db) => {
  route.get('/resources', (req, res) => {
    client_id = 1;
    const getResourcesProvidedByClientId = 'SELECT * FROM clients LEFT JOIN resources ON clients.resource_provided=resources.id WHERE clients.id = $1'
    db.query(getResourcesProvidedByClientId, [client_id])
    .then((result) => {
      res.render("resourcesForClient", { result })
      console.log("RESULTS", result.rows)
    })

  })
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



