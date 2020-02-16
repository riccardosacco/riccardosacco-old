import React from "react";

const Interests = ({ title, items }) => (
  <div className="interests">
    <h3 className="resume-section-heading">{title}</h3>
    <ul className="interests-container">
      {items.map((interest, index) => (
        <li key={index}>{interest.value}</li>
      ))}
    </ul>
  </div>
);

export default Interests;
