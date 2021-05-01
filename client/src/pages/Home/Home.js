import React, {useEffect} from 'react';
import './Home.css'
import Contact from '../../components/Contact'
import About from '../../components/About'

function Home(){
  useEffect(()=>{
    if(!localStorage.getItem("loggedIn")){
      localStorage.setItem("loggedIn", false);
    }
  }, [])
  return(
  <div>
    <Contact />
    <About />
  </div>)
}

export default Home;
