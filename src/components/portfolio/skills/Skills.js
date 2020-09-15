import React from "react";
import "./Skills.css";
import gitLogo from "../../../assets/git_logoo.png";
import reactLogo from "../../../assets/React-01.png";
import nodeLogo from "../../../assets/nodejs.png";
import jsLogo from "../../../assets/JavaScript_Logo.png";
import html5Logo from "../../../assets/html5_logo.png";
import css3Logo from "../../../assets/css3.png";
import postgresqlLogo from "../../../assets/postgresql_logo.png";
import mongoDBLogo from "../../../assets/mongodb_logo.png";
import awsLogo from "../../../assets/aws_logo.png";

export default function Skills() {
  return (
    <div id="skills-container">
      <h2>Skills</h2>
      <div id="logos-container">
        <div className="skills-logo-container">
          <img src={gitLogo} className="skill-logo" alt="Git Logo" />
          <h3>Git</h3>
        </div>
        <div id="react-logo-container">
          <img src={reactLogo} className="skill-logo" alt="React Logo" />
          <h3 id="react-text">React.js</h3>
        </div>
        <div className="skills-logo-container">
          <img src={nodeLogo} className="skill-logo" alt="Node Logo" />
          <h3>Node.js</h3>
        </div>
        <div className="skills-logo-container">
          <img src={jsLogo} className="skill-logo" alt="JavaScript Logo" />
          <h3>JavaScript</h3>
        </div>
        <div className="skills-logo-container">
          <img src={html5Logo} className="skill-logo" alt="HTML 5 Logo" />
          <h3>HTML 5</h3>
        </div>
        <div className="skills-logo-container">
          <img src={css3Logo} className="skill-logo" alt="CSS 3 Logo" />
          <h3>CSS 3</h3>
        </div>
        <div className="skills-logo-container">
          <img
            src={postgresqlLogo}
            className="skill-logo"
            alt="postgreSQL Logo"
          />
          <h3>PostgreSQL</h3>
        </div>
        <div className="skills-logo-container">
          <img src={mongoDBLogo} className="skill-logo" alt="MongoDB Logo" />
          <h3>MongoDB</h3>
        </div>
        <div className="skills-logo-container">
          <img src={awsLogo} className="skill-logo" alt="Amazon AWS Logo" />
          <h3>AWS</h3>
        </div>
      </div>
    </div>
  );
}
