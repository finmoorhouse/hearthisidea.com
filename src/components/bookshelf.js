import React from "react"
import "../styles/bookshelf.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"




const Bookshelf = () => {
const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "example-book.jpg" }) {
      childImageSharp {
        fixed(
          height: 400,
        ) {
          base64
          src
          srcSet
        }
      }
    }
  }
`)
    return (
        
        <div className="bookshelf">
          <Img className = 'book' fixed={data.file.childImageSharp.fixed}objectFit="cover"  objectPosition="50% 50%" alt="" />
          <Img className = 'book' fixed={data.file.childImageSharp.fixed}objectFit="cover"  objectPosition="50% 50%" alt="" />
          <Img className = 'book' fixed={data.file.childImageSharp.fixed}objectFit="cover"  objectPosition="50% 50%" alt="" />
        </div>
       
       
    )
  }
  
  export default Bookshelf