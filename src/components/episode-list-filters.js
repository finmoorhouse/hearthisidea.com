import React, { useEffect } from "react"
import "../styles/episode-list-filters.scss"

//import Img from "gatsby-image"
//import { useStaticQuery, graphql } from "gatsby"
const Filters = ({ parentFunction, activeTopics }) => {
  useEffect(() => {
    console.log(activeTopics)
  })
  const handleClick = topic => {
    console.log("Topic is: " + topic)
    parentFunction(topic)
  }
  return (
    <div>
      <button
        onClick={() => {
          parentFunction("philosophy")
        }}
        className={
          "filter library-filter-button listen " +
          (activeTopics["philosophy"] ? "active" : "inactive")
        }
      >
        Philosophy
      </button>
      <button
        onClick={() => {
          parentFunction("economics")
        }}
        className={
          "filter library-filter-button listen " +
          (activeTopics["economics"] ? "active" : "inactive")
        }
      >
        Economics
      </button>
      <button
        onClick={() => {
          parentFunction("longtermism")
        }}
        className={
          "filter library-filter-button listen " +
          (activeTopics["longtermism"] ? "active" : "inactive")
        }
      >
        Longtermism
      </button>
      <button
        onClick={() => {
          parentFunction("ea")
        }}
        className={
          "filter library-filter-button listen " +
          (activeTopics["ea"] ? "active" : "inactive")
        }
      >
        Effective Altruism
      </button>
      <button
        onClick={() => {
          parentFunction("psychology")
        }}
        className={
          "filter library-filter-button listen " +
          (activeTopics["psychology"] ? "active" : "inactive")
        }
      >
        Psychology
      </button>
      <button
        onClick={() => {
          parentFunction("animals")
        }}
        className={
          "filter library-filter-button listen " +
          (activeTopics["animals"] ? "active" : "inactive")
        }
      >
        Animals
      </button>
    </div>
  )
}

export default Filters
