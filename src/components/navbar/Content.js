import React from "react";
import "./NavBar.css";

export default function Content(props) {
  return (
    <ul className={props.isToggled ? "show-nav-links" : "nav-links"}>
      {/* <a href="#"> */}
      <li id="link" className="roboto">
        Home
      </li>
      {/* </a> */}
      {/* <a href="#"> */}
      <li id="link">Skills</li>
      {/* </a> */}
      {/* <a href="#"> */}
      <li id="link">Experience</li>
      {/* </a> */}
      {/* <a href="#"> */}
      <li id="link">Projects</li>
      {/* </a> */}
      {/* <a href="#"> */}
      <li id="link">Resume</li>
      {/* </a> */}
    </ul>
  );
}
