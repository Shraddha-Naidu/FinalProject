const express = require('express');
const route = express.Router();


module.exports = (db) => {
  getAllResources = 'SELECT * FROM resources ORDER BY id ASC'

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
