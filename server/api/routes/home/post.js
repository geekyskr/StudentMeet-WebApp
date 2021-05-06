const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../../connection');

router.get('/', (req, res, next)=>{
    res.send("post route");
})

router.post('/', (req, res, next)=>{
    const title = req.body.title;
    const description = req.body.description;
    const post = req.body.post;
    const tag = req.body.tag;
    const username = req.body.username;

    const query = "insert into posts (postcreator, postname, postdescription, post, tag) values(?, ?, ?, ?, ?)";
    mysqlConnection.query(query, [username, title, description, post, tag], (err, result)=>{
        if(!err)console.log(result);
    })
})

module.exports = router;
/*First Post This is Description */