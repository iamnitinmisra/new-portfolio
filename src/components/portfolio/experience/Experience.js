import React from "react";
import "./Experience.css";
import printer from "../../../assets/printer.png";
import {
  // Link,
  // animateScroll as scroll,
  Element,
} from "react-scroll";
export default function Experience() {
  return (
    <Element name="experience1" className="element">
      <div id="experience-container">
        <h2 className="roboto">Experience</h2>
        <div id="resume-btn">
          <a
            href="https://docs.google.com/document/d/1FkyPT2fgaC4Kes2Qj4lOGzWtddRUnUXQUduliRxIAjk/"
            target="_blank"
            className="print-resume-btn"
            rel="noopener noreferrer"
          >
            <img id="printer-icn" src={printer} alt="print" />
          </a>
        </div>
        <div id="cards-container">
          <div className="card">
            <h3 className="xp-position text">Web Development Instructor</h3>
            <h4 className="xp-company text">DevMountain</h4>
            <div>
              <p className="xp-dates text">April 2021 - Present</p>
              <p className="xp-dates text">Phoenix, AZ</p>
            </div>
            <ul>
              <li>
                Provide education on the technical subjects of JavaScript,
                Python, Nodejs, and PostgreSQL through live online lectures
              </li>
              <li>
                Educate multiple students around the Reactjs library and related
                technologies such as Express and Redux to prepare them for a
                career in full stack web development
              </li>
              <li>
                Instruct students on the principles of an Agile methodology
                geared towards development
              </li>
              <li>
                Implement cloud storage solutions using Amazon Web Services,
                particularly S3
              </li>
              <li>
                Manage daily scrum meetings with students in order to keep them
                on track for graduation in a fast pace, bootcamp style
                curriculum
              </li>
            </ul>
          </div>
          <div className="card">
            <h3 className="xp-position text">Web Development Mentor</h3>
            <h4 className="xp-company text">DevMountain</h4>
            <div>
              <p className="xp-dates text">January 2020 - April 2021</p>
              <p className="xp-dates text">Phoenix, AZ</p>
            </div>
            <ul>
              <li>
                Debugged code rapidly as student’s develop their own personal
                projects using the stack we teach, React/Node/SQL
              </li>
              <li>
                Over sought the implementation of many NPM libraries in
                student’s personal coding projects
              </li>
              <li>
                Ensured student’s full stack projects and assignments met all
                requirements through JEST testing
              </li>
              <li>
                Create lesson plans that were tailored to the needs of the
                students
              </li>
            </ul>
          </div>
          <div className="card">
            <h3 className="xp-position text">Full Stack Developer</h3>
            <h4 className="xp-company text">DevMountain Student Developers</h4>
            <div>
              <p className="xp-dates text">September 2019 - December 2019</p>
              <p className="xp-dates text">Phoenix, AZ</p>
            </div>
            <ul>
              <li>
                Created a full stack satellite viewing app using React.js which
                utilized NPM and included an Express server, JavaScript,
                PostgreSQL, Bcrypt, Redux, and responsive design
              </li>
              <li>
                Tested the backend server using tools such as Postman to ensure
                API endpoints were RESTful and functioning to the design
              </li>
              <li>
                Utilized AJAX/Axios calls to external APIs that converted a
                user’s zip code to geo-graphical coordinates; then using that
                data returned JSON about eh viewable times a specific satellite
                would be viewable from the user’s specific location
              </li>
              <li>
                Utilized Express-Session to send the users geographical location
                to Redux, enabling it to be utilized in various components
              </li>
            </ul>
          </div>
          <div className="card">
            <h3 className="xp-position text">Program Manager</h3>
            <h4 className="xp-company text">Blackhawk Network</h4>
            <div>
              <p className="xp-dates text">January 2017 - April 2019</p>
              <p className="xp-dates text">Phoenix, AZ</p>
            </div>
            <ul>
              <li>
                Partnered with Finance, Accounting, and Settlement to ensure end
                to end requirements were met for every new customer onboarding
              </li>
              <li>
                Trained partners on how to review their reconciliation data to
                ensure every penny was accounted
              </li>
              <li>
                Provided executive management with SLA reporting for period-end
                metrics, which were used to present corporate health statistics
                to the company’s stakeholders
              </li>
              <li>
                Reconciled accounts whenever a partner discrepancy was brought
                to the attention of Settlement Operations
              </li>
              <li>
                Implemented new best practices to ensure down-time was kept to a
                minimum in partner payments once their account was activated if
                an error in the system occurred
              </li>
            </ul>
          </div>
          <div className="card">
            <h3 className="xp-position text">Assistant Program Manager</h3>
            <h4 className="xp-company text">Belkin International</h4>
            <div>
              <p className="xp-dates text">February 2012 - July 2016</p>
              <p className="xp-dates text">Los Angeles, CA</p>
            </div>{" "}
            <ul>
              <li>
                Defined, launched, and managed Consumer Networking related
                products with new technologies and solutions for Global and
                particularly North America, EMEA, and APAC operators and open
                market channels which are still sold today such as the WUSB6100M
              </li>
              <li>
                Completed competitive analysis of the marketplace in the
                Consumer Networking space, creating product roadmaps based on
                current and foreseeable market trends and communicating customer
                insights/requirements to research and development
              </li>
              <li>
                Worked closely with cross-functional teams through the concept,
                development, pre-production builds, ramp-up production, and full
                production phases ensuring products released on time and within
                budget
              </li>
              <li>
                Developed a system of business practices that resulted in faster
                Time to Market product launches on a global scale without
                sacrificing product quality. Variant products were able to
                launch a full week sooner under these new practices
              </li>
              <li>
                Utilized Oracle Agile PLM to create, maintain, and manage
                product BOM and its lifecycle
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Element>
  );
}
