import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <h1 class="title">Vocal Thinkers</h1>
    <div class="menu-wrapper">
      <Link to="/">About</Link>
      <Link to="episodes">Episodes</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
