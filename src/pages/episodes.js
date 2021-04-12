import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import PostLink from "../components/episode-link"
import Layout from "../components/layout"
//import Filters from "../components/episode-list-filters"
import SEO from "../components/seo"
const EpisodesPage = ({ data }) => {
  // Filter stuff --
  // const [activeCategories, setActiveCategories] = useState({
  //   philosophy: true,
  //   economics: true,
  //   psychology: true,
  //   animals: true,
  //   ea: true,
  //   longtermism: true,
  // })
  // const handler = thing => {
  //   let newObject = activeCategories
  //   //var keys = Object.keys(activeCategories)

  //   newObject[thing] = !activeCategories[thing]

  //   setActiveCategories({ ...newObject })
  //   console.log(newObject)
  //   console.log(activeCategories)
  // }
  // const updateFilters = topic => {
  //   console.log("Filters updated." + topic)
  //   handler(topic)
  // }

  const Metadata = data.allEpisodesJson.edges
  let MetadataDict = Object.assign(
    {},
    ...Metadata.map(x => ({
      [x.node.number]: { align: x.node.align, color: x.node.color },
    }))
  )
  const Posts = data.allMdx.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .filter(function(edge) {
      // This is currently a dumpster fire!
      let MetaObject = MetadataDict[edge.node.frontmatter.number.toString()]
      return true
    })
    .map(function(edge) {
      let MetaObject = MetadataDict[edge.node.frontmatter.number.toString()]
      let align = "center"
      if (MetaObject) {
        align = MetaObject["align"]
      }
      return <PostLink key={edge.node.id} post={edge.node} align={align} />
    })
  return (
    <Layout>
      <SEO title="Episodes" />
      <h1 className="centered-text">Episodes</h1>
      <hr className="line centered-text" />
      {/* <Filters parentFunction={updateFilters} activeTopics={activeCategories} /> */}
      <div className="episode-list--grid_container">
        <div className="episode-list--grid">{Posts}</div>
      </div>
    </Layout>
  )
}
export default EpisodesPage
export const pageQuery = graphql`
  query {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___number] }
      filter: { frontmatter: { status: { eq: "live" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            number
            date(formatString: "MMMM DD, YYYY")
            path
            title
            status
            backgroundImage {
              childImageSharp {
                fluid(maxWidth: 600, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    allEpisodesJson {
      edges {
        node {
          number
          align
          color
        }
      }
    }
  }
`
