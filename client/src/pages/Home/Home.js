import React, { useEffect } from "react";
import "./Home.css";
import Contact from "../../components/Contact";
import About from "../../components/About";
import Aboutapp from "../../components/Aboutapp";
import Usernav from "../../components/Usernav";

function Home() {
  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);

  return (
    <div>
      {localStorage.getItem("loggedIn") ? <Usernav /> : <Aboutapp />}
      <Contact />
      <About />
    </div>
  );
}

export default Home;
