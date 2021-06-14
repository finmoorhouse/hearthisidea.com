import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About the show</h1>
    <hr className="line" />
    <p className="introduction">
      Hear This Idea is a podcast showcasing new thinking in philosophy, the social sciences, and effective altruism. It's hosted by long-time friends <a href="https://www.finmoorhouse.com" target="_blank" rel="noopener noreferrer">Fin</a> and <a href="https://www.lucarighetti.com" target="_blank" rel="noopener noreferrer">Luca</a>, currently both research scholars at Oxford University's <a href="https://www.fhi.ox.ac.uk/" target="_blank" rel="noopener noreferrer">Future of Humanity Institute</a>. Our guest criteria are: we find them interesting, and we want an excuse to talk to them. We write an in-depth accompanying article <a href="https://www.hearthisidea.com/episodes" target="_blank" rel="noopener noreferrer">for each episode</a>, which goes beyond the interview with reflections, reading recommendations, and extra research. You can browse all our guests' recommendations on our <Link to="/library">library page</Link> and our own recommendations <Link to="/recommendations">here</Link>. 
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
        href="https://pnc.st/s/hear-this-idea"
        target="_blank"
        rel="noopener noreferrer"
      >
        More
      </a>
    </div>
    <h2>Social media</h2>
    <p className="introduction">
      We value feedback of any kind, and you can leave some through our{" "}
      <a
        href="https://forms.gle/TvDjN1f7wRgGokfy8"
        target="_blank"
        rel="noopener noreferrer"
      >
        anonymous feedback form.
      </a>{" "}
      Guest suggestions, questions, and hate mail should be directed to{" "}
      <span className="obfuscate">
        moc.aedisi<span></span>htraeh@olleh
      </span>
      . You can also find us on Facebook and Twitter:
    </p>
    <div className="listen-container">
      <a
        className="listen"
        href="https://www.facebook.com/hearthisidea"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <a
        className="listen"
        href="https://twitter.com/hearthisidea"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </div>
    <p className="introduction">
      Finally, you can tip the show <Link to="/donate">here</Link>.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
