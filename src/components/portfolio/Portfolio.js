import React from "react";
import "./Portfolio.css";
import HamMenu from "../ham-menu/HamMenu";

export default function Portfolio() {
  return (
    <div className="outer-container">
      <div className="portfolio-too-small">
        Your screen resolution is too small, please view my page on a larger
        screen for a better experience
      </div>
      <div className="inner-container">
        <header className="navigation-bar">
          <div className="name-text">Nitin Misra</div>
          <div>
            <div className="ham-icon">
              <HamMenu />
            </div>
            <ul className="menu">
              <a href="http://www.iamnitinmisra.com">
                <li id="nav">Home</li>
              </a>
              <a href="http://www.iamnitinmisra.com">
                <li id="nav">Resume</li>
              </a>
              <a href="http://www.iamnitinmisra.com">
                <li id="nav">Projects</li>
              </a>
              <a href="http://www.iamnitinmisra.com">
                <li id="nav">Contact</li>
              </a>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
}
