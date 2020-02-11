import React from "react";

export default ({ skills }) => (
  <section className="overview home">
    <div className="container">
      <h2 class="title">{skills.title}</h2>
      <div className="intro">{skills.intro}</div>
      <div className="grid">
        {skills.list.map(skill => (
          <div className="grid-item">
            <div className="icons">
              {skill.icons.map(icon => (
                <i className={`${icon.icon} fa-3x`} color={icon.color}></i>
              ))}
            </div>
            <div className="text">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
