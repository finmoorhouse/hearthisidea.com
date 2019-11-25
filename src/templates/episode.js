import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Player from "../components/player"
import  { Link } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
export default function Template({
  data: {mdx}, // this prop will be injected by the GraphQL query below.
}) {

  
  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      <h2 class='date'>{mdx.frontmatter.date}</h2>
      <Player audioSrc={mdx.frontmatter.audio}></Player>
  
      <MDXRenderer>{mdx.body}</MDXRenderer>
      
      <Link to='/episodes'>&larr;	 Back to episodes</Link>
    </Layout>
  )
  
}
export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        audio
        title
      }
    }
  }
`
