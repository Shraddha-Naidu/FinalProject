// this connects the local database and is jumping off point for queries
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

// test 
module.exports.getUsers = function (callback){
	pool.query('SELECT * FROM users', callback);
}



