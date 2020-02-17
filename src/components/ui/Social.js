import React from "react";

const Social = ({ social, center = false }) => (
  <div className={`social${center ? " center" : ""}`}>
    {social.map(item => (
      <a
        key={item.name}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ background: item.color && item.color }}
      >
        <i className={`fab fa-${item.name}`}></i>
      </a>
    ))}
  </div>
);

export default Social;
