import React, {useState, useEffect, } from 'react';
import './Navbar.css'
import {useHistory} from 'react-router-dom'

function Navbar(){

  const [loggedIn, setLoggedIn] = useState(true);
  const history = useHistory()

  useEffect(()=>{
    setLoggedIn(JSON.parse(localStorage.getItem('loggedIn')))
  }, [localStorage.getItem('loggedIn')])

  const logout = ()=>{
    localStorage.clear();
    history.push('/')
  }

  return (
    <div className = "Navbar">
      <a href="/">Home</a>
      {loggedIn ? (<>
        <a href="/upload">Upload</a>
        <a href="/profile">Profile</a>
        <a href="/logout" onClick = {logout}>logout</a>
      </>) : (<>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </>)}
    </div>
  )
}

export default Navbar;
