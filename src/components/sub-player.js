import React, { useRef, useEffect, useState, useCallback } from "react"
import Plyr from "plyr-react"

const SubPlayer = function ({ source, options, seekNumber, buttonref }) {

  const ref = useRef()
  const [currentTime, setCurrentTime] = useState(seekNumber)

  // array of states for each speaker
  // const [speakerState, setSpeakerState] = useState([])

  // current seek point 
  const [seekPoint, setSeekPoint] = useState(0)


  useEffect(() => {
    setCurrentTime(currentTime);
    // set speaker state

    setSeekPoint(seekNumber);
    // setSpeakerState(speakerState => [...speakerState, seekNumber])
  }, [seekNumber, currentTime])

  const seek = useCallback(() => {
    const player = ref?.current?.plyr
    // const nextSeek = speakerState[speakerState.length - 1];
    // const currentTime = ref?.current?.plyr?.currentTime

    // this is similar to rewind and forward buttons, simultaneously, starts at whatever reference point
    player?.forward(seekPoint)
    player?.play() 
  }, [seekNumber]);

  // the button below is not visible, the button is clicked in the background through reference

  return <div>
    <Plyr source={source} type="audio/mp3" options={options} ref={ref} />
    

    <button onClick={seek} ref={buttonref} style={{ display: "none" }}>
      seekbutton {seekNumber}
    </button>

  </div>

}

export default SubPlayer
