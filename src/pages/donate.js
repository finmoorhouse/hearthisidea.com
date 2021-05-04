import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const DonatePage = () => (
  <Layout>
    <SEO title="Donate" />
    <h1>Leave a tip</h1>
    <hr className="line" />
    <p className="introduction">
      Thank you for considering being a supporter of the show! We produce this podcast on our own time, and episodes can take between 10-20 hours to complete.
      We do not and never will run ads, so your donation will help us pay for hosting and invest in new equipment (and caffeine ☕).
    </p>
    <div className="listen-container">
      <a
        className="listen"
        href="https://tips.pinecast.com/jar/hear-this-idea"
        target="_blank"
        rel="noopener noreferrer"
      >
       💸 Donate
      </a>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default DonatePage
