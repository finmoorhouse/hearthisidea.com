import React from "react"

const FilterButton = props => {
  return (
    <button
      className="listen library-filter-button"
      style={
        props.FilterValue
          ? { background: "rgba(255, 227, 67, 0.82)" }
          : { background: "#bbbbbb" }
      }
      onClick={props.handler}
    >
      {props.FilterName}
      
    </button>
  )
}
export default FilterButton
