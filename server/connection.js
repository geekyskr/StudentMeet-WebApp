const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'sunil',
  password: 'MysqL@3007',
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
