import React, { useCallback, useLayoutEffect, useState } from "react"
import "../styles/episode.scss"
//import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"

const Seeker = React.forwardRef(
  ({
    children,
    ref,
    seekTime,
    setSome,
    btnRef,
    seekFunction,
    setFunction,
    sendChildToParent,
  }) => {
    const playerRef = React.useRef()
    const sendData = React.useRef()
    const localRef = React.useRef()

    // check if button is clicked
    const [isClicked, setIsClicked] = useState(false)
    // set seek
    const [seeker, setSeeker] = useState(seekTime)

    //  convertTime( ['2', '30','23'])

    //  regex to get the text number field
    const getTime = text => {
      var regextime = /[\d]*[.]{0,1}[\d]+/g
      return text.toString().match(regextime)
    }
    // get format of time HH:MM:SS
    const getFormat = text => {
      var regformat = /[:\s*(\w+)][\d]*[.]{0,1}[\d]+/g
      return text.toString().match(regformat)
    }

    // get person speaking
    const getSpeaker = text => {
      var regextitle = /[A-Z]/gi
      return text.toString().match(regextitle)
    }

    const time = getTime(children)
    const speaker = getSpeaker(children)
    const timestamp = getFormat(children)

    const seekButton = duration => {
      // let secondsTime = seeker;

      console.log(
        "SEEE: " + duration?.length + " DURATION" + duration + " SEEKER" + time
      )

      if (duration?.length === 3) {
        const [hours, minutes, seconds] = duration

        const secondsTime =
          Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds)
        console.log(secondsTime)
        return secondsTime
      } else if (duration?.length === 2) {
        const [minutes, seconds] = duration

        const secondsTime = Number(minutes) * 60 + Number(seconds)
        console.log(secondsTime)
        return secondsTime
      } else {
        const secondsTime = Number(duration)

        return secondsTime
      }
    }

    const handleSeek = useCallback(time => {
      setIsClicked(true)

      const seekTime = seekButton(time)

      setSeeker(seekTime)
      // 👇️ open   on click of other element
      setFunction(seekTime)

      return seekTime
    })

    useLayoutEffect(() => {
      // const local = localRef,
      const player = playerRef.current,
        send = sendData.current

      //  document.querySelector('.seek-link').click();

      if (isClicked) {
        setTimeout(function() {
          console.log("sendClicked: " + sendData.current)
          send.click()
          // sendData && sendData.current && sendData.current.click();
          console.log("sendElement:" + send)
          clearTimeout()
        }, 0)

        // console.log( playerRef, localRef, sendData)

        setTimeout(function() {
          player.click()
          // playerRef && playerRef.current && playerRef.current.click();
          console.log("playClicked:" + playerRef.current)
          console.log("playerElement:" + player)
          clearTimeout()
          // playerRef.current = false;
        }, 100)

        setTimeout(function() {
          // local.click();
          // localRef && localRef.current && localRef.current.click();
          console.log("secondClick" + localRef.current)
          // console.log("localElement"+ local)
          document.querySelector(".seek-link").click()

          // local.click();
          clearTimeout()
        }, 400)
      }
    }, [playerRef, sendData, isClicked])

    const timestampComponent = timestamp ? (
      <div>
        {speaker}

        <button
          isClicked={isClicked}
          ref={localRef}
          onClick={e => {
            e.preventDefault()
            handleSeek(time)
          }}
          className="seek-link"
        >
          {/* if timeline is undefined, dont show timestamp */}

          {timestamp ? <>{timestamp}</> : ""}
        </button>

        <button
          isClicked={isClicked}
          onClick={seekFunction}
          ref={playerRef}
          className="main-link"
        ></button>

        <button
          ref={sendData}
          onClick={e => {
            e.preventDefault()
            sendChildToParent(seeker)
          }}
          className="send-link"
        ></button>
      </div>
    ) : null

    return timestampComponent
  }
)

export default Seeker
