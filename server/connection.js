const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'sunil',
  password: 'password',
  database: 'StudentMeet',
  multipleStatements: true
});
mysqlConnection.connect((err)=>{
  if(err){
    console.error("error occur while connecting "+err);
    return;
  }
  console.log("connection established");
});

module.exports = mysqlConnection;
