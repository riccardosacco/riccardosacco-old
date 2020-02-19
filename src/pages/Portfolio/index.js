import React, { useEffect } from "react";

import Context from "../../context";

import PortfolioGrid from "../../components/Portfolio";

const Portfolio = title => {
  //Change document title
  useEffect(() => {
    document.title = title;
  });

  return (
    <Context.Consumer>
      {context => {
        const { portfolio } = context.settings;
        return (
          <div className="portfolio page">
            <div className="container">
              <h2>{portfolio.title}</h2>
              <PortfolioGrid portfolio={portfolio.projects} />
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Portfolio;
