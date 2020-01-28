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
      <a className='listen' href="https://open.spotify.com/show/442fxr9pe0tbDtqEikODch" target="_blank">Spotify</a>
      <a className='listen' href="https://pca.st/5bclatq6" target="_blank">Pocket Casts</a>
      <a className='listen' href="https://podcasts.apple.com/gb/podcast/hear-this-idea/id1496501781" target="_blank">Apple Podcasts</a>
      <a className='listen' href="https://podcasts.google.com/?feed=aHR0cHM6Ly9waW5lY2FzdC5jb20vZmVlZC9oZWFyLXRoaXMtaWRlYQ" target="_blank">Google Podcasts</a>
      </div>
      <h2>Social media</h2>
      <p className="introduction">If you would like to get in touch with the show to suggest a guest or leave feedback, the best way to do that is currently through either Facebook or Twitter:</p>
      <div className = 'listen-container'>
      <a className='listen' href="https://www.facebook.com/hearthisidea" target="_blank">Facebook</a>
      <a className='listen' href="https://twitter.com/hearthisidea" target="_blank">Twitter</a>
      </div>
    {/*<Link to="episodes">See more episodes</Link>*/}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
