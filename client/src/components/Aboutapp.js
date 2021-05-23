import React from 'react';
import './Aboutapp.css';
import logo from '../images/siteLogo.jpeg';

const Home=()=>{
  return(
    <>
      <div id="unibackground">
          <img src={logo} alt="Logo" id="smlogo" />
          <h2 id="smwelcome">Welcome to Student Meet</h2>

      </div>
      <div id="aboutsm">
          <h1 id="smheading">About StudentMeet</h1>
          <p>StudentMeet is a web application for university students.It provide interface to the students 
              where student can collaborate with peers and share the activity.Students can join group according to the University.
              Students can share ,like,commet the post.It provide great information to the students like any activity happening in university, new course provided by the university and sports events.
              
              
          </p>

      </div>
      </>
  )

}
export default Home;
