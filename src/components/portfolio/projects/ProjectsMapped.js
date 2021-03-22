import React from "react";
import Projects from "./Projects";

export default function ProjectsMapped(props) {
  const { project } = props;
  return (
    <div>
      <div>{project.projectName}</div>
      <div>{project.description}</div>
      <div>{project.technologies}</div>
    </div>
  );
}
