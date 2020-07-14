import React from "react"
import "../styles/bookshelf.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Bookshelf = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "example-book.jpg" }) {
        childImageSharp {
          fixed(height: 400) {
            base64
            src
            srcSet
          }
        }
      }
    }
  `)
  return <div className="bookshelf"></div>
}

export default Bookshelf
