import React, { useContext } from "react";

import Context from "../../context";

const Overview = () => {
  const { skills } = useContext(Context).settings;

  return (
    <section className="overview home">
      <div className="container">
        <h2 className="title">{skills.title}</h2>
        <div className="subtitle">{skills.subtitle}</div>
        <div className="grid">
          {skills.list.map(skill => (
            <div className="grid-item" key={skill.name}>
              <div className="icons">
                {skill.icons.map((icon, index) => (
                  <i
                    className={`${icon.icon} fa-2x`}
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
};

export default Overview;
