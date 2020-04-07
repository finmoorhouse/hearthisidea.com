import React from "react"
import "../styles/bookshelf.css"
import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"



const Book = (props) => {
    const mySrc = "/book-covers/".concat(props.image).concat(".jpg")
    return (
        
        <div className = 'book'>
          <a  href={props.url} target='_blank' rel="noopener noreferrer">
          <img src={mySrc} objectFit="cover"  objectPosition="50% 50%" alt="" />
          </a>
   </div>  
    )
  }
  
  export default Book