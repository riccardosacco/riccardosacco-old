import React from "react";

const LanguageItem = ({ language, level, icon }) => (
  <div className="language-item">
    {icon && <img src={`img/flags/${icon}.svg`} alt={language} />}
    <div className="language-details">
      <span className="language-name">{language}</span>
      <span className="language-level">{`(${level})`}</span>
    </div>
  </div>
);

const Languages = ({ title, items }) => (
  <div className="languages">
    <h3 className="resume-section-heading">{title}</h3>
    <div className="languages-container">
      {items.map((language, index) => (
        <LanguageItem key={index} {...language} />
      ))}
    </div>
  </div>
);

export default Languages;
