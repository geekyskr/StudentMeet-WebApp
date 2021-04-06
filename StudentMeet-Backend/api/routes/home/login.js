const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../../connection');

// get request on home/login
router.get('/', (req, res, next)=>{
  res.send("Login Page get");
})


// post request on home/login
router.post('/', (req, res, next)=>{
  res.send("Login Page post");
})

module.exports = router;
