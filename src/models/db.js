// this connects the local database and is jumping off point for queries
const Pool = require('pg').Pool
require("dotenv").config();

/* const dbParams = {
	host: 'localhost',
	port: 5432,
	user: 'me',
	password: 'password',
	database: 'api'
}; */


const dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  };


const pool = new Pool(dbParams)

// test 
module.exports.getUsers = function (callback){
	pool.query('SELECT * FROM social_workers ORDER BY id ASC', callback);
}

module.exports.getClientsBySocialWorkerId = function (callback){
  const socialworker_id = 1;
	pool.query('SELECT * FROM applicants WHERE socialworker_id = $1', [socialworker_id], callback);
}

module.exports.getToDosForDay = function (callback){
  const date = '01-01-2022'
	const socialworker_id = 1
	pool.query('SELECT * FROM todos JOIN applicants ON applicants.id = todos.applicant_id WHERE date = $1 AND todos.socialworker_id = $2', [date, socialworker_id], callback);
}




