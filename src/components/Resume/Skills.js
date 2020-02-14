import React from "react";

const SkillItem = ({ value, icon }) => (
  <li>
    {icon && <i className={`${icon.name} fa-fw`} color={icon.color}></i>}
    {value}
  </li>
);

const SkillTopic = ({ topic, list }) => (
  <div className="skills-topic">
    <div className="skill-title">{topic}</div>
    <ul>
      {list.map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </ul>
  </div>
);

const Skills = ({ title, items }) => (
  <div className="skills">
    <h3 className="resume-section-heading">{title}</h3>
    <div className="skills-container">
      {items.map((topic, index) => (
        <SkillTopic key={index} {...topic} />
      ))}
    </div>
  </div>
);
export default Skills;
