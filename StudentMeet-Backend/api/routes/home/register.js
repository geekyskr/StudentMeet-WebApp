const express = require('express');
const router = express.Router();


router.get('/', (req, res, next)=>{
  res.send("Register Page get");
})

router.post('/', (req, res, next)=>{
  res.send("Register Page post");
})


module.exports = router;
