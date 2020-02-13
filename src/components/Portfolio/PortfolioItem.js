import React from "react";

const PortfolioItem = ({ project }) => (
  <div className="portfolio-item">
    <div className="overlay"></div>
    <div
      className="background"
      style={{
        backgroundImage: `url("img/portfolio/${project.screenshots[0]}")`
      }}
      alt={project.title}
    />
    <div className="details">
      <div className="title">{project.title}</div>
      <div className="technologies">{project.subtitle}</div>
    </div>
  </div>
);

export default PortfolioItem;
