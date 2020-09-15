import React from "react";
import "./Identity.css";
import profilePic from "../../../assets/profile-pic.png";
import SocialMedia from "../social-media/SocialMedia";
import Biography from "../biography/Biography";

export default function Identity() {
  return (
    <div id="identity-container">
      <div id="selfie-container">
        <img id="selfie" src={profilePic} alt="Profile Pic" />
        <div className="identity-history">
          <h3>Full Stack Developer | Certified Scrum Master</h3>
          <h3>React.js | JavaScript | Node.js | PostgreSQL</h3>
          <h3>Arizona State University | DevMountain</h3>
          <h3>Phoenix, AZ</h3>
          <SocialMedia />
        </div>
      </div>
      <div className="biography-comp-container">
        <Biography />
      </div>
    </div>
  );
}
