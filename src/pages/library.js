import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import BookLink from "../components/book-link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/library.scss"
import FilterButton from "../components/filter-button"

const LibraryPage = ({
  data: {
    allLibraryJson: { edges },
  },
}) => {
  const [Books, setBooks] = useState(
    edges.map(edge => (
      <BookLink key={edge.node.id} post={edge.node} Category={edge.node.tags} />
    ))
  )
  const [activeCategories, setActiveCategories] = useState({
    philosophy: true,
    economics: true,
    psychology: true,
    sociology: true,
    fiction: true,
    history: true,
    people: true,
    religion: true,
    environment: true,
    selfImprovement: true,
    book: true,
    paper: true,
    article: true,
    film: true,
    online: true,
  })
  const media = ['book','paper','online','film','article']
  const handler = thing => {
    let newObject = activeCategories
    var keys = Object.keys(activeCategories);
    let allTrue = true
    keys.forEach(key => {
      if (! activeCategories[key]){
        allTrue = false;
      }
    })
    if(allTrue){
      if(media.includes(thing)){
        media.forEach(medium => {
          newObject[medium] = false;
        })
      }else{
        keys.forEach(key => {
          newObject[key] = false;
        })
        media.forEach(medium => {
          newObject[medium] = true;
        })
      }
      newObject[thing] = true
    }
    else{
      newObject[thing] = !activeCategories[thing]
    }
    setActiveCategories({ ...newObject })
  }
  useEffect(() => {
    function checkTags(node) {
      let tagFilter = false
      for (const i of node) {
        if (activeCategories[i]) {
          tagFilter = true
          break
        }
      }
      return tagFilter
    }
    setBooks(
      edges
        .filter(edge => activeCategories[edge.node.type] === true) // You can filter your Books based on some criteria
        .filter(edge => checkTags(edge.node.tags))
        .map(edge => (
          <BookLink
            key={edge.node.id}
            post={edge.node}
            Category={edge.node.tags}
          />
        ))
    )
  }, [activeCategories])
  return (
    <Layout>
      <SEO title="Library" />
      <h1>Library</h1>
      <hr className="line" />
      <p>
        Browse the book, article, and film recommendations of all our guests so
        far. Hover over or tap on each image to see details, and click or tap on
        the title or guest's name to learn more. You can also use the buttons
        below to filter by category and medium: yellow indicates that the item
        is <i>included</i> in the filter, grey that it is <i>excluded</i>.
      </p>
      <h3>Categories</h3>
      <FilterButton
        handler={() => handler("economics")}
        FilterName="Economics"
        FilterValue={activeCategories.economics}
      />
      <FilterButton
        handler={() => handler("philosophy")}
        FilterName="Philosophy"
        FilterValue={activeCategories.philosophy}
      />
      <FilterButton
        handler={() => handler("psychology")}
        FilterName="Psychology"
        FilterValue={activeCategories.psychology}
      />
      <FilterButton
        handler={() => handler("sociology")}
        FilterName="Sociology"
        FilterValue={activeCategories.sociology}
      />
      <FilterButton
        handler={() => handler("history")}
        FilterName="History"
        FilterValue={activeCategories.history}
      />
      <FilterButton
        handler={() => handler("people")}
        FilterName="People"
        FilterValue={activeCategories.people}
      />
      <FilterButton
        handler={() => handler("religion")}
        FilterName="Religion"
        FilterValue={activeCategories.religion}
      />
      <FilterButton
        handler={() => handler("environment")}
        FilterName="Environment"
        FilterValue={activeCategories.environment}
      />
      <FilterButton
        handler={() => handler("selfImprovement")}
        FilterName="Self-Improvement"
        FilterValue={activeCategories.selfImprovement}
      />
      <FilterButton
        handler={() => handler("fiction")}
        FilterName="Fiction"
        FilterValue={activeCategories.fiction}
      />
      <h3>Medium</h3>
      <FilterButton
        handler={() => handler("book")}
        FilterName="Book"
        FilterValue={activeCategories.book}
      />
      <FilterButton
        handler={() => handler("paper")}
        FilterName="Paper"
        FilterValue={activeCategories.paper}
      />
      <FilterButton
        handler={() => handler("article")}
        FilterName="Article"
        FilterValue={activeCategories.article}
      />
      <FilterButton
        handler={() => handler("online")}
        FilterName="Online"
        FilterValue={activeCategories.online}
      />
      <FilterButton
        handler={() => handler("film")}
        FilterName="Film"
        FilterValue={activeCategories.film}
      />
      {Books.length > 0 ? (
        <div className="library-container">{Books}</div>
      ) : (
        <p>No items match these criteria.</p>
      )}
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
          tags
        }
      }
    }
  }
`
