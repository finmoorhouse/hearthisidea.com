import React from "react"
import { graphql } from "gatsby"
import BookLink from "../components/book-link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/library.css"


const LibraryPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const Books = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your Books based on some criteria
    .map(edge => <BookLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Episodes" />
      <h1>Library</h1>
      <hr className="line" />
      <p>Some text here introducing the library.</p>
      <div className='library-container'>{Books}</div>
    </Layout>
  )
}
export default LibraryPage
export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___number] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            number
            date(formatString: "MMMM DD, YYYY")
            path
            title
            audio
          }
        }
      }
    }
  }
`
