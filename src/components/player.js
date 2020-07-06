import React from "react"
import AudioPlayer from "react-h5-audio-player"
import "../styles/audio-player.scss"
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
    src= {audioSrc}
    onPlay={e => console.log("onPlay")}
    // other props here
  />
    
      </div>
  
)


export default Player