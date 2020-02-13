import React from "react";

import Button from "../../components/ui/Button";

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

const Portfolio = ({ portfolio }) => (
  <section className="portfolio home">
    <div className="container">
      <h2>My portfolio</h2>
      <p>Some of my works</p>
      <div className="portfolio-grid">
        {portfolio.slice(0, 6).map(project => (
          <PortfolioItem project={project} />
        ))}
      </div>
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
