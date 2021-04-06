const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../../connection');


// get request on home/register
router.get('/', (req, res, next)=>{

  const registerPageInformation = {}

  function UniversityNameFunc(){
    return new Promise((resolve, reject)=>{
      const UniversityNameQuery = "select UniversityName from University";
      mysqlConnection.query(UniversityNameQuery, (err, result, fields)=>{
         if(!err)resolve(result)
      })
    })
  }

  function DegreeNameFunc(){
    return new Promise((resolve, reject)=>{
      const DegreeNameQuery = "select DegreeName from Degree";
      mysqlConnection.query(DegreeNameQuery, (err, result, fields)=>{
        if(!err)resolve(result)
      })
    })
  }

  function BranchNameFunc(){
    return new Promise((resolve, reject)=>{
      const BranchNameQuery = "select BranchName from Branch";
      mysqlConnection.query(BranchNameQuery, (err, result, fields)=>{
         if(!err)resolve(result)
      })
    })
  }

  async function main(){
    registerPageInformation['UniversityNames'] = await UniversityNameFunc()
    registerPageInformation['DegreeNames'] = await DegreeNameFunc()
    registerPageInformation['BranchNames'] = await BranchNameFunc()
    res.send(registerPageInformation);
  }
  main()

})


// post request on home/register
router.post('/', (req, res, next)=>{

  res.send(req.body);
})


module.exports = router;
