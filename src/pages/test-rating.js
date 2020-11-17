import React from "react"
import  { Link } from "gatsby"
import Layout from "../components/layout"
import Rate from "../components/rating-form"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Thanks" />
    <h1>Thanks for rating!</h1>
    <p>Cheers.</p>
    <Rate />
    <Link className='back' to='/'>&larr;	 Back to /about</Link>
  </Layout>
)

export default NotFoundPage