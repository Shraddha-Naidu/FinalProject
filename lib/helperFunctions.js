const res = require('express/lib/response')
const { reset } = require('nodemon')
const pool = require('./db')

//retrieve all stories
module.exports = (db) => {

  const validateUser = (username) => {
    return pool
      .query('SELECT * FROM social_workers WHERE username = $1 ', [username])
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




