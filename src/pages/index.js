import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Vocal Thinkers</h1>
    <p>This podcast is about...</p>
    <h2>About the show</h2>
    <p>
      Vocal Thinkers began as a way of giving a platform for academics to share
      their recent work to a wider audience without dumbing it down.
    </p>
    <h2>Where to find it</h2>
    <a>Spotify</a>
    <a>Google Podcasts</a>
    <a>iTunes</a>
    <a>Stitcher</a>
    <a>Pocket Casts</a>
    <h2>Press Clippings</h2>
    <h2>Support the show</h2>
    <Link to="episodes">See more episodes</Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
