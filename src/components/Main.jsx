import React from 'react';
import Nav from './Nav.jsx';

function Main() {

    const para = {
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
        fontSize: "20px",
        position: "relative",
        bottom: "12px",
    }

    const bONLY = {
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "60px",
        fontWeight: "bold"
    }

    return (
        <section className="sec">
            <div className="container-fluid">
                 <h1 style={bONLY}>BANDITS ONLY.</h1>
                 <p style={para}>a production company</p>
            </div>
        </section>
    );
}

export default Main; 