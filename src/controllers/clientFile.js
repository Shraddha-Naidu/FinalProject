const express = require('express');
const route = express.Router();

module.exports = (db) => {
  route.get('/resources', (req, res) => {
    client_id = 1;
    const getResourcesProvidedByClientId = 'SELECT * FROM clients LEFT JOIN resources ON clients.resource_provided=resources.id WHERE clients.id = $1'
    db.query(getResourcesProvidedByClientId, [client_id])
      .then((result) => {
        res.render("resourcesForClient", { result })
      })

  })
  // ClientFile Page
  route.get('/:id', (req, res) => {
    const client_id = req.params.id
    const getClientData = `SELECT users.id as user_id, users.name as user_name, users.email, users.type, users.password, users.phone, clients.id as client_id, clients.*, provided_resources.id as provided_resources_id, provided_resources.*, flags.id as flags_id, flags.*, updates.id as updates_id, updates.*,resource_providers.id as resource_providers_id, resource_providers.* FROM users
    LEFT JOIN clients ON clients.user_id=users.id  
    LEFT JOIN provided_resources ON provided_resources.client_id = clients.id
    LEFT JOIN resource_providers ON resource_providers.id = provided_resources.resource_id
    LEFT JOIN flags ON flags.client_id = clients.id
    LEFT JOIN updates ON clients.id =updates.client_id

    WHERE clients.id = $1
    GROUP BY clients.id, users.id, provided_resources.id, flags.id, updates.id, resource_providers.id
    ORDER BY updates.id DESC`;


    db.query(getClientData, [client_id])
      .then((result) => {
        let arr = [];
        let newArr = [];
        let updatesArr = [];
        let updatesNewArr = [];
        for (let row of result.rows) {
          if (!newArr.includes(row.resource_providers_id)) {
            newArr.push(row.resource_providers_id)
            arr.push(row)
          }
          if (!updatesArr.includes(row.updates_id)) {
            updatesArr.push(row.updates_id)
            updatesNewArr.push(row)
          }
        }
        res.render("clientFile", { result: arr, updatesNewArr, client_id })
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      })
  });

  route.post('/:id/updates', (req, res) => {
    const { description, date } = req.body
    const client_id = req.params.id

    const addUpdate = 'INSERT INTO updates (client_id, description, date) VALUES ($1, $2, $3)  RETURNING *;'


    db.query(addUpdate, [client_id, description, date])
      .then((result) => {
        res.status(201).send();
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      });

  });


  route.post('/status', (req, res) => {
    const changeStatus = `UPDATE clients SET isactive = NOT isactive WHERE id = $1 RETURNING *;`;
    db.query(changeStatus, [req.body.id])
      .then((status) => {
        return res.json({ status: 'ok' })
      })
  })

  return route;
};



