import React from "react"
//import { useStaticQuery, graphql } from "gatsby"

function renderItems(items, level, episodePath) {
  return (
    <ol>
      {items?.length > 0 &&
        items.map(item => (
          <>
            {item.title && (
              <li key={episodePath}>
                {" "}
                <a href={`${item.url}`} title={item.title}>
                  <span>{item.title}</span>
                </a>
                {item.items &&
                  item.title &&
                  level <= 3 &&
                  renderItems(item.items, level + 1, episodePath)}
              </li>
            )}
          </>
        ))}
    </ol>
  )
}
const TableOfContents = props => {
  return (
    <div>
      <details open className="episode-table-of-contents">
        <summary>Table of Contents</summary>
        {renderItems(props.items, 1, props.episodePath)}
        <p className="toc-wordcount">
          {props.timeToRead} minute read ({props.wordCount} words)
        </p>
      </details>
    </div>
  )
}

export default TableOfContents
