module.exports = {
  siteMetadata: {
    title: `Hear This Idea`,
    description: `In-depth conversations with academics for an interested audience.`,
    author: `Fin Moorhouse and Luca Righetti`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    //`gatsby-transformer-remark`,
    `remark-math`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
              backgroundColor:`transparent`,
              tracedSVG : true,
            },
          },
          {
            
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hear This Idea`,
        short_name: `HTI`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/episodes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
      trackingId: "UA-44315602-3",
       //Defines where to place the tracking script - `true` in the head and `false` in the body
       head: true,
      
     //  Setting this parameter is optional
       anonymize: true,
       //Setting this parameter is also optional
       respectDNT: true,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
