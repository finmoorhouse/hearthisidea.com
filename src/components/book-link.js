import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const BookLink = ({ post }) => {
  let emoji = "📚"
  if (post.type == "film") {
    emoji = "🎥"
  }

  switch (post.type) {
    case "book":
      emoji = "📚"
      break
    case "film":
      emoji = "🎥"
      break
    case "online":
      emoji = "💾"
      break
    case "paper":
      emoji = "📝"
      break
    case "article":
      emoji = "📰"
      break
  }
  return (
    <div className="book-link">
      <a href={post.link} target="_blank" rel="noopener noreferrer">
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
      <h4 className="book-link-title">{post.title}</h4>
      <p className="book-link-author">
        {post.author} {emoji}
      </p>
      <hr class="line" />
      <p className="book-link-chosen">
        Episode: <Link to={`/episodes/${post.episode}`} className="book-link-episode">{post.name}</Link>
      </p>
    </div>
  )
}
export default BookLink
