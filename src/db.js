// this connects the local database and is jumping off point for queries
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

// example query for test purposes
const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
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
	let username = request.body.username;
	let password = request.body.password;
  console.log("REQUEST BODY", request.body)
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		pool.query('SELECT * FROM social_workers WHERE username = $1 AND password = $2', [username, password], (error, results) => {
			// If the account exists
			if (results) {
				// Authenticate the social worker
        // Create session variables
				request.session.loggedin = true;
				request.session.username = username;
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