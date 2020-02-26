import React from "react";

import PortfolioItem from "./PortfolioItem";

const PortfolioGrid = ({ portfolio, items, page }) => {
  if (items) {
    portfolio = portfolio.slice(0, items);
  }
  return (
    <div
      className={`portfolio-grid${
        page === "/portfolio" ? " portfolio-page" : ""
      }`}
    >
      {portfolio.map((project, index) => (
        <PortfolioItem key={index} project={project} page={page} />
      ))}
    </div>
  );
};

export default PortfolioGrid;
