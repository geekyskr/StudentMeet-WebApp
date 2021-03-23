const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sunil',
  password: 'MysqL@3007',
  database: 'StudentMeetDB'
})
connection.connect((err)=>{
  if(err){
    console.error("error occur while connecting "+err);
    return;
  }
  console.log("connection established");
});
