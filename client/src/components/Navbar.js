import React, {useState, useEffect, } from 'react';
import './Navbar.css'

function Navbar(){

  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(()=>{
    setLoggedIn(JSON.parse(localStorage.getItem('loggedIn')))
  }, [localStorage.getItem('loggedIn')])

  const logout = ()=>{
    localStorage.clear();
  }

  return (
    <div className = "Navbar">
      <a href="/">Home</a>
      {loggedIn ? (<>
        <a href="/upload">Upload</a>
        <a href={'/in/' + localStorage.getItem('username')}>Profile</a>
        <a href="/" onClick = {logout}>logout</a>
      </>) : (<>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </>)}
    </div>
  )
}

export default Navbar;
