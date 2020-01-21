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
      <h2>How to listen</h2>
      <h2>Social media</h2>
      <p>Check back in over the next few weeks for the first few episodes!</p>
    {/*<Link to="episodes">See more episodes</Link>*/}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
