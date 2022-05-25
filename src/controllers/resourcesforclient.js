const express = require('express');
const route = express.Router();


module.exports = (db) => {
  
   route.get('/:id', (req, res) => {
    client_id = req.params.id
    const getResourcesForClient = 'SELECT provided_resources.resource_id, provided_resources.client_id, provided_resources.resource_type, provided_resources.provided, resources.id as resource_id, resources.provider as provider_name, resources.provider_phone, resources.provider_email, resources.provider_address, clients.name as client_name  FROM provided_resources LEFT JOIN resources ON provided_resources.resource_id = resources.id LEFT JOIN clients ON provided_resources.client_id = clients.id WHERE client_id = $1'
    db.query(getResourcesForClient, [client_id]) 
    .then((result) => {
      res.render("resourcesForClient", {result})
    })
   });

   return route;
   };
  
