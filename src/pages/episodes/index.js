import React, { useState } from "react"
import { graphql } from "gatsby"
import Seo from "../../components/seo"
import PostLink from "../../components/episode-link"
import Layout from "../../components/layout"
import "../../styles/episode-links.scss"

const EpisodesPage = ({ data }) => {
 const postsPerPage = 10; // Number of episodes to show per page
 const [currentPage, setCurrentPage] = useState(1); // Current page number

 // Filter your posts and create PostLink components for the current page
 const Metadata = data.allEpisodesJson.edges;
 let MetadataDict = Object.assign(
  {},
  ...Metadata.map(x => ({
   [x.node.number]: { align: x.node.align, color: x.node.color },
  }))
 );

 const posts = data.allMdx.edges
  .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
  .map(function (edge) {
   let MetaObject = MetadataDict[edge.node.frontmatter.number.toString()];
   let align = "center";
   if (MetaObject) {
    align = MetaObject["align"];
   }
   return <PostLink key={edge.node.id} post={edge.node} align={align} />;
  });

 // Pagination logic
 const totalPages = Math.ceil(posts.length / postsPerPage);
 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

 const allPodcasts = totalPages * postsPerPage

 const paginate = pageNumber => setCurrentPage(pageNumber);

 return (
  <Layout>
   <Seo title="Episodes" />
   <h1 className="centered-text">Episodes</h1>

   <hr className="line centered-text" />
   <div className="episode-list--grid_container">
    <div className="episode-list--grid">{currentPosts}</div>
   </div>

   {/* Pagination controls */}
   <div class="paginator" >

    {Array.from({ length: totalPages }).map((_, index) => (
     <button className={` ${currentPage === index + 1 ? "pagination" : "paginationactive"
      }`}
      key={index} onClick={() => paginate(index + 1)}>
      {index + 1}
     </button>
    ))}
   </div>
   <h6 className="center-text">
    First {indexOfLastPost} of {allPodcasts}
   </h6>
  </Layout>
 );
};

export default EpisodesPage;

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
                fluid(maxWidth: 600, quality: 70) {
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
`;
