import React from "react"
import { Link } from "gatsby"
import "../styles/link-button.scss"

const SeeMore = () => {
  return (
    <div className="center">
      <Link className="link-button" to="/episodes">
      <div className="link-arrow">
      &#8672;
        </div> <span>See more episodes</span>
</Link>

<a href="#" className="space"> 
{/* <span>Back </span> */}
<div className="link-arrow">
	&#8673;
</div>
</a>
    </div>




  )
}

export default SeeMore
    // <button
    //   className="listen library-filter-button"
    //   style={
    //     props.FilterValue
    //       ? { background: "rgba(255, 227, 67, 1)" }
    //       : { background: "#bbbbbb" }
    //   }
    //   onClick={props.handler}
    // >
    //   {props.FilterName}
      
    // </button>