const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../connection');

// get request on home
router.get('/', (req, res, next)=>{
  res.send("Home Page get");
})


// get request on home/university
router.get('/:universityId', (req, res, next)=>{
  const universityPageInformation = {}

  function UniversityFunc(){
    return new Promise((resolve, reject)=>{
      const university = req.params.universityId
      const UniversityNameQuery = "select * from University where UniversityId = ?;"
      mysqlConnection.query(UniversityNameQuery, [university], (err, result, fields)=>{
         if(!err)resolve(result)
      })
    })
  }
  async function main(){
    universityPageInformation['UniversityDetails'] = await UniversityFunc()
    res.send(universityPageInformation);
  }
  main()


})

router.get('/:universityId/feed', (req, res, next)=>{
  res.send("GET for feed of university having id "+req.params.universityId);
})

router.get('/:userName', (req, res, next)=>{
  res.send("GET for student having username "+req.params.userName);
})



module.exports = router;
