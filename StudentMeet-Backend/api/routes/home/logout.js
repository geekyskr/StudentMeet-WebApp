const express = require('express');
const router = express.Router();

//get request on home/logout
router.get('/', (req, res, next)=>{
  res.redirect('../');
})

module.exports = router;
