import React from "react";

import ReactHtmlParser from "react-html-parser";

const ResumeContactItem = ({ value, link, icon }) => (
  <li>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <i className={`${icon} fa-fw mr-1`}></i>
      <span>{value}</span>
    </a>
  </li>
);

const Heading = ({ name, job, contacts, avatar, bio }) => (
  <>
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
      {bio && <div className="resume-bio">{ReactHtmlParser(bio)}</div>}
    </div>
  </>
);

export default Heading;
