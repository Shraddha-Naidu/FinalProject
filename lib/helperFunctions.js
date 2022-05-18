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

  //// ADD NEW CLIENT INTO DB ////
  const addNewClient = () => {
    return pool

  }

  //// ADD FLAG TO FILE AND CHANGE BOOLEAN IN DB ////
  const addFlag = () => {
    return pool
  }

  //// CHECKS FOR INACTIVE CLIENTS FOR RE-INTAKE AND CHANGES BOOLEAN IN DB ////
  const isActive = () => {

  }

  //// ADD NEW RESOURCE INTO DB////
  const addNewResource = (name) => {

  }


  return { validateUser, addNewClient }
}




