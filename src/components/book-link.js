import React from "react"
const BookLink = ({ post }) => (
  <div className="book-link">
    <h2>{post.title}</h2>
    <h4>{post.name}</h4>
    <h5>{post.link}</h5>
  </div>
)
export default BookLink
