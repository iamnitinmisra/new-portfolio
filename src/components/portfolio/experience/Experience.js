import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <div id="experience-container">
      <h2>Experience</h2>
      <div id="cards-container">
        <div className="card">
          <h3 className="xp-position text">Web Development Mentor</h3>
          <h4 className="xp-company text">DevMountain</h4>
          <div>
            <p className="xp-dates text">Jan 2020 - Present</p>
            <p className="xp-dates text">Phoenix, AZ</p>
          </div>
          <ul>
            <li>
              Taught multiple React stack technologies in a remote setting such
              as React, JavaScript, SQL, Express, and Session to students to
              best prepare them for a career in web development
            </li>
            <li>
              Hosted daily scrum meetings with students in order to keep them on
              track for graduation in a fast pace, bootcamp style curriculum
            </li>
            <li>
              Created lesson plans that were tailored to the needs of the
              students
            </li>
          </ul>
        </div>
        <div className="card">
          <h3 className="xp-position text">Full Stack Developer</h3>
          <h4 className="xp-company text">DevMountain Student Developers</h4>
          <div>
            <p className="xp-dates text">Sept 2019 - Dec 2019</p>
            <p className="xp-dates text">Phoenix, AZ</p>
          </div>
        </div>
        <div className="card">
          <h3 className="xp-position text">Program Manager</h3>
          <h4 className="xp-company text">Blackhawk Network</h4>
          <div>
            <p className="xp-dates text">Jan 2017 - Apr 2019</p>
            <p className="xp-dates text">Phoenix, AZ</p>
          </div>
        </div>
        <div className="card">
          <h3 className="xp-position text">Assistant Program Manager</h3>
          <h4 className="xp-company text">Belkin International</h4>
          <div>
            <p className="xp-dates text">Feb 2012 - July 2016</p>
            <p className="xp-dates text">Los Angeles, CA</p>
          </div>
        </div>
      </div>
        <button id='resume-btn'>Printable Resume</button>    
    </div>
  );
}
