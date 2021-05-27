import React, {useState} from 'react';
import Axios from 'axios';
import './Register.css'
import {useHistory} from 'react-router-dom';

function Register(){


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [college, setCollege] = useState("");
  const [number, setNumber] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const register = ()=>{
    Axios.post('http://localhost:8080/register', {name: name, email:email, password: password,
    college: college, number: number}).then((responce)=>{
      const message = responce.data;
      if(message.existingUser === true)setErrorMessage("You are existing user. Please logIn")
      else if(message.existingUniversity === false)setErrorMessage("Please contact us for college registration")
      else history.push('/login');
    })
  }


  function check(){
			var name=document.getElementById('name').value;
			var pass=document.getElementById('pass').value;
			var cpass=document.getElementById('cpass').value;
			var cnub=document.getElementById('cnub').value;

			if(name==="")alert("Please Enter your Name");
			else if(name.length<=2)alert("Name should be at least 3 character");
			else if(!isNaN(name))alert("please enter valid Name");
			else if(pass==="")alert("Please Enter  password");
			else if(pass.length<=8)alert("Password should be at least 8 character");
			else if(pass==="")alert("Please Enter  confirm password");
			else if(pass.length<=8)alert("Password should be at least 8 character");
			else if(pass!==cpass)alert("Password and confirm password should be same");
			else if(cnub.length<=9)alert("Contact Number should be  10 digit");
			else if(isNaN(cnub))alert("please enter valid Contact Number");
      else register();
		}

    return(
      <div className="Register">
        <h1>Registration</h1>
        <div className="RegisterForm">
          <input id="name" type="text" class="inputbox" placeholder="Name" onChange={(event)=>{
          setName(event.target.value);
        }}></input>
          <input id="email" type="text" class="inputbox" placeholder="Email-Id" onChange={(event)=>{
          setEmail(event.target.value);
        }}></input>
          <input id="pass" type="password" class="inputbox" placeholder="Password" onChange={(event)=>{
          setPassword(event.target.value);
        }}></input>
          <input id="cpass" type="password" class="inputbox" placeholder=" Confirm Password"></input>
          <input id="cname" type="text" class="inputbox" placeholder="College Name" onChange={(event)=>{
          setCollege(event.target.value);
        }}></input>
          <input id="cnub" type="text" class="inputbox" placeholder="Contact Number" onChange={(event)=>{
          setNumber(event.target.value);
        }}></input>
          <button type="submit" onClick={check} >Register</button>
          <p style = {{color: "red"}}>{errorMessage}</p>
        </div>
      </div>
    )
}

export default Register;
