import React from "react";

import WorkItem from "./WorkItem";

const Works = ({ works }) => (
  <div className="works">
    <h3 className="resume-section-heading">{works.title}</h3>
    <div className="works-container">
      {works.items.map((work, index) => (
        <WorkItem key={index} {...work} />
      ))}
    </div>
  </div>
);

export default Works;
