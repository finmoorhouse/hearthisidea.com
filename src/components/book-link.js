import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const BookLink = ({ post }) => (
  <div className="book-link">
    <a
      className="listen"
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {post.image ? (
        <Img
          className="book-link-image"
          alt={`${post.name}'s recommendation: '${post.title}' by ${post.author}.`}
          fluid={post.image.childImageSharp.fluid}
        />
      ) : (
        <h3>no image</h3>
      )}
    </a>
    <h3>{post.title}</h3>
    <h4>{post.name}</h4>
  </div>
)
export default BookLink
