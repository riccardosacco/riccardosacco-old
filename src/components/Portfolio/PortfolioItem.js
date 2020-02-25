import React from "react";
import { Link } from "react-router-dom";

const PortfolioItem = ({ project, page }) => (
  <Link
    to={{
      pathname: `/portfolio/${project.slug}`,
      state: {
        page
      }
    }}
  >
    <div className="portfolio-item">
      <div className="overlay"></div>
      <div
        className="background"
        style={{
          backgroundImage: `url("img/portfolio/${project.slug}/${project.screenshots[0]}")`
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
