import React from "react";

export default ({ social }) => (
  <div className="social">
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
