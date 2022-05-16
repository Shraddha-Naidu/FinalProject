const express = require('express');
const route = express.Router();


module.exports = (db) => {
// Change Day Handler - need to refactor
route.post('/', (req, res) => {
    const id = req.body.date;
     const date = req.body.date
     let [yyyy, mm, dd] = date.split("-");
     let revdate = `${dd}-${mm}-${yyyy}`;
     const searchParams = req.query.name;
     // 02-01-2022
     const socialworker_id = 1
     console.log("REQ DATE", req.body.date)
     console.log("REVDATE", revdate)
     const getClientsBySocialWorkerId = 'SELECT * FROM applicants WHERE socialworker_id = $1';
     const getToDosForDay = 'SELECT * FROM todos JOIN applicants ON applicants.id = todos.applicant_id WHERE date = $1 AND todos.socialworker_id = $2'
     db.query(getClientsBySocialWorkerId, [socialworker_id]) 
     .then((result) => {
       console.log("RESULT", result.rows)
          db.query(getToDosForDay, [revdate, socialworker_id])
          .then((result1) => {
               if (result1.rows.length === 0) {
                 console.log("NO TODOS IN DATABASE")
                    res.redirect("/")
               } else {
               console.log("RESULT1", result1.rows)
               res.render("dashboard", { result: result, result1: result1})
               }
          })
          .catch((e) => {
               console.error(e);
               res.send(e);
             })
          })
});

return route;
};