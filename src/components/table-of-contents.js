import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
 
function renderItems(items, level, episodePath) {

  return (<ol>
    {items.map(
      item =>
      (  <>
         { item.title && 
            <li key={item.url}> <a href={`${item.url}`} title={item.title}>
            <span>{item.title}</span>
          </a>
          <AnchorLink to={`${item.url}`} title={item.title}>
            <span>{item.title}</span>
          </AnchorLink>
          {item.items && item.title && level <= 3 && renderItems(item.items, level + 1, episodePath)}
          {/* <a href={`${episodePath}/${item.url}`} title={item.title}>
            <span>{item.title}</span>
          </a> */}
         
        </li>
         }
        
      </>
     
        )
    )}
  </ol>)
}
const TableOfContents = props => {
  return (
    <div>
      <details open className='episode-table-of-contents'>
        <summary>Table of Contents</summary>
        {renderItems(props.items, 1, props.episodePath)}

      </details>
    </div>

  )
}

export default TableOfContents
