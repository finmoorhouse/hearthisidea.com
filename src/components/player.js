import React from "react"
import AudioPlayer from "react-h5-audio-player"
import "../styles/audio-player.scss"
import "../styles/variables.scss"
const Player = ({ audioSrc }) => (
  <div>
    <AudioPlayer
      src={audioSrc}
      onPlay={e => console.log("onPlay")}
      // other props here
    />
  </div>
)

export default Player
