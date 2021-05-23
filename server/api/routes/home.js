const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../connection');

// get request on home
router.get('/', (req, res, next)=>{
  res.send("Home Page get");
})


// get request on home/university
router.get('/:universityid', (req, res, next)=>{

  function UniversityFunc(){
    return new Promise((resolve, reject)=>{
      const university = req.params.universityid
      const UniversityNameQuery = "select * from university where Universityid = ?;"
      mysqlConnection.query(UniversityNameQuery, [university], (err, result, fields)=>{
         if(!err)resolve(result)
      })
    })
  }
  async function main(){
    const universityPageInformation = await UniversityFunc()
    res.send(universityPageInformation);
  }
  main()


})

// get request on home/university/feed
router.get('/:universityid/feed', (req, res, next)=>{

  function PostFunc(){
    return new Promise((resolve, reject)=>{
      const university = req.params.universityid
      const postQuery = "select * from posts where postcreator in(select username from students where universityid = ?);"
      mysqlConnection.query(postQuery, [university], (err, result, fields)=>{
         if(!err)resolve(result)
      })
    })
  }
  async function main(){
    const postPageInformation = await PostFunc()
    res.send(postPageInformation);
  }
  main()
})

// get request on home/in/user
router.get('/in/:username', (req, res, next)=>{

  function UserFunc(){
    return new Promise((resolve, reject)=>{
      const user = req.params.username
      const userQuery = "select * from students where username = ?;"
      mysqlConnection.query(userQuery, [user], (err, result, fields)=>{
         if(!err)resolve(result)
      })
    })
  }
  async function main(){
    const userPageInformation = await UserFunc()
    res.send(userPageInformation);
  }
  main()
})

router.post('/in/:username/edit', (req, res, next)=>{

    const name = req.body.name;
    const number = req.body.number;
    const user = req.body.username
    console.log(user);
    const userQuery = "update students set studentname = ?, phonenumber = ? where username = ?;"
    mysqlConnection.query(userQuery, [name, number, user], (err, result, fields)=>{
        if(!err)console.log(result);
    })
})

router.delete('/in/:username/', (req, res, next)=>{
    const user = req.params.username;
    console.log(user);
    const userQuery = "delete from  students where username = ?;"
    mysqlConnection.query(userQuery, [user], (err, result, fields)=>{
        if(!err)console.log(result);
    })
    const postQuery = "delete from  posts where postcreator = ?;"
    mysqlConnection.query(postQuery, [user], (err, result, fields)=>{
        if(!err)console.log(result);
    })
})

module.exports = router;
