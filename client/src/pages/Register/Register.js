import React from 'react';
import Axios from 'axios';
import './Register.css'

function Register(){
  function check(){
			var name=document.getElementById('name').value;
			var pass=document.getElementById('pass').value;
			var cpass=document.getElementById('cpass').value;
			var email=document.getElementById('email').value;
			var cname=document.getElementById('cname').value;
			var bname=document.getElementById('bname').value;
			var cnub=document.getElementById('cnub').value;

			if(name=="")alert("Please Enter your Name");
			else if(name.length<=2)alert("Name should be at least 3 character");
			else if(!isNaN(name))alert("please enter valid Name");
			else if(pass=="")alert("Please Enter  password");
			else if(pass.length<=8)alert("Password should be at least 8 character");
			else if(pass=="")alert("Please Enter  confirm password");
			else if(pass.length<=8)alert("Password should be at least 8 character");
			else if(pass!=cpass)alert("Password and confirm password should be same");
      else if(cname=="")alert("Please Enter your College Name ");
			else if(cname.length<=9)alert("College Name should be at least 10 character");
			else if(!isNaN(cname))alert("please enter valid College Name");
      else if(cnub=="")alert("Please Enter your College Name ");
			else if(cnub.length<=9)alert("Contact Number should be  10 digit");
			else if(isNaN(cnub))alert("please enter valid Contact Number");
		}


    return(
      <div className="Register">
        <h1>Registration</h1>
        <div className="RegisterForm">
          <input id="name" type="text" class="inputbox" placeholder="Name"></input>
          <input id="email" type="text" class="inputbox" placeholder="Email-Id"></input>
          <input id="pass" type="text" class="inputbox" placeholder="Password"></input>
          <input id="cpass" type="text" class="inputbox" placeholder=" Confirm Password"></input>
          <input id="cname" type="text" class="inputbox" placeholder="College Name"></input>
          <input id="cnub" type="text" class="inputbox" placeholder="Contact Number"></input>
          <input type="File" class="inputbox" ></input>
          <button type="submit" onClick={check} >Register</button>
        </div>
      </div>
    )
}

export default Register;
