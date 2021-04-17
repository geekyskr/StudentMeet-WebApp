import React, {useEffect} from 'react';
import './Home.css'

function Home(){
  useEffect(()=>{
    if(!localStorage.getItem("loggedIn")){
      localStorage.setItem("loggedIn", false);
    }
  }, [])
  return <div>Home</div>
}

export default Home;
