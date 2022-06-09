import React, { useState } from "react"
import "../styles/episode.scss"
//import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"

//  regex to get the text number field 
const getTime = (text) => {
  var EXP = /[\d]*[.]{0,1}[\d]+/g;
  return text.match(EXP);
}
// get format of time HH:MM:SS
const  getFormat = (text) => {
  var EXP = /[:\s*(\w+)][\d]*[.]{0,1}[\d]+/g;


  return text.match(EXP);
}

// var SECOND_EXP = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/


// get person speaking
const getSpeaker = (text) => {
  var REXPRESSION = /[A-Z]/gi;
  return text.match(REXPRESSION);
}
const Seeker = React.forwardRef(({ children, ref, some, seekTime, onThing, btnRef, seekFunction }) => {
  const [seek, setSeeker] = useState(10)
  const speaker = getSpeaker(children)
  const time = getTime(children)
  const timestamp = getFormat(children)
 const localRef = React.useRef(); 
 
   
  //  convertTime( ['2', '30','23'])  


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


  const handleSeek = (time)  => {
    localRef.current.click();
    const seekTime = seekButton(time)
    // console.log(seekTime)
    onThing(seekTime)
    // 👇️ open   on click of other element
    // btnRef && btnRef.current && btnRef.current.click();
    // btnRef.current.click()
    // seekFunction
    console.log("clicked on "+ localRef?.current )
    console.log(seekTime)

  }

  // setSeeker(handleSeek(time));

  return (

    <div  >

      <h5 >

        {/* {children} */}
        {speaker}
        <button onClick={() => console.log(seekButton(time))} className="seek-link">
          §{timestamp}
        </button>
        <div>Here {some}  </div>
         {/* <button onClick={() => onThing(3)} className="seek-link"> first  §{timestamp}  </button>  */}
        {/* <button onClick={() => handleSeek(time)} id="buttonX" ref={btnRef} className="seek-link">  §{timestamp}  </button> */}
      
        <button onClick={() => handleSeek(time)}  className="seek-link"> second §{timestamp}  </button>
       
        <button onClick={seekFunction} ref={localRef}   className="seek-link">§{timestamp} </button>
      </h5>
    

    </div>

  )
}
);



export default Seeker
