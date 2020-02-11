import React from "react";

export default ({ social }) => (
  <div className="social">
    {social.map(item => (
      <a
        key={item.name}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`fab fa-${item.name}`}></i>
      </a>
    ))}
  </div>
);
