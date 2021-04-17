import React, {useState} from 'react';
import './Login.css'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'

function Login(){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory()

  const login = ()=>{
    Axios.post('http://localhost:8080/login', {username: username, password: password}).then((responce)=>{
      if(responce.data.loggedIn){
        localStorage.setItem ("loggedIn", true);
        localStorage.setItem ("username", responce.data.username);
        history.push('/')
        window.location.reload(false)
      }
      else{
        setErrorMessage(responce.data.message);
      }
    })
  }


  return(
    <div className="Login">
      <h1>Login</h1>
      <div className="LoginForm">
        <input id="username" type="text" class="inputbox" placeholder="username" onChange={(event)=>{
        setUsername(event.target.value);
      }}></input>
        <input id="pass" type="password" class="inputbox" placeholder="Password" onChange={(event)=>{
        setPassword(event.target.value);
      }}></input>
        <button type="submit" onClick={login} >Login</button>
        <h2 style = {{color: "red"}}>{errorMessage}</h2>
      </div>
    </div>
  )
}

export default Login;
