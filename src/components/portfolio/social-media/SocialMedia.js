import React from "react";
import "./SocialMedia.css";
import gitHubLogo from "../../../assets/GitHub-Mark-32px.png";
import linkedInLogo from "../../../assets/LI-In-Bug.png";
import instagramLogo from "../../../assets/IG_logo.png";

export default function SocialMedia() {
  return (
    <div id="social-media-container">
      <a href="https://github.com/iamnitinmisra" target="_blank" rel="noopener noreferrer">
        <img id="github-logo" src={gitHubLogo} alt="GitHub Logo" />
      </a>
      <a href="https://www.linkedin.com/in/misra-nitin/" target="_blank" rel="noopener noreferrer">
        <img id="social-media-logos" src={linkedInLogo} alt="LinkedIn Logo" />
      </a>
      <a href="https://www.instagram.com/iamnitinmisra" target="_blank" rel="noopener noreferrer">
        <img id="social-media-logos" src={instagramLogo} alt="Instagram Logo" />
      </a>    
    </div>
  );
}
