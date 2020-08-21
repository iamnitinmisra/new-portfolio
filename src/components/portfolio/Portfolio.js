import React from "react";
import HamMenu from "../ham-menu/HamMenu";
import Identity from "./identity/Identity"
import Biography from "./biography/Biography";
import Skills from "./skills/Skills"
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div id="outer-container">
      <div className="portfolio-too-small">
        Your screen resolution is too small, please view my page on a larger
        screen for a better experience
      </div>
      <div id="inner-container">
        <header className="navigation-bar">
          <div className="name-text">Nitin Misra</div>
          <HamMenu />
        </header>
        <div id='components-container'>
          <Identity />
          <Biography />
          <Skills />
        </div>
      </div>
    </div>
  );
}

