var express = require('express');
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var cors = require('cors');

var app = express();
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');
mongoose.connect(configDB.url, { useMongoClient: true }); // connect to database

require('./config/passport')(passport); // pass passport for configuration
// set up our express application
app.use(cors());
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash()); // use connect-flash for flash messages stored in session
app.set('view engine', 'ejs'); // set up ejs for templating

//passport session
app.use(session({
    secret: 'secretkey', // session secret
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport



app.listen(port);
console.log('server running at port ' + port);