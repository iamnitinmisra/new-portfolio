import React, { Component } from "react";
import { Element } from "react-scroll";
import axios from "axios";
import ProjectsMapped from "./ProjectsMapped";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    axios.get("/api/projects").then((res) => {
      this.setState({
        projects: res.data,
      });
    });
  }

  render() {
    const display = this.state.projects.map((project) => {
      return <ProjectsMapped project={project} />;
    });
    return (
      <Element name="projects1" className="element">
        <div id="projects-container">{display}</div>
      </Element>
    );
  }
}
