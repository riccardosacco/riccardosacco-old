import React, { useEffect, useContext } from "react";

import Context from "../../context";

import PortfolioGrid from "../../components/Portfolio";

const Portfolio = ({ title }) => {
  //Change document title
  useEffect(() => {
    document.title = title;
  });

  const { portfolio } = useContext(Context).settings;

  return (
    <div className="portfolio page">
      <div className="container">
        <h2>{portfolio.title}</h2>
        <PortfolioGrid portfolio={portfolio.projects} page="/portfolio" />
      </div>
    </div>
  );
};

export default Portfolio;
