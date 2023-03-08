import React from "react";

export default function Meme (){
    return(
        <section>
            <input type="text" className="first-text" placeholder="top text"></input>
            <input type="text" className="second-text" placeholder="bottom text"></input>
            <button id="btn">Get a new meme image  🖼</button>
        </section>
    )
}