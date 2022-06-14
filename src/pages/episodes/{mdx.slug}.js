import * as React from "react"
import { useState, useRef, forwardRef } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../../components/layout"
import TableOfContents from "../../components/table-of-contents"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import "katex/dist/katex.min.css"
import "../../styles/episode.scss"
import Rate from "../../components/rating-form"
import Book from "../../components/book"
import EpisodeLinks from "../../components/episode-links"
import Player from "../../components/player"
import Seo from "../../components/seo"
import ScrollUp from "../../components/see-more"
import Seeker from "../../components/seeker"
import SuperLayer from "../../components/player"


const FunctionSeek = forwardRef((props, ref, seekFunction) => {
  const childFn = (paramOne, paramTwo, paramThree) => {
    console.log("calling child fn... params are: ", paramOne, paramTwo, paramThree);
  };

  ref.current = childFn;

  return (
    <button onClick={seekFunction} style={{ display: "none" }}>nkjk</button>
  );
})

function Episode({ data: { mdx } }) {

  const btnRef = useRef(null);
  const seekerRef = useRef(null);
  const [childData, setChildData] = useState(null);
  const sendChildToParent = (data) => {
    setChildData(data); 
  }

  const components = {
    Book,
    strong: (props) => <Seeker sendChildToParent={sendChildToParent} seekFunction={seekFunction} setFunction={setSelect}
      ref={seekerRef}  {...props} />
  }

  const setSelect = ((value) => {
    // console.log("parent click: ", value );
    return value;

  });


 
  const seekFunction = () => {

    if (seekerRef?.current) {
      // seekerRef?.current.click();

      btnRef && btnRef.current && btnRef.current.click();
      seekerRef.current("valueOne", "valueTwo", "valueThree");
    }
  }

  let sources = null
  if (mdx?.frontmatter.backgroundImage) {
    sources = [mdx?.frontmatter.backgroundImage.childImageSharp.fluid]
  }

  let heroBanner
  if (!sources) {
    heroBanner = (
      <>
        <h1 className="episode-title">{mdx?.frontmatter.title}</h1>
        <h2 className="date">{mdx?.frontmatter.date}</h2>
      </>
    )
  } else {
    heroBanner = (
      <BackgroundImage
        className="cover-image"
        backgroundColor={`#222222`}
        fluid={sources}
      >
        <div className="cover-image__wrapper">
          <div className="cover-image__text">
            <h1 className="cover-image__title">{mdx.frontmatter.title}</h1>
            <h2 className="date cover-image__date">{mdx.frontmatter.date}</h2>
          </div>
        </div>
      </BackgroundImage>
    )
  }
  return (
    <div>
      {mdx && (
        <Layout
          pageTitle={mdx.frontmatter.title}
          onTransparent={sources ? true : false}
        >
          <Seo
            title={mdx.frontmatter.title}
            myFeaturedImage={mdx.frontmatter.featuredImage}
            description={mdx.frontmatter.description || null}
          />

          {heroBanner}

          <SuperLayer  ref={btnRef} />
          <Player audioSrc={mdx.frontmatter.audio} seekNumber={childData} ref={btnRef} />
          
           <FunctionSeek ref={seekerRef} seekFunction={seekFunction} />




    

          <EpisodeLinks
            direct={mdx.frontmatter.audio || "/"}
            apple={
              mdx.frontmatter.apple ||
              "https://podcasts.apple.com/gb/podcast/hear-this-idea/id1496501781"
            }
            spotify={
              mdx.frontmatter.spotify ||
              "https://open.spotify.com/show/442fxr9pe0tbDtqEikODch"
            }
            google={
              mdx.frontmatter.google ||
              "https://podcasts.google.com/?feed=aHR0cHM6Ly9waW5lY2FzdC5jb20vZmVlZC9oZWFyLXRoaXMtaWRlYQ"
            }
          />
          <details className="episode-rate-dropdown">
            <summary>
              Finished listening? Click here to rate the episode.
            </summary>
            <Rate
              episode={mdx.frontmatter.number}
              redirectUrl={mdx.frontmatter.path}
              ratingOf="audio"
            />
          </details>

          <TableOfContents
            items={mdx.tableOfContents.items}
            episodePath={mdx.frontmatter.path}
            wordCount={mdx.wordCount.words}
            timeToRead={mdx.timeToRead}
          />

          <ScrollUp showBelow={600} />

          <div className="writeup">
            <MDXProvider components={components}  >
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </div>
          <hr className="rating-hr" />
          <Rate episode={mdx.frontmatter.number} ratingOf="write-up" />
          <Link className="back" to="/episodes">
            &larr; See more episodes
          </Link>
        </Layout>
      )}
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      tableOfContents
      timeToRead
      wordCount {
        words
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        audio
        description
        number
        title
        apple
        google
        spotify
        featuredImage {
          childImageSharp {
            fixed(width: 1200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        backgroundImage {
          childImageSharp {
            fluid(maxWidth: 1400, quality: 65) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default Episode
