import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export default function PostLink({ post }) {
  let sources = null
  if (post.frontmatter.backgroundImage) {
    sources = [post.frontmatter.backgroundImage.childImageSharp.fluid]
  }
  return (
    <Link
      className="episode-link episode-link--container"
      to={post.frontmatter.path}
    >
      <BackgroundImage
        className="episode-link--background-image"
        backgroundColor={`#222222`}
        fluid={sources}
        preserveStackingContext={true}
      >
        <h3 className="number number-big">
          {parseInt(post.frontmatter.number, 10)}
        </h3>
        <h2 className="episode-link--title episode-link--text">
          {post.frontmatter.title}
        </h2>

        {/* <h4 className="date">{post.frontmatter.date.toUpperCase()}</h4> */}
        <div className="episode-link--shade"></div>
      </BackgroundImage>
    </Link>
  )
  // return (
  //   <div className="episode-link episode-link--container">
  //       <Link className="episode-link--text" to={post.frontmatter.path}>
  //         <h2>
  //           <span className="number">
  //             {parseInt(post.frontmatter.number, 10)}.{" "}
  //           </span>
  //           {post.frontmatter.title}{" "}
  //         </h2>
  //         <h4 className="date">{post.frontmatter.date.toUpperCase()}</h4>
  //       </Link>
  //       </div>
  //   </div>
  // )
}
