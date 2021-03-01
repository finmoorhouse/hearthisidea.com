import React from "react"
import "../styles/episode-list-filters.scss"


//import Img from "gatsby-image"
//import { useStaticQuery, graphql } from "gatsby"

const Filters = ({ siteTitle, onTransparent }) => {
  return (
    <div>
      <button className="filter library-filter-button listen" >
        Philosophy
      </button>
      <button className="filter library-filter-button listen" >
        Economics
      </button>
      <button className="filter library-filter-button listen" >
        Longtermism
      </button>
      <button className="filter library-filter-button listen" >
        Effective Altruism
      </button>
      <button className="filter library-filter-button listen" >
        Psychology
      </button>
      <button className="filter library-filter-button listen" >
        Animals
      </button>
    </div>
  )
}


export default Filters
