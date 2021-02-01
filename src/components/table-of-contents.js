import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
function renderItems(items, level) {
  return (
    <ol>
      {items.map(
        item =>
          item.title && (
            <li key={item.url}>
              <a href={item.url}>{item.title}</a>
              {item.items && item.title && level <= 3 && renderItems(item.items, level + 1)}
            </li>
          )
      )}
    </ol>
  )
}
const TableOfContents = props => {
  return (
    <details className='episode-table-of-contents'>
      <summary>Table of Contents</summary>
      {renderItems(props.items, 1)}
      
    </details>
  )
}

export default TableOfContents
