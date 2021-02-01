import React from "react"
import "../styles/bookshelf.scss"
//import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"

const Book = props => {
  const mySrc = "/book-covers/".concat(props.image).concat(".jpg")
  return (
    
    <div className={props.spineColor ? 'book book-3d' : 'book book-no3d'} >
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img src={mySrc} objectfit="cover" objectPosition="50% 50%" alt="" />
      </a>
      {
        props.spineColor && <div className='afterBook' style={{backgroundColor: props.spineColor,}}></div> 
      }
   
    </div>
    
  )
}

export default Book
