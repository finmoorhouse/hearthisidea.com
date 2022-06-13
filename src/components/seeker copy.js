import React, { useCallback, useEffect, useState } from "react"
import "../styles/episode.scss"
//import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"


const Seeker = React.forwardRef(({ children, ref, seekTime, setSome, btnRef, seekFunction, setFunction, sendChildToParent }) => {

  const playerRef = React.useRef();
  const sendData = React.useRef();
  const localRef = React.useRef();
  const [element, setElement] = useState<Element | null>(null);

  // check if button is clicked 
  const [isClicked, setIsClicked] = useState(false)
  // set seek
  const [seeker, setSeeker] = useState(seekTime)

  const [count, setCount] = useState(0);
  //  convertTime( ['2', '30','23'])  

  //  regex to get the text number field 
  const getTime = (text) => {
    var regextime = /[\d]*[.]{0,1}[\d]+/g;
    return text.toString().match(regextime);
  }
  // get format of time HH:MM:SS
  const getFormat = (text) => {
    var regformat = /[:\s*(\w+)][\d]*[.]{0,1}[\d]+/g;
    return text.toString().match(regformat);
  }

  // get person speaking
  const getSpeaker = (text) => {
    var regextitle = /[A-Z]/gi;
    return text.toString().match(regextitle);
  }

  const time = getTime(children)
  const speaker = getSpeaker(children)
  const timestamp = getFormat(children)


  const seekButton = (duration) => {

    let secondsTime = Number(0);

    if (duration?.length == 3) {
      const [hours, minutes, seconds] = duration;
      console.log(secondsTime);
      return secondsTime = Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds)

    }
    else if (duration?.length == 2) {

      const [minutes, seconds] = duration;
      console.log(secondsTime);
      return secondsTime = Number(minutes) * 60 + Number(seconds)

    }
    else {
      return secondsTime = Number(0);
      // return secondsTime = Numbers(0);
    }

  }

  // setSeeker(seeButton(time))  


  const handleSeek = useCallback((time) => {

    setIsClicked(true)

    const seekTime = seekButton(time)
    // console.log(seekTime)
    setSeeker(seekTime)
    // 👇️ open   on click of other element
    setFunction(seekTime)

    console.log("clicked on " + playerRef?.current, seekTime)
    // playerRef && playerRef.current && playerRef.current.click();
 
       
    return seekTime;
  });

  // double click button 


  useEffect(() => {

    
 
     // click a button twice
    //  localRef.current = setSome;
    //  sendData.current = sendChildToParent;
    

    if (isClicked) {
      // window.getComputedStyle(ref.current);
      // setIsClicked(true) 
      setTimeout(function () {
        localRef && localRef.current && localRef.current.click();
        console.log("mainClicked" + localRef.current)
        localRef.current = false;
      }, 500);

      setTimeout(function () {      
         console.log("sendClicked" + sendData.current)
        
        sendData && sendData.current && sendData.current.click();
   
      }, 600);

      
      setTimeout(function () {
        playerRef && playerRef.current && playerRef.current.click();
        console.log("playClicked" + playerRef.current)
        // playerRef.current = false;
      }, 700);

      setTimeout(function () {
        localRef && localRef.current && localRef.current.click();
        console.log("mainClicked" + localRef.current)
        localRef.current = false;
      }, 900);
 

    } 
 
     

  }, [ playerRef, sendData, isClicked,element])





  return (

    <div  >

      <h5 >

        {/* {children} */}
        {speaker}

        <div>Current Seek {seeker}: {seekTime}</div>

        <button isClicked={isClicked} ref={localRef} 
          onClick={(e) => { e.preventDefault(); handleSeek(time) }}
          className="seek-link"> seconds §{timestamp}

        </button>

        {/* <button onClick={() => setFunction(seeker)} className="seek-link"> 
        set function §{timestamp}  </button> */}

        <button isClicked={isClicked} onClick={seekFunction} ref={playerRef} className="seek-link">
          here §{timestamp} </button>
      </h5>



      <button ref={sendData} onClick={(e) => {

        e.preventDefault();
        sendChildToParent(seeker)
      }}
      >
        set function {seeker}
      </button>


    </div>

  )
}
);



export default Seeker
