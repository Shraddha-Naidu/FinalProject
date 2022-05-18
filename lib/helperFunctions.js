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

  return { validateUser }
}




