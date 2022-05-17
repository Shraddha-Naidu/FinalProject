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
require("dotenv").config();

const dbParams = {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
};

const db = new Pool(dbParams)
db.connect();


// app routes defined
const dashboard = require('./src/controllers/dashboard');
const clientFile = require('./src/controllers/clientFile');
const intakeForm = require('./src/controllers/intakeForm');
const day = require('./src/controllers/day');


// app routes used
app.use('/', dashboard(db));
app.use('/day', day(db));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.listen(8000, () => {
	console.log('Access through http://localhost:8000');
	console.log('Server running...');
});


