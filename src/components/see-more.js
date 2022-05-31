import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "../styles/link-button.scss"

// const SeeMore = () => {
//   return (
//     <div className="center">
//       <Link className="link-button" to="/episodes">
//       <div className="link-arrow">
//       &#8672;
//         </div> <span>See more episodes</span>
// </Link>

// <a href="#" className="space"> 
// {/* <span>Back </span> */}
// <div className="link-arrow">
// 	&#8673;
// </div>
// </a>
//     </div>
 
const ScrollUp = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })
  return (
    <div>
      {show && (
        <button
          onClick={handleClick}
          className="scroll-button"
          aria-label="To top"
          component="span"
        >
         	&#8673;
        </button>
      )}
    </div>
  )
}
export default ScrollUp