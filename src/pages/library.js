import React from "react"
import { graphql } from "gatsby"
import BookLink from "../components/book-link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/library.css"

const LibraryPage = ({
  data: {
    allLibraryJson: { edges },
  },
}) => {
  const Books = edges
    //.filter(edge => !!edge.node.frontmatter.date) // You can filter your Books based on some criteria
    .map(edge => <BookLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Episodes" />
      <h1>Library</h1>
      <hr className="line" />
      <p>
        Browse the book, article, and film recommendations of all our guests so
        far.
      </p>
      <div className="library-container">{Books}</div>
    </Layout>
  )
}
export default LibraryPage
export const pageQuery = graphql`
  query {
    allLibraryJson {
      edges {
        node {
          id
          author
          image {
            childImageSharp {
              fluid(maxWidth: 300, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
          name
          title
          type
          episode
        }
      }
    }
  }
`
