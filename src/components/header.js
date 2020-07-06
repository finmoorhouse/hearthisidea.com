import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.scss"

//import Img from "gatsby-image"
//import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div className="menu-wrapper">
        <Link to="/" className="link-plain">
          <h1 className="title">Hear This Idea</h1>
        </Link>
        <Link to="/" className="push">
          About
        </Link>{" "}
        <span className="menu-slash">/</span>{" "}
        <Link to="episodes">Episodes</Link>
      </div>
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
