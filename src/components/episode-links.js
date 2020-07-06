import React from "react"
import "../styles/episode-links.scss"

const EpisodeLinks = (props) => {

    return (
        
        <div className="listen-container episode-links">
          <h4 className = "listen-title"><span role="img" aria-label="Headphones">🎧</span></h4>
          <a className = "listen listen-link" href={props.direct || "/"} target="_blank" rel="noopener noreferrer">Direct</a> 
          <a className = "listen listen-link" href={props.apple || "https://podcasts.apple.com/gb/podcast/hear-this-idea/id1496501781"} target="_blank" rel="noopener noreferrer">Apple</a> 
          <a className = "listen listen-link" href={props.google || "https://podcasts.google.com/?feed=aHR0cHM6Ly9waW5lY2FzdC5jb20vZmVlZC9oZWFyLXRoaXMtaWRlYQ"} target="_blank" rel="noopener noreferrer">Google</a> 
          <a className = "listen listen-link" href={props.spotify || "https://open.spotify.com/show/442fxr9pe0tbDtqEikODch"} target="_blank" rel="noopener noreferrer">Spotify</a> 
        </div>
       
    )
  }

  export default EpisodeLinks