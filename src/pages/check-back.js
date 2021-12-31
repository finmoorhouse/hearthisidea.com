import React from "react"
import  { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>Still waiting...</h1>
    <p>We're still waiting for approval from some iTunes and Google Podcasts. Please check back in a few days and the links will be working. In the meantime, the <a target='_blank' href = 'https://open.spotify.com/show/442fxr9pe0tbDtqEikODch' rel="noopener noreferrer">Spotify</a> and <a href='https://pca.st/5bclatq6' target='_blank' rel="noopener noreferrer">Pocket Casts</a> links work fine.</p>
    <Link className='back' to='/'>&larr;	 Back to /about</Link>
  </Layout>
)

export default NotFoundPage
