import React from "react";
import logo from "../images/Troll Face.png";

export default function Header(){
    return(
        <>
            <section>
                <header className="header">
                    <div className="header-left-content">
                        <img src={logo} alt="meme-logo"></img>
                        <h1>Meme Generator</h1>
                    </div>
                    <div className="header-right-content">
                        <h5>React Course - Project 3</h5>
                    </div>
                </header>
            </section>
        </>
    )
}