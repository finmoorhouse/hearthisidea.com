import React, { useState } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const BookLink = ({ post }) => {
  let bookStyle = {
    color: "black",
  }
  let emoji = "📚"
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
    default:
      emoji = "📚"
  }
       /*
       Here's the toggle:
        style={bookVis ? { visibility: "visible" } : { visibility: "hidden" }}
        onClick={() => setBookVis(!bookVis)}
        */
  const [bookVis, setBookVis] = useState(true)

  return (
    <div className="book-link" >
      {post.image ? (
        <Img
          className="book-link-image"
          alt={`${post.name}'s recommendation: '${post.title}' by ${post.author}.`}
          fluid={{ ...post.image.childImageSharp.fluid, aspectRatio: 2 / 3 }}
        />
      ) : (
        <h3>no image</h3>
      )}

      <div
        className="book-link-info"
 
      >
        <h2>{emoji}</h2>
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="book-link-image__link"
        >
          <h3 className="book-link-title">{post.title}</h3>
        </a>
        <p className="book-link-author">{post.author}</p>
        <hr className="line book-link-line" />
        <p className="book-link-chosen">
          Episode:{" "}
          <Link to={`/episodes/${post.episode}`} className="book-link-episode">
            {post.name}
          </Link>
        </p>
      </div>
    </div>
  )
}
export default BookLink
