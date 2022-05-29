/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  //Change line below to switch between old and new episode template.
  // const blogPostTemplate = path.resolve(`src/templates/episode.js`)
  const blogListTemplate = path.resolve(`src/pages/episodes/index.js`)
  const blogPostTemplate = path.resolve(`src/pages/episodes/{mdx.slug}.js`)
  const result = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // const posts = result.data.allMdx.edges
  // const postsPerPage = 5;
  // const numPages = Math.ceil(posts.length / postsPerPage);
  // Array.from({ length: numPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? `/` : `/${i + 1}`,
  //     component: blogPostTemplate,
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       numPages,
  //       currentPage: i + 1,
  //     },
  //   });
  // });

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      slug: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    let slug = node.frontmatter.path || createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}
 
 