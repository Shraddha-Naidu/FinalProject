// this connects the local database and is jumping off point for queries
const Pool = require('pg').Pool;
require('dotenv').config();

const dbParams = {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
};

const pool = new Pool(dbParams)

// test 
module.exports.getUsers = function (callback) {
	pool.query('SELECT * FROM users ORDER BY id ASC', callback);
}

module.exports.getClientsBySocialWorkerId = function (callback) {
	const user_id = 1;
	pool.query('SELECT * FROM clients WHERE socialworker_id = $1', [user_id], callback);
}

module.exports.getToDosForDay = function (callback) {
	const date = '01-01-2022'
	const user_id = 1
	pool.query('SELECT * FROM todos JOIN clients ON clients.id = todos.client_id WHERE date = $1 AND todos.user_id = $2', [date, user_id], callback);
}




