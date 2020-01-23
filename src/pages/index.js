import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About the show</h1>
    <hr className = "line"/>
    <p className="introduction">Hear This Idea is a podcast showcasing new thinking from the University of Cambridge and beyond. It is hosted by two undergrad students, Fin and Luca. Each episode is an in-depth interview where we ask academics to explain their field and their research. Every episode also has an accompanying write-up that we publish right here on our website.
      </p>
      <h2>Where to listen</h2>
      <div className = 'listen-container'>
      <Link className='listen' to="">Spotify</Link>
      <Link className='listen' to="">Pocket Casts</Link>
      <Link className='listen' to="">Apple Podcasts</Link>
      <Link className='listen' to="">Google Podcasts</Link>
      </div>
      <h2>Social media</h2>
      <p>If you would like to get in touch with the show to suggest a guest or leave feedback, the best way to do that is currently through either Facebook or Twitter:</p>
      <div className = 'listen-container'>
      <Link className='listen' to="https://www.facebook.com/hearthisidea">Facebook</Link>
      <Link className='listen' to="https://twitter.com/hearthisidea">Twitter</Link>
      </div>
    {/*<Link to="episodes">See more episodes</Link>*/}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
