import React from "react";

const Resume = () => (
  <div className="resume-document">
    <div className="resume-header">
      <div className="resume-title">
        <h2 className="resume-name">Riccardo Sacco</h2>
        <div className="resume-tagline">Full Stack Developer</div>
      </div>
      <div className="resume-contacts">
        <ul>
          <li>
            <a href="tel:3391848457">
              <i className="fas fa-phone-square-alt fa-fw mr-1"></i>
              <span>339 1848457</span>
            </a>
          </li>
          <li>
            <a href="mailto:riccardo@itwebservices.it">
              <i className="fas fa-envelope-square fa-fw mr-1"></i>
              <span>riccardo@itwebservices.it</span>
            </a>
          </li>
          <li>
            <a href="https://riccardosacco.com">
              <i className="fas fa-globe fa-fw mr-1"></i>
              <span>riccardosacco.com</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-map-marker-alt fa-fw mr-1"></i>
              <span>Milan, Italy</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr className="resume-divider" />
    <div className="resume-intro">
      <div className="resume-img"></div>
      <div className="resume-bio"></div>
    </div>
    <hr className="resume-divider" />
  </div>
);

export default Resume;
