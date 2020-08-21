import React from "react";
import "./Identity.css";
import profilePic from "../../../assets/profile-pic.png";
import SocialMedia from "../social-media/SocialMedia";

export default function Identity() {
  return (
      <div id="identity-container">
        <img id="selfie" src={profilePic} alt='Profile Pic'/>
        <div className="identity-history">
          <h3>Full Stack Developer | Certified Scrum Master</h3>
          <h3>React.js | JavaScript | Node.js | PostgreSQL</h3>
          <h3>Arizona State University | DevMountain</h3>
          <h3>Phoenix, AZ</h3>
        </div>
        <SocialMedia />
      </div>
  );
}
