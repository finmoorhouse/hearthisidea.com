import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/episode-link"
import Layout from "../components/layout"
import SEO from "../components/seo"
const EpisodesPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return <Layout>
    <SEO title="Episodes" />
    <h1>Episodes</h1>
    <hr className = "line"/>
  {Posts}
  </Layout>
}
export default EpisodesPage
export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___number] }, filter: { frontmatter: { status: { eq: "live" } } }) {
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
            status
          }
        }
      }
    }
  }
`