import React from "react";

import WorkItem from "./WorkItem";

const Projects = ({ projects }) => (
  <div className="projects">
    <h3 className="resume-section-heading">{projects.title}</h3>
    <div className="works-container">
      {projects.items.map((work, index) => (
        <WorkItem key={index} {...work} />
      ))}
    </div>
  </div>
);

export default Projects;
