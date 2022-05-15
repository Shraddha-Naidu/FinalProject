const express = require('express');
const path = require('path');
const app = express();
// middleware that extracts the entire body 
// portion of an incoming request stream and 
// exposes it on req.body
const bodyParser = require('body-parser');

// creates a session for authorization
const session = require('express-session');

// app routes defined
const dashboard = require('./src/controllers/dashboard');
const clientFile = require('./src/controllers/clientFile');
const intakeForm = require('./src/controllers/intakeForm');
// test
var users = require ('./src/controllers/user');
// partials routes defined
const clientList = require('./src/controllers/dashboard_partials_controllers/clientList')
const toDos = require('./src/controllers/dashboard_partials_controllers/toDos')

// app routes used
app.use ('/', dashboard);
app.use ('/clientFile', clientFile);
app.use ('/intakeForm', intakeForm);
// test
app.use('/users', users);
// partials routes used
app.use('/partials/clientList', clientList)
app.use('/partials/toDos', toDos)





app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(session({
	secret: 'your secret key',
	resave: true,
	saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.listen(8000, () => {
  console.log('Access through http://localhost:8000');
  console.log('Server running...');
});


