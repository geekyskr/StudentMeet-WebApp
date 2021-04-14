const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../../connection');


// get request on home/register
router.get('/', (req, res, next)=>{

  const registerPageInformation = {}

  function UniversityNameFunc(){
    return new Promise((resolve, reject)=>{
      const UniversityNameQuery = "select universityname from university";
      mysqlConnection.query(UniversityNameQuery, (err, result, fields)=>{
         if(!err)resolve(result)
      })
    })
  }

  async function main(){
    registerPageInformation['UniversityNames'] = await UniversityNameFunc()
    res.send(registerPageInformation);
  }
  main()

})


// post request on home/register
router.post('/', (req, res, next)=>{
  res.send("post request on register.");
})


module.exports = router;
