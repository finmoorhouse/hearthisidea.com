import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "../styles/link-button.scss"

 
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
