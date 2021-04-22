const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../../connection');
const bcrypt = require('bcrypt')

// get request on home/login
router.get('/', (req, res, next)=>{
  res.send("Login Page get");
})


// post request on home/login
router.post('/', (req, res, next)=>{
  const username = req.body.username;
  const password = req.body.password;
  const dbquery = "select * from students where username = ?";
  mysqlConnection.query(dbquery, [username], (err, result)=>{
    console.log(result)
    if(err){
      console.log(err);
    }
    if(result.length > 0){
      if(bcrypt.compare(password, result[0].userpassword)){
        res.json({loggedIn: true, username:username});
      }
      else res.json({loggedIn: false, message: "wrong password"});
    }
    else res.json({loggedIn: false, message: "user does not exist"});
})
})

module.exports = router;
