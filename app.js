const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose')
const Promise = require("bluebird");
var morgan       = require('morgan');
const config = require('./config/database');

	mongoose.Promise = require('bluebird');

mongoose.connect(config.database, {useMongoClient: true});

mongoose.connection.on('connected', ()=>{
	console.log('connected to database '+ config.database);
});

mongoose.connection.on('Error', (err)=>{
	console.log('failed to database '+err);
});

const app = express();

const users = require('./routes/users');

// Port Number
const port = 3000;

// Cors Middleware
app.use(cors());

app.use(express.static(path.join(__dirname,'public')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(morgan('dev')); // log every request to the console
//passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


 app.use('/',users);
// require('./routes/users')(app);

//Index Route
app.get('/',(req,res)=>
{
	res.send('Invalid Endpoint');
});

//Server Start
 app.listen(port,() =>
 {
 	console.log('Server runnig on port '+port);
 });
