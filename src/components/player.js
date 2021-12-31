import React from "react"
import Plyr from "plyr-react"
import "plyr-react/dist/plyr.css"
import "../styles/audio-player.scss"
import "../styles/variables.scss"

const Player = function({ audioSrc }) {
  const episodeSrc = {
    type: "audio",
    sources: [
      {
        src: audioSrc,
        type: "audio/mp3",
      },
    ],
  }
  // https://github.com/sampotts/plyr#options
  const playerOptions = {
    invertTime: false,
    seekTime: 30,
    controls: [
      'rewind', // Rewind by the seek time (default 10 seconds)
      'play', // Play/pause playback
      'fast-forward', // Fast forward by the seek time (default 10 seconds)
      'progress', // The progress bar and scrubber for playback and buffering
      'current-time', // The current time of playback
      'duration', // The full duration of the media
      'settings', // Settings menu
      'airplay', // Airplay (currently Safari only)
      'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
    ],
  }
  return (
    <div>
      <Plyr source={episodeSrc} type="audio/mp3" options={playerOptions} />
    </div>
  )
}

export default Player
