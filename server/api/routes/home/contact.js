const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/', (req, res, next)=>{
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const transporter = nodemailer.createTransport({
    	service: 'gmail',
    	auth: {
    		user: 'sunilrk.one@gmail.com',
    		pass: process.env.gmailPassword,
    		
    	}
    })
    
    const mailOptions = {
    	from: email,
    	to: 'sunilrk.one@gmail.com',
    	subject: `${subject} || ${name} || ${email}`,
    	text: message
    }
    
    transporter.sendMail(mailOptions, (err, info)=>{
    	if(err) console.log(err)
    	else console.log(info);
    })
    

})

module.exports = router;
