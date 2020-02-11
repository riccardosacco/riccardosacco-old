import React from "react";

import Social from "./Social";
import Nav from "./Nav";
import Button from "../ui/Button";

const Switch = () => {
  return (
    <label className="switch">
      <input type="checkbox" onChange={e => console.log(e.target.checked)} />
      <span className="slider round" />
    </label>
  );
};

const Sidebar = ({ name, avatar, bio, social, navigation }) => {
  return (
    <div className="sidebar">
      <h1 className="name">{name}</h1>
      <img className="avatar" src={avatar} alt={name} />
      <p className="bio">{bio}</p>
      <Social social={social} />
      <hr />
      <Nav navItems={navigation} />
      <hr />
      <h4 className="toggle-mode mt-4">
        <i className="fa fa-adjust"></i> Dark Mode
      </h4>
      <Switch />
    </div>
  );
};

export default Sidebar;
