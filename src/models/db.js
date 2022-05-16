// this connects the local database and is jumping off point for queries
const Pool = require('pg').Pool

const dbParams = {
	host: 'localhost',
	port: 5432,
	user: 'me',
	password: 'password',
	database: 'api'
};

const pool = new Pool(dbParams)

// test 
module.exports.getUsers = function (callback){
	pool.query('SELECT * FROM social_workers ORDER BY id ASC', callback);
}


module.exports.getClientsBySocialWorkerId = function (callback){
  const socialWorkerId = 1;
	pool.query('SELECT * FROM clients WHERE socialWorkerId = $1', [socialWorkerId], callback);
}

module.exports.getToDosForDay = function (callback){
  const day = '2021-08-09 15:00:00'
	pool.query('SELECT * FROM to_dos WHERE day = $1', [day], callback);
}




