const express = require('express');
const route = express.Router();

module.exports = (db) => {
  // ClientFile Page
  route.get('/:id', (req, res) => {
    const client_id = req.params.id

    const getClientData = `SELECT *, users.name as user_name, resources.*, flags.* as user_flag, updates.* as update FROM users 
    JOIN clients ON user_id=users.id  LEFT JOIN resources ON resources.id = resource_provided 
    LEFT JOIN flags ON client_id = clients.id 
    LEFT JOIN updates ON clients.id =updates.client_id

    WHERE clients.id = $1 
    GROUP BY users.name, clients.id, users.id, resources.id, flags.id, updates.id
    ORDER BY updates.id DESC;`;

    const getResources = 'SELECT * FROM resources WHERE resources.client_id = $1';
    const getFlagsByClientId = 'SELECT * FROM flags WHERE client_id = $1'
    const getCommentsByClientId = 'SELECT * FROM updates WHERE client_id = $1'

    db.query(getClientData, [client_id])
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



