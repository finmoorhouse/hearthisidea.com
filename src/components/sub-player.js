import React, { useRef, useEffect, useState } from "react"
import Plyr from "plyr-react"

const SubPlayer = function ({ source, options }) {
  // const ref = useRef()
  const ref = useRef()
  const [currentTime, setCurrentTime] = useState('0.00')


  useEffect(() => {
    // const onPlay = (event) => {
    setInterval(() => {
      const currentTime = ref?.current?.plyr?.currentTime / 100
      // const seekTime = ref?.current?.Plyr
      // console.log(currentTime)
      // ref.current.plyr.on("ended", (event) => console.log("evented"))
      setCurrentTime(currentTime.toFixed(1))
      // setCurrentTime(6)
      // console.log(ref?.current?.plyr.forward)
    }, 1000)

    // }

  }, [currentTime])
  console.log("Now" + currentTime)
 
  const seekTime = 0.5
  const seek = (seekTime) => {
  
    ref.current.plyr?.forward(seekTime)
    console.log( ref.current.plyr)
  }
  const enterVideo = () => {
    ref.current.plyr?.play();
   };

  return <div>
    <Plyr source={source} type="audio/mp3" options={options} ref={ref} />
    <button onClick={seek} >
      Skip to X
    </button>
    <button onClick={enterVideo}>fullscreen</button>
   

  </div>

}

export default SubPlayer
