import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query myQuery {
      file(relativePath: { eq: "horn.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 100
            duotone: { highlight: "#afc3c9", shadow: "#000000" }
          ) {
            aspectRatio
            base64
            src
            sizes
            srcSet
          }
        }
      }
    }
  `)
  return (
    <header>
      {/* <div class="header-image">
        <Img fluid={data.file.childImageSharp.fluid} />
  </div> */}
      <div className="menu-wrapper">
        
        <h1 className="title">Hear This Idea</h1>

        <Link to="/" className="push">About</Link> <span class='menu-slash'>/</span> <Link to="episodes">Episodes</Link>
      </div>
     {/* <hr class="line" /> */}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
