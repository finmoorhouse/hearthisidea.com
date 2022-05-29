import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"
import Layout from '../../components/layout'
import TableOfContents from '../../components/table-of-contents'

import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import "katex/dist/katex.min.css"
import "../../styles/episode.scss"

const BlogPost = ({ data: {mdx} }) => {
  let sources = null
  if (mdx.frontmatter.backgroundImage) {
    sources = [
      mdx.frontmatter.backgroundImage.childImageSharp.fluid
    ]
  }
  let heroBanner
  if (!sources) {
    heroBanner = (
      <>
        <h1 className="episode-title">{mdx.frontmatter.title}</h1>
        <h2 className="date">{mdx.frontmatter.date}</h2>
      </>
    )
  } else {
    heroBanner = (
      <BackgroundImage
        className="cover-image"
        backgroundColor={`#222222`}
        fluid={sources}
      >
        <div className="cover-image__wrapper">
          <div className="cover-image__text">
            <h1 className="cover-image__title">{mdx.frontmatter.title}</h1>
            <h2 className="date cover-image__date">{mdx.frontmatter.date}</h2>
          </div>
        </div>
      </BackgroundImage>
    )
  }
  return (
    <div>
      <Layout pageTitle={mdx.frontmatter.title}>
      {heroBanner}
      <TableOfContents items={mdx.tableOfContents.items} episodePath={mdx.frontmatter.path} />
      
      <p>{mdx.frontmatter.date}</p>
      
      <MDXProvider>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
      <Link className="back" to="/episodes">
        &larr; See more episodes
      </Link>
    </Layout>
    </div>
   
  )
}

export const query = graphql`
query($path: String!) {
  mdx(frontmatter: { path: { eq: $path } }) {
    body
    tableOfContents
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      audio
      description
      number
      title
      apple
      google
      spotify
      featuredImage {
        childImageSharp {
          fixed(width: 1200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      backgroundImage {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 65) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`
export default BlogPost