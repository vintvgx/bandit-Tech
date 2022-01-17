import React from "react";
import LessonOne from "./Lesson1";



function About() {

  var title = "Hello World.";  
  
  const style = {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    
  }

  return (
    <section>
        <div style={style} className="about">
          <div class="container">
            <div class="row align-items-center my-5">
              <h1 class="hW">{title}</h1>
            </div>
          </div>
          <div class="container col-6">
            <h3>Lesson 1</h3>
            <p>Welcome, programmer. At the start of learning any programming language a coder learns how to print HELLO WORLD onto the screen. Here are examples of how to print HELLO WOLRLD in various languages. Try it for yourself!</p>
          </div>
          <div class="container">
              <LessonOne />
          </div>
          <div>
            <button class="btn">-> Next Lesson</button>
          </div>
        </div>
    </section>
  );
}

export default About;
