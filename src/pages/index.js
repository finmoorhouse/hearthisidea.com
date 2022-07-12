import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import "../styles/index.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="About" />
    <h1>About the show</h1>
    <hr className="line" />
    <p className="introduction introduction_tagline">
      Hear This Idea is a podcast about new thinking in{" "}
      <a
        href="https://www.effectivealtruism.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        effective altruism
      </a>
      .
    </p>
    <StaticImage
      className="home-image"
      src="../images/fandl.jpg"
      alt="Fin and Luca"
      placeholder="blurred"
      layout="fixed"
      width={700}
      height={480}
      quality={90}
    />
    <p className="introduction">
      The hosts are long-time friends{" "}
      <a
        href="https://www.finmoorhouse.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fin Moorhouse
      </a>{" "}
      and{" "}
      <a
        href="https://www.lucarighetti.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Luca Righetti
      </a>
      . Luca is a Research Fellow at{" "}
      <a
        href="https://openphilanthropy.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Philanthropy
      </a>
      , and Fin is a Research Scholar at the{" "}
      <a
        href="https://www.fhi.ox.ac.uk"
        target="_blank"
        rel="noopener noreferrer"
      >
        Future of Humanity Institute
      </a>
      . <sup>*</sup>
    </p>
    <p className="introduction">
      We write an accompanying article{" "}
      <a
        href="https://www.hearthisidea.com/episodes"
        target="_blank"
        rel="noopener noreferrer"
      >
        for each episode
      </a>{" "}
      which includes a full transcript, reading recommendations, and as many
      links as we can find. You can browse all our guests' recommendations on
      our <Link to="/library">library page</Link>.
    </p>
    <h2>Where to listen</h2>

    <div className="listen-container">
      <a
        className="listen"
        href="https://open.spotify.com/show/442fxr9pe0tbDtqEikODch"
        target="_blank"
        rel="noopener noreferrer"
      >
        Spotify
      </a>
      <a
        className="listen"
        href="https://pca.st/5bclatq6"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pocket Casts
      </a>
      <a
        className="listen"
        href="https://podcasts.apple.com/gb/podcast/hear-this-idea/id1496501781"
        target="_blank"
        rel="noopener noreferrer"
      >
        Apple Podcasts
      </a>
      <a
        className="listen"
        href="https://podcasts.google.com/?feed=aHR0cHM6Ly9waW5lY2FzdC5jb20vZmVlZC9oZWFyLXRoaXMtaWRlYQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Podcasts
      </a>
      <a
        className="listen"
        href="https://www.youtube.com/channel/UC4PUKlWKfBOojMBnb9P5thw"
        target="_blank"
        rel="noopener noreferrer"
      >
        YouTube
      </a>
      <a
        className="listen"
        href="https://pnc.st/s/hear-this-idea"
        target="_blank"
        rel="noopener noreferrer"
      >
        Other Podcast Apps
      </a>
    </div>
    <h2>Feedback</h2>
    <p className="introduction">
      We value feedback of any kind, and you can leave some through our{" "}
      <a
        href="https://tally.so/r/nPd680"
        target="_blank"
        rel="noopener noreferrer"
      >
        feedback form
      </a>
      . As a thank you for taking time to leave feedback, you'll be able to{" "}
      <b>redeem a free book</b> from a list of books that we highly recommend.
      You're welcome to fill out the form anonymously.
    </p>
    <div className="listen-container">
      <a
        className="listen"
        href="https://tally.so/r/nPd680"
        target="_blank"
        rel="noopener noreferrer"
      >
        Give us feedback &#8594;
      </a>
    </div>
    <h2>Social media</h2>
    <p className="introduction">
      Guest suggestions, questions, and hate mail should be directed to{" "}
      <span className="obfuscate">
        moc.aedisi<span></span>htraeh@olleh
      </span>
      .
    </p>
    <p className="introduction">
      You can also find us on Facebook and Twitter:
    </p>
    <div className="listen-container">
      <a
        className="listen"
        href="https://twitter.com/hearthisidea"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      <a
        className="listen"
        href="https://www.facebook.com/hearthisidea"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
    </div>
    <h2>The team</h2>
    <p className="introduction">
      This show is made possible by our amazing producer and editor{" "}
      <a
        href="https://www.jasoncotrebil.com/en/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jason Cotrebil
      </a>
      .
    </p>
    <p className="introduction">
      Big thanks also to{" "}
      <a
        href="https://www.linkedin.com/in/claudia-moorhouse-584077206/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Claudia
      </a>{" "}
      for creating full transcripts of each episode, and to{" "}
      <a
        href="https://jonas-kgomo.github.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jonas Kgomo
      </a>{" "}
      for helping improve this website.
    </p>
    <h2>Support the show</h2>
    <p className="introduction">
      The best way to support the show is to leave an honest rating on{" "}
      <a
        href="https://podcasts.apple.com/gb/podcast/hear-this-idea/id1496501781"
        target="_blank"
        rel="noopener noreferrer"
      >
        Apple Podcasts
      </a>
      ,{" "}
      <a
        href="https://open.spotify.com/show/442fxr9pe0tbDtqEikODch"
        target="_blank"
        rel="noopener noreferrer"
      >
        Spotify
      </a>
      , or elsewhere. Written reviews are especially appreciated. You can also{" "}
      <Link to="/donate">tip the show here</Link>.
    </p>
    <hr />
    <p className="small-print">
      <sup>*</sup> Small print: Hear This Idea is an entirely personal project,
      and is not affiliated with our current employers!
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
