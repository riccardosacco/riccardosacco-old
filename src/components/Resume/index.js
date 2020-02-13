import React from "react";

import WorkItem from "./WorkItem";

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
    <div className="resume-intro">
      <img src="img/avatar.png" alt="Riccardo Sacco" className="resume-img" />
      <div className="resume-bio">
        I’ve been passionate about programming since I was 13 and I love to
        learn. I believe in the learn-by-doing approach because I’ve always
        learned from mistakes. <br />I love my job so much that it doesn’t feel
        like I'm working. Sometimes I make decisions, sometimes I change my
        mind, but everytime I get to the best solution.
      </div>
    </div>
    <div className="resume-main">
      <section>
        <h3 className="resume-section-heading">Work Experiences</h3>
        <div className="work-container">
          <WorkItem />
          <WorkItem />
          <WorkItem />
          <WorkItem />
        </div>
      </section>
      <section>
        <h3 className="resume-section-heading">Skills</h3>
      </section>
    </div>
  </div>
);

export default Resume;
