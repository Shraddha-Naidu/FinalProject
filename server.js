const express = require('express');
const path = require('path');
// middleware that extracts the entire body 
// portion of an incoming request stream and 
// exposes it on req.body
const bodyParser = require('body-parser');

// creates a session for authorization
const session = require('express-session');

const route = require('./src/routes');

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(session({
	secret: 'your secret key',
	resave: true,
	saveUninitialized: true
}));
app.use(route);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.listen(8000, () => {
  console.log('Access through http://localhost:8000');
  console.log('Server running...');
});


