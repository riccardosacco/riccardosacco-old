import React from "react";
import { Link } from "react-router-dom";

import slugify from "slugify";

const PortfolioItem = ({ project }) => (
  <Link to={`/portfolio/${slugify(project.title).toLowerCase()}`}>
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
  </Link>
);

export default PortfolioItem;
