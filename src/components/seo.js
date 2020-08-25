/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, myFeaturedImage }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
            twitterUsername
            image
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const featuredImageSrc = myFeaturedImage && myFeaturedImage.childImageSharp.sizes.src;
  const pageThumbnail = `${site.siteMetadata.url}${featuredImageSrc || site.siteMetadata.image}`;
  const myTitle = title || site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: myTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: `@hearthisidea`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: myTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `theme-color`,
          content: `#fff75d`,
        },
        {
          name: `twitter:image`,
          content: pageThumbnail,
        },
        {
          property : `og:image`,
          content: pageThumbnail,
        },
        {
          name:`image`,
          content: pageThumbnail,
        },
        {
          name:`monetization`,
          content: `$ilp.uphold.com/4rHyDzRz66Dw`,
        },
      ].concat(meta)}
      
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
