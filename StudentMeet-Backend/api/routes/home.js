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

// get request on home/university/feed
router.get('/:universityId/feed', (req, res, next)=>{
  const postPageInformation = {}

  function PostFunc(){
    return new Promise((resolve, reject)=>{
      const university = req.params.universityId
      const postQuery = "select * from Posts where userName in(select UserName from Students where University = ?);"
      mysqlConnection.query(postQuery, [university], (err, result, fields)=>{
         if(!err)resolve(result)
      })
    })
  }
  async function main(){
    postPageInformation['PostDetails'] = await PostFunc()
    res.send(postPageInformation);
  }
  main()
})

// get request on home/in/user
router.get('/in/:userName', (req, res, next)=>{
  const userPageInformation = {}

  function UserFunc(){
    return new Promise((resolve, reject)=>{
      const user = req.params.universityId
      const userQuery = "select * from Students where UserName = ?;"
      mysqlConnection.query(userQuery, [user], (err, result, fields)=>{
         if(!err)resolve(result)
      })
    })
  }
  async function main(){
    userPageInformation['UserDetails'] = await UserFunc()
    res.send(userPageInformation);
  }
  main()
})



module.exports = router;
