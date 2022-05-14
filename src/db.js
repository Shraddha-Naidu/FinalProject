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
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM social-workers WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
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

const verifyLogin = (request, response) => {
	// // If the user is loggedin
	// if (//request.session.loggedin) {
	// 	// Output username
	// 	response.send('Welcome back, ' + request.session.username + '!');
  //   // Render homepage
  //   response.render('dashboard.ejs', { username: request.session.username });
	// } else {
	// 	// Not logged in
	// 	response.send('Please login to view this page!');
  //   // Redirect to login page
	// 	response.redirect('/');
	// }
	// response.end();
  response.render('dashboard.ejs');
}

const destroySession = (request, response) => {
	// Destroy session data
	request.session.destroy();
	// Redirect to login page
	response.redirect('/');
}

// Client queries
const getClientsBySocialWorker = (request, response) => {
  const socialWorkerId = parseInt(request.params.socialWorkerId)

  pool.query('SELECT * FROM clients WHERE socialWorkerId = $1', [socialWorkerId], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getClientById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM clients WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createClient = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO clients (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Client added with ID: ${result.insertId}`)
  })
}

const updateClient = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE clients SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Client modified with ID: ${id}`)
    }
  )
}

const deleteClient = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM clients WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Client deleted with ID: ${id}`)
  })
}

// Resources Queries
const getResources = (request, response) => {
  pool.query('SELECT * FROM resources ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getResourcesById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM resources WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// Flags Queries
const getFlagsByClientId = (request, response) => {
  const clientId = parseInt(request.params.clientId)

  pool.query('SELECT * FROM flags WHERE clientId = $1', [clientId], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createFlag = (request, response) => {
  const { clientId, comment } = request.body

  pool.query('INSERT INTO flags (clientId, comment) VALUES ($1, $2)', [clientId, comment], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`FLag added with ID: ${result.insertId}`)
  })
}

const deleteFlag = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM flags WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Flag deleted with ID: ${id}`)
  })
}

// To-Do Queries
const getToDosByDay = (request, response) => {
  const day = parseInt(request.params.day)

  pool.query('SELECT * FROM to-dos WHERE day = $1', [day], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createToDo = (request, response) => {
  const { day, comment } = request.body

  pool.query('INSERT INTO to-dos (day, comment) VALUES ($1, $2)', [day, comment], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`To-do added with ID: ${result.insertId}`)
  })
}

const deleteToDo = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM to-dos WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`To-do deleted with ID: ${id}`)
  })
}

// Client File Comments Queries
const getCommentsByClientId = (request, response) => {
  const clientId = parseInt(request.params.clientId)

  pool.query('SELECT * FROM comments WHERE clientId = $1', [clientId], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createComment = (request, response) => {
  const { clientId, comment } = request.body

  pool.query('INSERT INTO comments (clientId, comment) VALUES ($1, $2)', [clientId, comment], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Comment added with ID: ${result.insertId}`)
  })
}

const deleteComment = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM comments WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Comment deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  loginQuery,
  verifyLogin,
  destroySession,
  getClientsBySocialWorker,
  getClientById,
  createClient,
  deleteClient,
  updateClient,
  getResources,
  getResourcesById,
  getFlagsByClientId,
  createFlag,
  deleteFlag,
  getToDosByDay,
  createToDo,
  deleteToDo,
  getCommentsByClientId,
  createComment,
  deleteComment
}