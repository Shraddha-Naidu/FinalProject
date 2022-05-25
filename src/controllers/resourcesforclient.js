const express = require('express');
const route = express.Router();


module.exports = (db) => {
  getAllResources = 'SELECT * FROM provided_resources JOIN resource_providers ON resource_providers.id = resource_id ORDER BY provider ASC'
  const client_id = 1
  route.get('/', (req, res) => {
    //  db.query(getAllResourcesforClient)
    //  .then((result) => {
    res.render("resourcesforclient")
    //  })
    //  .catch((e) => {
    //          console.error(e);
    //          res.send(e);
    //        })
  });
  return route;
};
