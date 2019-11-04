import React from "react"

const Player = ({ audioSrc }) => (
    <div>
    <audio
        id="player"
        controls="controls"
        src = {audioSrc}
      >
        Your browser does not support audio.
      </audio>
      
      <div className='player'>
          <div className='play'>Play</div>
      </div>
      </div>
      
)


export default Player