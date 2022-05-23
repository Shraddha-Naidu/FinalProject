const express = require('express');
const route = express.Router();


module.exports = (db) => {
  
   route.get('/:id', (req, res) => {
    console.log("RESOURCESFORCLIENT ID", req.params.id)
    
    res.render("resourcesForClient")

   });
   return route;
   };
