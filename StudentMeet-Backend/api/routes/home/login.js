const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../../connection');

router.get('/', (req, res, next)=>{
  res.send("Login Page get");
})

router.post('/', (req, res, next)=>{
  res.send("Login Page post");
})

module.exports = router;
