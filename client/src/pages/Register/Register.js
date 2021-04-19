import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './Register.css'

function Register(){

  /*const [university, setUniversity] = useState(null)
  useEffect(()=>{
    Axios.get(`http://localhost:8080/register`)
      .then(res => {
        setUniversity(res.data)
      })
  }, [])
  console.log(university);*/

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [college, setCollege] = useState("");
  const [number, setNumber] = useState("");

  const register = ()=>{
    check()
    Axios.post('http://localhost:8080/register', {name: name, email:email, password: password,
    college: college, number: number}).then((responce)=>{
      console.log(responce);
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
          <input id="pass" type="text" class="inputbox" placeholder="Password" onChange={(event)=>{
          setPassword(event.target.value);
        }}></input>
          <input id="cpass" type="text" class="inputbox" placeholder=" Confirm Password"></input>
          <input id="cname" type="text" class="inputbox" placeholder="College Name" onChange={(event)=>{
          setCollege(event.target.value);
        }}></input>
          <input id="cnub" type="text" class="inputbox" placeholder="Contact Number" onChange={(event)=>{
          setNumber(event.target.value);
        }}></input>
          <button type="submit" onClick={register} >Register</button>
        </div>
      </div>
    )
}

export default Register;
