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
          <HamMenu />
        </header>
      </div>
    </div>
  );
}

