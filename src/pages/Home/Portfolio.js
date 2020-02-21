import React, { useContext } from "react";

import Context from "../../context";

import Button from "../../components/ui/Button";

import PortfolioGrid from "../../components/Portfolio";

const Portfolio = () => {
  const { portfolio } = useContext(Context).settings;

  return (
    <section className="portfolio home">
      <div className="container">
        <h2>{portfolio.title}</h2>
        <p>{portfolio.subtitle}</p>
        <PortfolioGrid items={6} portfolio={portfolio.projects} page="/" />
        <div className="portfolio-button">
          <Button
            href="/portfolio"
            text="View Portfolio"
            icon="fa fa-laptop-code"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
