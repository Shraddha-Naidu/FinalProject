const res = require('express/lib/response')
const { reset } = require('nodemon')
const pool = require('./db')

//retrieve all stories
module.exports = (db) => {

  const validateUser = (name) => {
    return pool
      .query('SELECT * FROM users WHERE name = $1 ', [name])
      .then(data => {
        console.log('data', data)
        return data.rows[0];
      })
      .catch(err => {
        console.log(err.message)
      })

  }


  //// CHECKS FOR INACTIVE CLIENTS FOR RE-INTAKE AND CHANGES BOOLEAN IN DB ////
  const returningClient = (name, isActive) => {
    return pool
            .query('SELECT * FROM clients WHERE name = $1 AND isACTIVE = false', [name])
            .then((client) => {
              return client.rows[0]
            })
            .catch((err) => {
              res.html('Client file does not exist or is still active')
            })
  };




  //// ADD NEW RESOURCE INTO DB////
  const addNewResource = (provider, resource_type, provider_phone, provider_email, provider_address) => {
    return pool
          .query(`INSERT INTO clients (provider, resource_type, provider_phone, provider_email, provider_address) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [provider, resource_type, provider_phone, provider_email, provider_address])
          .then((newResource) => {
            return newResource.rows[0]
          })
          .catch((err) => {
            res.send(500)
            console.log(err.message)
          })

  }


  return { validateUser, returningClient, addNewResource }
}




