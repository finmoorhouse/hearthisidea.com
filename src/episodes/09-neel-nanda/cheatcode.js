import React from "react"

const CheatCode = () => {
    var audio = new Audio('clip.mp4');
    audio.play();
    window.addEventListener("keydown",event => {
        if (event.key == "v"){    
            console.log("hey")
            audio.play();
        }
    });
    return(
    <h1>hi</h1>
    )
}
export default CheatCode