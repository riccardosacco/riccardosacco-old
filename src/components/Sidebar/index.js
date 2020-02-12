import React from "react";

import Social from "./Social";
import Nav from "./Nav";

const Sidebar = ({ name, avatar, bio, social, navigation }) => {
  return (
    <div className="sidebar">
      <h2 className="name">{name}</h2>
      <img className="avatar" src={avatar} alt={name} />
      <p className="bio">{bio}</p>
      <Social social={social} />
      <Nav navItems={navigation} />
    </div>
  );
};

export default Sidebar;
