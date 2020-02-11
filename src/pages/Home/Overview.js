import React from "react";

export default ({ skills }) => (
  <section className="overview home">
    <div className="container">
      <h2 className="title">{skills.title}</h2>
      <div className="intro">{skills.intro}</div>
      <div className="grid">
        {skills.list.map(skill => (
          <div className="grid-item" key={skill.name}>
            <div className="icons">
              {skill.icons.map((icon, index) => (
                <i
                  className={`${icon.icon} fa-3x`}
                  color={icon.color}
                  key={index}
                ></i>
              ))}
            </div>
            <div className="text">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
