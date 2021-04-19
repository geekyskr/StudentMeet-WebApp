const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../../connection');


// get request on home/register
router.get('/', (req, res, next)=>{

  function UniversityNameFunc(){
    return new Promise((resolve, reject)=>{
      const UniversityNameQuery = "select universityname from university";
      mysqlConnection.query(UniversityNameQuery, (err, result, fields)=>{
        if(!err)resolve(result)
      })
    })
  }

  async function main(){
    const registerPageInformation = await UniversityNameFunc()
    res.send(registerPageInformation);
  }
  main()

})

router.post('/', (req, res, next)=>{
  const username = req.body.email;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const college = req.body.college;
  const number = req.body.number;
  console.log(username+name+email+password+college+number)


  function isUserExist(){
    return new Promise((resolve, reject)=>{
      const UniversityQuery = "select username from students where username = ?";
      mysqlConnection.query(UniversityQuery, [username], (err, result, fields)=>{
        if(!err)resolve(result)
      })
    })
  }
  function isUniversityExist(){
    return new Promise((resolve, reject)=>{
      const UniversityQuery = "select universityname from university where universityname = ?";
      mysqlConnection.query(UniversityQuery, [college], (err, result, fields)=>{
        if(!err)resolve(result)
      })
    })
  }
  function insertUniversity(){
    return new Promise((resolve, reject)=>{
      const cquery = "insert into university(universityname) values(?);"
      mysqlConnection.query(cquery, [college], (err, result, fields)=>{
        if(!err)resolve(result)
      })
    })
  }
  function insertUser(uniid){
    return new Promise((resolve, reject)=>{
      const uquery = "insert into students values(?, ?, ?, ?, ?, ?);"
      mysqlConnection.query(uquery, [email, name, email, number, password, uniid], (err, result, fields)=>{
        if(!err)resolve(result)
      })
    })
  }
  function getUniversityId(){
    return new Promise((resolve, reject)=>{
      const squery = "select universityid from university where universityname=?;"
      mysqlConnection.query(squery, [college], (err, result, fields)=>{
        if(!err)resolve(result)
      })
    })
  }

  async function main(){
    const userExist = await isUserExist()
    console.log(userExist)
    if(userExist.lenght>0){
      console.log("inside 409")
      res.sendStatus(409);
      return
    }
    console.log("new user")
    const universityExist = await isUniversityExist()
    if(universityExist.length==0){
      console.log("new university")
      const newUniversity = await insertUniversity();
    }
    const uniid = await getUniversityId()
    const newUser = await insertUser(uniid)
    console.log("user created")
    res.sendStatus(201)
  }
  main()

})

// post request on home/register
/*router.post('/', (req, res, next)=>{
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
  })*/
module.exports = router;
