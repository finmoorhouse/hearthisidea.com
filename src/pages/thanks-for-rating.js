import React from "react"
import  { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Thanks" />
    <h1>Thanks for the feedback!</h1>
    <p>We really appreciate you taking the time to read our write-up.</p>
    <Link className='back' to='/episodes'>&larr;	 See more Episodes</Link>
  </Layout>
)

export default NotFoundPage