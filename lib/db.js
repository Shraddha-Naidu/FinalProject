// this connects the local database and is jumping off point for queries
const Pool = require('pg').Pool

const dbParams = {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
};
const pool = new Pool(dbParams)

// example query for test purposes
const getUsers = (request, response) => {
	return pool
		.query('SELECT * FROM users ORDER BY id ASC').then((error, results) => {
			console.log('RESULTS', results)
			if (error) {
				throw error
			}
			response.status(200).json(results.rows)
		})
}

// Login queries
const loginQuery = (request, response) => {
	// Capture the input fields
	let name = request.body.name;
	let password = request.body.password;
	console.log("REQUEST BODY", request.body)
	// Ensure the input fields exists and are not empty
	if (name && password) {
		return pool
			// Execute SQL query that'll select the account from the database based on the specified username and password
			.query('SELECT * FROM users WHERE name = $1 AND password = $2', [name, password]).then((error, results) => {
				// If the account exists
				if (results) {
					// Authenticate the social worker
					// Create session variables
					request.session.loggedin = true;
					request.session.name = name;
					// Redirect to home page
					response.redirect('/dashboard');
				} else {
					response.send('Incorrect Username and/or Password!');
				}
				response.end();
			});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
}

const destroySession = (request, response) => {
	// Destroy session data
	request.session.destroy();
	// Redirect to login page
	response.redirect('/');
}

module.exports = {
	getUsers,
	loginQuery,
	destroySession
}