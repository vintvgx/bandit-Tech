import React, {useState} from 'react';
import {index} from './Lesson1';

function Input() {

  const [userInput, setUserInput] = useState("");
  const [heading, setHeading] = useState("");
  // const [background, setBackground] = useState("black");
  var answer = "";
  


  const player = "Kareem";

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleClick () {
    if (userInput === player)
      setHeading("Correct");
    else
      setHeading("Try Again");
  }


  function setAnswer() {
    switch(index)
    {
      case 1:
        answer = `System.out.print(\"Hello World");`;
        if (userInput === answer)
          setHeading("Correct");
        else
          setHeading("Try Again");
        break;

      case 2:
        answer = `printf("Hello World");`;
        if (userInput === answer)
          setHeading("Correct");
        else
          setHeading("Try Again");
        break;

      default:
        answer = "Try Again";
    }
  } 

  // function backgroundChange () {
  //   if (heading === "green")
  //     return true
  //   else
  //     return false 
  // }

  // const className = backgroundChange ? 'blue' : 'red';

  // style={{backgroundColor: backgroundChange ? "green" : "red" }}
  
  return (
    <div class="container row input" >
        <input 
          onChange={handleChange}
          type="text"
          placeholder="Type in Answer" 
          value={userInput}
          class="col-7"
          />
        <button
          type="submit"
          onClick={setAnswer}
          class="col-2"
          >Submit</button>
          <p class="">{heading}</p>
    </div>
  );
}

export default Input;
