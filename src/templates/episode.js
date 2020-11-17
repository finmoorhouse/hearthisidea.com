import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Player from "../components/player"
//import Img from 'gatsby-image';
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import "katex/dist/katex.min.css"
import "../styles/episode.scss"
import SEO from "../components/seo"
import Rate from "../components/rating-form"
import Book from "../components/book"
import TableOfContents from "../components/table-of-contents"
import EpisodeLinks from "../components/episode-links"
//const components = {Book,HeaderScroll}
const components = { Book }
export default function Template({
  data: { mdx }, // this prop will be injected by the GraphQL query below.
}) {
  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
        myFeaturedImage={mdx.frontmatter.featuredImage}
      />
      <h1 className="episode-title">{mdx.frontmatter.title}</h1>
      <h2 className="date">{mdx.frontmatter.date}</h2>
      <Player audioSrc={mdx.frontmatter.audio}></Player>
     
      <EpisodeLinks
        direct={mdx.frontmatter.audio || "/"}
        apple={
          mdx.frontmatter.apple ||
          "https://podcasts.apple.com/gb/podcast/hear-this-idea/id1496501781"
        }
        spotify={
          mdx.frontmatter.spotify ||
          "https://open.spotify.com/show/442fxr9pe0tbDtqEikODch"
        }
        google={
          mdx.frontmatter.google ||
          "https://podcasts.google.com/?feed=aHR0cHM6Ly9waW5lY2FzdC5jb20vZmVlZC9oZWFyLXRoaXMtaWRlYQ"
        }
      />
       {mdx?.tableOfContents?.items && (
        <TableOfContents items={mdx.tableOfContents.items} />
      )}
      <div className="writeup">
        <MDXProvider components={components}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
      <Rate episode={mdx.frontmatter.number}/>

      <Link className="back" to="/episodes">
        &larr; See more episodes
      </Link>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      tableOfContents
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        audio
        title
        apple
        google
        spotify
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 1200) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
