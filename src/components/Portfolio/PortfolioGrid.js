import React from "react";

import PortfolioItem from "./PortfolioItem";

const PortfolioGrid = ({ portfolio }) => (
  <div className="portfolio-grid">
    {portfolio.slice(0, 6).map((project, index) => (
      <PortfolioItem key={index} project={project} />
    ))}
  </div>
);

export default PortfolioGrid;
