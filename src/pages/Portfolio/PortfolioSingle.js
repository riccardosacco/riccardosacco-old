import React, { useEffect, useContext, useState } from "react";

import { Link } from "react-router-dom";

import { Carousel, Modal } from "react-bootstrap";

import ReactHtmlParser from "react-html-parser";

import Context from "../../context";

const PortfolioSingle = props => {
  const { portfolio, name } = useContext(Context).settings;

  const { slug } = props.match.params;

  const project = portfolio.projects.find(project => project.slug === slug);

  //Change document title
  useEffect(() => {
    document.title = `${project.title} - ${name}`;
  });

  const [modal, setModal] = useState(false);

  return (
    <div className="portfolio page">
      <Modal size="lg" show={modal} onHide={() => setModal(false)}>
        <Modal.Body>
          <Carousel>
            {project.screenshots.map((screenshot, index) => (
              <Carousel.Item>
                <img
                  className="portfolio-image d-block w-100"
                  src={`/img/portfolio/${screenshot}`}
                  alt={screenshot}
                  key={index}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
      <div className="container">
        <div className="project">
          <div className="project-navigation">
            <Link to={props.location.state.page}>
              <div className="button">
                <i className="fas fa-arrow-left"></i> Back
              </div>
            </Link>
            <div className="project-page-title">Project Details</div>
          </div>
          <div className="project-info">
            <div className="project-details">
              <div>
                <div className="title">{project.title}</div>
                <div className="subtitle">{project.subtitle}</div>
              </div>
              <div className="project-meta">
                {project.client && (
                  <div className="client">
                    <b>Client: </b>
                    {project.client}
                  </div>
                )}
                {project.website && (
                  <div className="website">
                    <b>Website: </b>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.website}
                    </a>
                  </div>
                )}
              </div>
              {project.technologies && (
                <div className="technologies">
                  {project.technologies.map((technology, index) => (
                    <div className="technology" key={index}>
                      <div className="name">{technology.name}</div>
                      <div className="values">
                        {technology.values.join(", ")}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              className="project-image"
              style={{
                backgroundImage: `url("/img/portfolio/${project.screenshots[0]}")`
              }}
              onClick={() => setModal(true)}
            ></div>
          </div>
          {project.description !== "" && (
            <div className="project-description">
              <h2>Project Overview</h2>
              {ReactHtmlParser(project.description)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSingle;
