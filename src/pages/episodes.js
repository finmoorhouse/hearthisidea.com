import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Episodes</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      Stay tuned...
    </div>
  </Layout>
)

export default IndexPage
