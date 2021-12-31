import React from "react"
import  { Link } from "gatsby"
import Layout from "../components/layout"
import Rate from "../components/rating-form"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="Thanks" />
    <h1>Testing the rating form</h1>
    <Rate episode="test" />
    <Link className='back' to='/'>&larr;	 Back to /about</Link>
  </Layout>
)

export default NotFoundPage