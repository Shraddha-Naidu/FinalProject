const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// ... Your routes and methods here


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// creates a session for authorization
const session = require('express-session');

// this connects the local database and is jumping off point for queries
const Pool = require('pg').Pool

const dbParams = {
	host: 'localhost',
	port: 5432,
	user: 'me',
	password: 'password',
	database: 'api'
};

const db = new Pool(dbParams)
db.connect();


// app routes defined
const dashboard = require('./src/controllers/dashboard');
const clientFile = require('./src/controllers/clientFile');
const intakeForm = require('./src/controllers/intakeForm');




// app routes used
app.use ('/', dashboard(db));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.listen(8000, () => {
  console.log('Access through http://localhost:8000');
  console.log('Server running...');
});


