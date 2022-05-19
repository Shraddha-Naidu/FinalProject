const express = require('express');
const route = express.Router();


module.exports = (db) => {
   //EMAIL PAGE
   route.get('/', (req, res) => {
      res.render("mail")
   });
   return route;
   };