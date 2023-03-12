import React from "react";
import memesData from "./memesData"


 

export default function Meme (){
    const [memeImage, setImage] = React.useState("")
    console.log(memeImage)
    let getMemesImage = () => {
        const memeData = memesData.data.memes
        const randomDataIndex = Math.floor(Math.random() *memeData.length)
        setImage(memeData[randomDataIndex].url)
        
        
    }
    return(
        <section className="meme-generator-section">
            <input type="text" className="first-text" placeholder="top text"></input>
            <input type="text" className="second-text" placeholder="bottom text"></input>
            <button id="btn" onClick={getMemesImage}>Get a new meme image 🖼</button>
            <img className="img" src={memeImage} alt=""></img>     
        </section>
    )
}