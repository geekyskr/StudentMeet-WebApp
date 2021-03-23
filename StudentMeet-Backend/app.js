const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const mysqlConnection = require('./connection');

const app = express();
app.use(bodyParser.json());
