import React from "react";
import { NavLink } from "react-router-dom";


function Home() {


  const button = {
    
}
  const title = {
    fontSize: "5rem",
    // textAlign: "left"
    
  }

  const para = {
    fontSize: "10px",
    // textAlign: "right"
    
  }

  const style = {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  }

  const space = {
    marginTop: "5%"
  }



  return (
    <div class="home">
      <div class="container">
        <div class="row align-items-center" style={space}>
            <h1 style={title} >WELCOME </h1>
            <p style={para}>A free Programming app focused & built for young students from low-income neighborhoods.</p>
            <NavLink style={button} class="nav-link" to="/about">
                <button class="btn">Click To Enter</button>
              </NavLink>
          </div>
        </div>
      </div>
  );
}

export default Home;
