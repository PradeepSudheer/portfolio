import React from 'react'

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

//images import
import meetup from "../images/meetup.jpg";
import socialmedia from "../images/socialmedia.png";
import spotify from "../images/spotify.png";
import LZWcompression from "../images/lzw_compression.jpg";


const Projects = () => {
    
    const openPopupboxmeetup = () => {
        const content = (
          <>
            <img className="portfolio-image-popupbox" src={meetup} alt="meetup Clone Project..." />
            <p>Interactive web appplication using ExpressJS, EJS, Mongoose, Session Management, Input Error Handling.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/PradeepSudheer/gosport")}>https://github.com/PradeepSudheer/meetup-project</a>
          </>
        )
        PopupboxManager.open({ content })
      }
    
      const popupboxConfigmeetup = {
        titleBar: {
          enable: true,
          text: "meetup clone project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

  
  const openPopupboxsocialmedia = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={socialmedia} alt="social media Project..." />
        <p>Minimal social media web application using NodeJS, GraphQL, ReactJS, Mongoose</p>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/PradeepSudheer/PostingWebApplication", "_blank")}>https://github.com/PradeepSudheer/socialmedia</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigsocialmedia = {
    titleBar: {
      enable: true,
      text: "social media App project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  
  const openPopupboxSpotify = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={spotify} alt="Spotify Project..." />
        <p>Music Player Android application with OkHTTP, RecyclerView, FireBaseAuthentication, FireBaseFirestore</p>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/PradeepSudheer/SpotifyClone", "_blank")}>https://github.com/PradeepSudheer/SpotifyClone</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigSpotify = {
    titleBar: {
      enable: true,
      text: "Android Music Player Application"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  
  const openPopupboxLZWcompression = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={LZWcompression} alt="LZW Compression  Project..." />
        <p>Implemented LZW compression Algorithm to compress .txt files to .LZW files and decompress .LZW files to .txt files</p>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/PradeepSudheer/LZWCompression", "_blank")}>https://github.com/PradeepSudheer/LZWCompression</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigLZWcompression = {
    titleBar: {
      enable: true,
      text: "LZW Compression project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

    return (
        <div id='projects' className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">projects</h1>
                <p>Click to View Details</p>
                <div className="image-box-wrapper row justify-content-center">
                  
                    <div className="portfolio-image-box" onClick={openPopupboxmeetup}>
                        <img className="portfolio-image" src={meetup} alt="meetup Clone Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxsocialmedia}>
                        <img className="portfolio-image" src={socialmedia} alt="social media Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxSpotify}>
                        <img className="portfolio-image" src={spotify} alt="Spotify clone Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxLZWcompression}>
                        <img className="portfolio-image" src={LZWcompression} alt="LZW compression Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigmeetup} />
            <PopupboxContainer {...popupboxConfigsocialmedia} />
            <PopupboxContainer {...popupboxConfigSpotify} />
            <PopupboxContainer {...popupboxConfigLZWcompression} />
        </div>
    )
}

export default Projects;
