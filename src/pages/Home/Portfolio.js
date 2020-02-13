import React from "react";

import Button from "../../components/ui/Button";

import PortfolioGrid from "../../components/Portfolio";

const Portfolio = ({ portfolio }) => (
  <section className="portfolio home">
    <div className="container">
      <h2>{portfolio.title}</h2>
      <p>{portfolio.subtitle}</p>
      <PortfolioGrid portfolio={portfolio.projects} />
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

export default Portfolio;
