import React from "react";
import "./Experience.css";
import printer from '../../../assets/printer.png'

export default function Experience() {
  return (
    <div id="experience-container">
      <h2>Experience</h2>
      <div id="resume-btn">
        <a
          href="https://docs.google.com/document/d/1FkyPT2fgaC4Kes2Qj4lOGzWtddRUnUXQUduliRxIAjk/"
          target="_blank"
          className="print-resume-btn"
          rel="noopener noreferrer"
        >
          <img id='printer-icn' src={printer} />
        </a>
      </div>
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
              Educate 100+ students around React stack technologies such as
              React, Redux, SQL, Express, of which many have gone on to
              successfully gain employment as a software engineer
            </li>
            <li>
              Implement cloud storage solutions using Amazon Web Services (S3)
              which allows our users to upload their multimedia to be displayed
              on the web app. This allowed the app to become dynamic to each
              individual user
            </li>
            <li>
              Troubleshoot student’s code rapidly as student’s develop their own
              personal projects using the stack we teach, React/Node/SQL
            </li>
            <li>
              Manage daily scrum meetings with students in order to keep them on
              track for graduation in a fast pace, bootcamp style curriculum and
              practice Agile methodologies
            </li>
            <li>
              Ensure student’s full stack projects and assignments met all
              requirements through JEST
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
            <p className="xp-dates text">Sept 2019 - Dec 2019</p>
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
              Utilized AJAX/Axios calls to external APIs that converted a user’s
              zip code to geo-graphical coordinates; then using that data
              returned JSON about eh viewable times a specific satellite would
              be viewable from the user’s specific location
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
            <p className="xp-dates text">Jan 2017 - Apr 2019</p>
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
              metrics, which were used to present corporate health statistics to
              the company’s stakeholders
            </li>
            <li>
              Reconciled accounts whenever a partner discrepancy was brought to
              the attention of Settlement Operations
            </li>
            <li>
              Implemented new best practices to ensure down-time was kept to a
              minimum in partner payments once their account was activated if an
              error in the system occurred
            </li>
          </ul>
        </div>
        <div className="card">
          <h3 className="xp-position text">Assistant Program Manager</h3>
          <h4 className="xp-company text">Belkin International</h4>
          <div>
            <p className="xp-dates text">Feb 2012 - July 2016</p>
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
              Completed competitive analysis of the marketplace in the Consumer
              Networking space, creating product roadmaps based on current and
              foreseeable market trends and communicating customer
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
              sacrificing product quality. Variant products were able to launch
              a full week sooner under these new practices
            </li>
            <li>
              Utilized Oracle Agile PLM to create, maintain, and manage product
              BOM and its lifecycle
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
