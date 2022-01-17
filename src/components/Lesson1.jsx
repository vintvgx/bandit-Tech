import React from 'react';
import { useState } from 'react';
import Input from './Input';

var index = 1;

function Lesson1() {

    const [message, setMessage] = useState(false);
    const showInput = () => setMessage(true);
    const hideInput = () => setMessage(false);
    const brack = "{";
    


    const [toggleState, setToggleState] = useState(index);

    const toggleTab = (index) => {
        setToggleState(index);
    }


    const Java = 
        (
        <div>
            <p>public class Hello World {brack} </p>
            <p>public state void(String[] args) (</p>
              <p class="whiten"> {message ? <Input /> : `System.out.print(\"Hello World");`}</p> 
            <p><br/>)    }</p>
            
        </div>
        );

    const C =
        (
            <div>
                <p>#include stdio.h</p>
                <p>int main (void) {brack}</p>
                <p class="whiten">{message ? <Input /> : `printf(\"Hello World");`}</p>
                <p>return 0;  }</p>
            </div>
        )

    const Javascript = {
        (
            <div>
                <p>This is Javascript</p>
            </div>
        )
    }

    const buttons =
        (
        <div>
            <button 
            class="btn btn-light"
            onClick={showInput}
            >TRY</button>
            <button 
            class="btn btn-danger"
            onClick={hideInput}
            >CANCEL</button>
        </div>
        );



    return (

        <section>
            <div id="work" className="container">

            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                    {...toggleState === 1 ? index=1 : null}
                >
                    Java
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    {...toggleState === 2 ? index=2 : null}
                    onClick={() => toggleTab(2)}
                >
                    C
                 </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    {...toggleState === 3 ? index=3 : null}
                    onClick={() => toggleTab(3)}
                >
                    Javascript
                 </button>
                 <button
                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    {...toggleState === 4 ? index=4 : null}
                    onClick={() => toggleTab(4)}
                >
                    C++
                 </button>
                 <button
                    className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                    {...toggleState === 5 ? index=5 : null}
                    onClick={() => toggleTab(5)}
                >
                    Python
                 </button>
            </div>
            {/* style={{backgroundColor: handleBg ? "green" : "red" }} */}
            <div className="content-tabs"  >
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    {Java}
                    {buttons}
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                  {C}
                  {buttons}
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <p>alert("Hello, World!");</p>
                    {buttons}
                </div>
                <div
                    className={toggleState === 4 ? "content  active-content" : "content"}
                >
                    <p>std::cout cc "Hello World!";</p>
                    {buttons}
                </div>
                <div
                    className={toggleState === 5 ? "content  active-content" : "content"}
                >
                    <p>print("Hello World")</p>
                    {buttons}
                </div>
            </div>
            </div>

            
        </section>
    )
}

export {index};
export default Lesson1;
