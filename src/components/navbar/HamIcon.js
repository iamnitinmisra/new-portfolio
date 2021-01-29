import React from "react";
import "./NavBar.css";

export default function HamIcon(props) {
  return (
    <div
      onClick={() => props.toggleMenu()}
      className={props.isToggled ? "active" : "ham-menu"}
    >
      <div className="menu-icon"></div>
    </div>
  );
}
