import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Player from "../components/player"
import Img from 'gatsby-image';
import  { Link } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import "katex/dist/katex.min.css"
import SEO from "../components/seo"

export default function Template({
  data: {mdx}, // this prop will be injected by the GraphQL query below.
}) {

  
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} myFeaturedImage={mdx.frontmatter.featuredImage} />
      <h1 className='episode-title'>{mdx.frontmatter.title}</h1>
      <h2 class='date'>{mdx.frontmatter.date}</h2>
      <Player audioSrc={mdx.frontmatter.audio}></Player>
      <div className="writeup">
      <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
      <Link class='back' to='/episodes'>&larr;	 Back to episodes</Link>
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
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
