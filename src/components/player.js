import React from "react"
import AudioPlayer from "react-h5-audio-player"
import "../styles/audio-player.css"
const Player = ({ audioSrc }) => (
    <div>
    
    {/*<audio
        id="player"
        controls="controls"
        src = {audioSrc}
      > 
       
        Your browser does not support audio.
    </audio>*/}
      <AudioPlayer
    src="https://traffic.libsyn.com/syntax/Syntax100.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
    
      </div>
  
)


export default Player