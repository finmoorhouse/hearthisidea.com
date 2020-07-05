import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const BookLink = ({ post }) => (
  <StaticQuery
  query={
    graphql`
    query {   
      file(relativePath: { eq: "book-covers/book-sanjay-2.jpg" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `
  
  }
  render={data => (

  <div className="book-link">
    <h2>{post.title}</h2>
    {data ? (
      <Img
        className="book-link-image"
        alt={`${post.name}'s recommendation: '${post.title}' by ${post.author}.`}
        fixed={data.file.childImageSharp.fixed}
      />
    ) : (
      <h3>Nothing</h3>
    )}
    <h4>{post.name}</h4>
    <h5>{post.link}</h5>
  </div>
  )}
  />
)
export default BookLink
