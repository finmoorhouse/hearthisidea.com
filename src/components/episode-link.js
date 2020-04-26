import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => (
  <div className='episode-link'>
    <Link to={post.frontmatter.path}>

      <h2><span className='number'>{parseInt(post.frontmatter.number, 10)}. </span>{post.frontmatter.title} </h2>
      <h4 className='date'>
      {post.frontmatter.date.toUpperCase()}
      </h4>
    </Link>
  </div>
)
export default PostLink