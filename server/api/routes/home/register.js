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

/*router.post('/', (req, res, next)=>{
  const username = req.body.email;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const college = req.body.college;
  const number = req.body.number;
  console.log(username+name+email+password+college+number)
  function isUserExist(){
    return new Promise((resolve, reject)=>{
      const UniversityQuery = "select universityname from university where universityname = ?";
      mysqlConnection.query(UniversityQuery, [college], (err, result, fields)=>{
        if(!err)resolve(result)
      })
    })
  }
  function isUniversityExist(){

  }

  async function main(){
    universityRes = await UniversityNameFunc()
    res.send(registerPageInformation);
  }
  main()

})*/

// post request on home/register
router.post('/', (req, res, next)=>{
  const username = req.body.email;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const college = req.body.college;
  const number = req.body.number;
  mysqlConnection.query("SELECT username FROM students WHERE username = '"+ username +"'", function(err, usresult, field){
    console.log(usresult.length)
    if(usresult.length > 0){
      res.redirect('/login');
    }
    else {
      //new user logic
      console.log("we are inside")
      mysqlConnection.query("SELECT universityid FROM university WHERE universityname = '"+ college +"'", function(err, unresult, field){
        console.log(unresult.length)
        if(unresult.lenght > 0){
          console.log(unresult[0].universityid)
          const dbquery = "insert into students values(?, ?, ?, ?, ?, ?);"
          mysqlConnection.query(dbquery, [email, name, email, number, password, unresult[0].universityid], (err, result)=>{
            if(err)console.log(err);
            else res.send(result);
          })
        }
      else {
        //new university logic
        console.log("we are deep level")
        const cquery = "insert into university(universityname) values(?);"
        mysqlConnection.query(cquery, [college], (err, result, field)=>{
          console.log(result)
          const dbquery = "insert into students values(?, ?, ?, ?, ?, ?);"
          mysqlConnection.query(dbquery, [email, name, email, number, password, result[0].universityid], (err, result)=>{
            if(err)console.log(err);
            else res.send(result);
          })
          if(err)console.log(err);
        })
      }

      })
    }
    })
  })
module.exports = router;
