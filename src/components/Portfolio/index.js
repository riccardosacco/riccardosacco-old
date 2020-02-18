import React from "react";

import PortfolioItem from "./PortfolioItem";

const PortfolioGrid = ({ portfolio, items }) => {
  if (items) {
    portfolio = portfolio.slice(0, items);
  }
  return (
    <div className="portfolio-grid">
      {portfolio.map((project, index) => (
        <PortfolioItem key={index} project={project} />
      ))}
    </div>
  );
};

export default PortfolioGrid;
