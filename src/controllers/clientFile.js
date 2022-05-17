const express = require('express');
const route = express.Router();

module.exports = (db) => {
// ClientFile Page
route.get('/:id', (req, res) => {
  const applicant_id = 1

  const getClientById = 'SELECT * FROM applicants WHERE id = $1';
  const getResources = 'SELECT * FROM resources';
  const getFlagsByClientId = 'SELECT * FROM flags WHERE applicant_id = $1'
  const getCommentsByClientId = 'SELECT * FROM comments WHERE applicant_id = $1'

  db.query(getClientById, [applicant_id]) 
  .then((result) => {
            res.render("clientFile", { result: result})
       })
       .catch((e) => {
            console.error(e);
            res.send(e);
          })
});

return route;
};



