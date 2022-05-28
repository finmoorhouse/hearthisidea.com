import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

function renderItems(items, level) {
  return (<ol>
    {items.length > 0 && items.map(
      item =>
      (<li key={item.url}>
        <AnchorLink to={`/episodes/crawford/${item.url}`} title="references titles">
          <span>{item.title}</span>
        </AnchorLink>
        {item.items && item.title && level <= 3 && renderItems(item.items, level + 1)}
      </li>)
    )}
  </ol>)
}
const TableOfContents = props => {
  return (
    <div>
      <details open className='episode-table-of-contents'>
        <summary>Table of Contents</summary>
        {renderItems(props.items, 1)}

      </details>
    </div>

  )
}

export default TableOfContents
