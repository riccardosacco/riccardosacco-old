import React from "react";

const EducationItem = ({ school, title, icon, from, to }) => (
  <div className="education-item">
    <img src={`img/resume/${icon}`} alt="" />
    <div>
      <div className="education-title">{title}</div>
      <div className="education-school">{school}</div>
      <div className="education-date">{`${from} - ${to}`}</div>
    </div>
  </div>
);

const Education = ({ title, items }) => (
  <div className="education">
    <h3 className="resume-section-heading">{title}</h3>
    <div className="education-container">
      {items.map((education, index) => (
        <EducationItem key={index} {...education} />
      ))}
    </div>
  </div>
);

export default Education;
