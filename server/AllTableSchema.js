const mysqlConnection = require('./connection');

const studentTable = "CREATE TABLE Students (
    UserName varchar(50) primary key,
    Name varchar(100) not null,
    EMail varchar(100) not null,
    PhoneNumber char(10) default null,
    PhotoID blob default null,
    Photo blob default null,
    Password varchar(20) not null,
)";

ALTER TABLE Students
ADD Branch integer;

ALTER TABLE Students
ADD FOREIGN KEY (Branch) REFERENCES Branch(BranchId);

mysql> INSERT INTO `users` (`email`, `pswd`) VALUES ('user6@example.com', AES_ENCRYPT('pass123', 'secret'));
mysql> SELECT AES_DECRYPT(`pswd`, 'secret') AS `pswd` FROM `users` WHERE `email` = 'user6@example.com';


mysqlConnection.query(studentTable, (err, result)=>{
  if(err){
    console.log("Table creation failed");
  }
  else{
    console.log("Table created successfully");
  }
});
