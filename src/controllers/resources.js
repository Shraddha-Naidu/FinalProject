const express = require('express');
const route = express.Router();


module.exports = (db) => {
  getAllResources = 'SELECT * FROM resources ORDER BY provider ASC'

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

  route.post('/resources', (req, res) => {
    const { provider, resource_type, provider_phone, provider_email, provider_address } = req.body
    addNewResource = `INSERT INTO clients (provider, resource_type, provider_phone, provider_email, provider_address) VALUES ($1, $2, $3, $4, $5) RETURNING *;`

    db.query(addNewResource, [provider, resource_type, provider_phone, provider_email, provider_address])
    .then((data) => {
      res.status(201).send();
      console.log(data);
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
  })
   return route;
   };
