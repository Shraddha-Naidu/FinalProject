const express = require('express');
const route = express.Router();


module.exports = (db) => {
  getAllResources = 'SELECT * FROM provided_resources JOIN resource_providers ON resource_providers.id = resource_id ORDER BY provider ASC'

  route.get('/', (req, res) => {
    db.query(getAllResources)
      .then((result) => {
        res.render("resources", { result })
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      })
  });
  return route;
};
