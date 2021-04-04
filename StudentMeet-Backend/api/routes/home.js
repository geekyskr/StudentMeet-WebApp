const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
  res.send("Home Page get");
})

router.get('/:universityId', (req, res, next)=>{
  res.send("GET for university having id "+req.params.universityId);
})

router.get('/:universityId/feed', (req, res, next)=>{
  res.send("GET for feed of university having id "+req.params.universityId);
})

router.get('/:userName', (req, res, next)=>{
  res.send("GET for student having username "+req.params.userName);
})

module.exports = router;
