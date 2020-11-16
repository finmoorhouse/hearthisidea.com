import React from "react"
import  { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Thanks" />
    <h1>Thanks for rating!</h1>
    <p>Cheers.</p>
    <Link className='back' to='/'>&larr;	 Back to /about</Link>
  </Layout>
)

export default NotFoundPage