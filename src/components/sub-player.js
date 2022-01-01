import React from "react"
import Plyr from "plyr-react"

const SubPlayer = function({ source, options }) {
  return <Plyr source={source} type="audio/mp3" options={options} />
}

export default SubPlayer
