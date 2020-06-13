import React from "react"
//import { Link } from "gatsby"
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
      <a className='listen' href="https://open.spotify.com/show/442fxr9pe0tbDtqEikODch" target="_blank" rel="noopener noreferrer">Spotify</a>
      <a className='listen' href="https://pca.st/5bclatq6" target="_blank" rel="noopener noreferrer">Pocket Casts</a>
      <a className='listen' href="https://podcasts.apple.com/gb/podcast/hear-this-idea/id1496501781" target="_blank" rel="noopener noreferrer">Apple Podcasts</a>
      <a className='listen' href="https://podcasts.google.com/?feed=aHR0cHM6Ly9waW5lY2FzdC5jb20vZmVlZC9oZWFyLXRoaXMtaWRlYQ" target="_blank" rel="noopener noreferrer">Google Podcasts</a>
      </div>
      <h2>Social media</h2>
      <p className="introduction">If you would like to get in touch with the show to suggest a guest or leave feedback, you can fill in our <a href="https://forms.gle/TvDjN1f7wRgGokfy8" target="_blank" rel="noopener noreferrer">anonymous feedback form</a> or just email us at <span className='obfuscate'>moc.aedisi<span></span>htraeh@olleh</span>. You can also find us on Facebook and Twitter:</p>
      <div className = 'listen-container'>
      <a className='listen' href="https://www.facebook.com/hearthisidea" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a className='listen' href="https://twitter.com/hearthisidea" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    {/*<Link to="episodes">See more episodes</Link>*/}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
