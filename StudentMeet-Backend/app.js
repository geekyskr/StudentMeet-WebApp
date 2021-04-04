const express = require('express');
const mysql = require('mysql');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysqlConnection = require('./connection');

const loginRoutes = require('./api/routes/home/login');
const registerRoutes = require('./api/routes/home/register');
const logoutRoutes = require('./api/routes/home/logout');
const homeRoutes = require('./api/routes/home');


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/logout', logoutRoutes);
app.use('/', homeRoutes);




app.use((req, res, next)=>{
	const error = new Error("Not Found");
	error.status = 404;
	next(error);
})

app.use((error, req, res, next)=>{
	res.status(error.status || 500);
	res.json({
		error:{
			message : error.message
		}
	});
});

module.exports = app;
