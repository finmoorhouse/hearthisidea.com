import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const DonatePage = () => (
  <Layout>
    <Seo title="Donate" myStaticFeaturedImage="/donate.jpg"/>
    <h1>Leave a tip</h1>
    <hr className="line" />
    <p className="introduction">
      Thank you for considering being a supporter of the show! We produce this
      podcast on our own time, and episodes can take between 10-20 hours to
      complete. We do not and never will run ads, so your donation will help us
      pay for hosting and invest in new equipment (and caffeine ☕).
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
    <p>
      Special thank you to the <a href='https://funds.effectivealtruism.org/funds/ea-community' target='_blank' rel="noopener noreferrer">EA Infrastructure Fund</a> for supporting us with a{" "}
      <a
        href="https://funds.effectivealtruism.org/funds/payouts/november-2020-ea-infrastructure-fund-grants#hear-this-idea---%C2%A36000-8000"
        taregt="_blank" rel="noopener noreferrer"
      >
        grant in December 2020.
      </a> This covered our time as we worked on the podcast over the pandemic. If you have a project you think could improve the world, we highly recommend thinking about <a href='https://funds.effectivealtruism.org/apply-for-funding' target='_blank' rel="noopener noreferrer">applying to an EA Fund</a>!
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default DonatePage
