import React from "react";
import "./NavBar.css";
import {
  Link,
  // animateScroll as scroll,
  // scrollSpy,
  // scroller,
} from "react-scroll";

export default function Content(props) {
  return (
    <ul className={props.isToggled ? "show-nav-links" : "nav-links"}>
      {/* <a href="#"> */}
      <li id="home">
        <Link
          activeClass="roboto"
          className="home"
          to="home1"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          Home
        </Link>
      </li>
      {/* </a> */}
      {/* <a href="#"> */}
      <li id="link">
        <Link
          activeClass="roboto"
          className="skills1"
          to="skills1"
          spy={true}
          smooth={true}
          duration={500}
          offset={-30}
        >
          Skills
        </Link>
      </li>
      {/* </a> */}
      {/* <a href="#"> */}

      <li id="link">
        <Link
          activeClass="roboto"
          className="experience1"
          to="experience1"
          spy={true}
          smooth={true}
          duration={500}
          offset={-30}
        >
          Experience
        </Link>
      </li>
      {/* </a> */}
      {/* <a href="#"> */}
      <li id="link">
        <Link
          activeClass="roboto"
          className="projects1"
          to="projects1"
          spy={true}
          smooth={true}
          duration={500}
          offset={0}
        >
          Projects
        </Link>
      </li>
      {/* </a> */}

      <li id="link">
        <a
          href="https://docs.google.com/document/d/1FkyPT2fgaC4Kes2Qj4lOGzWtddRUnUXQUduliRxIAjk/"
          target="_blank"
          className="print-resume-btn"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </li>
    </ul>
  );
}
