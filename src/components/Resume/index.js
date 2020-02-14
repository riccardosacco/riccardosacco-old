import React from "react";

import WorkItem from "./WorkItem";
import Skills from "./Skills";

const ResumeContactItem = ({ value, link, icon }) => (
  <li>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <i className={`${icon} fa-fw mr-1`}></i>
      <span>{value}</span>
    </a>
  </li>
);

const Resume = ({ name, job, contacts, avatar, bio, works, skills }) => (
  <div className="resume-document">
    <div className="resume-header">
      <div className="resume-title">
        <h2 className="resume-name">{name}</h2>
        <div className="resume-tagline">{job}</div>
      </div>
      <div className="resume-contacts">
        <ul>
          {contacts.map((contact, index) => (
            <ResumeContactItem key={index} {...contact} />
          ))}
        </ul>
      </div>
    </div>
    <div className="resume-intro">
      {avatar && <img src={avatar} alt={name} className="resume-img" />}
      {bio && <div className="resume-bio">{bio}</div>}
    </div>
    <div className="resume-main">
      <section>
        <h3 className="resume-section-heading">{works.title}</h3>
        <div className="works-container">
          {works.items.map((work, index) => (
            <WorkItem key={index} {...work} />
          ))}
        </div>
      </section>
      <section>
        <Skills {...skills} />
      </section>
    </div>
  </div>
);

export default Resume;
