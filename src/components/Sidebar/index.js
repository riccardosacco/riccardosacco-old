import React from "react";

import Social from "./Social";
import Nav from "./Nav";
import Contacts from "./Contacts";

const Sidebar = ({ name, avatar, bio, social, contacts, navigation }) => {
  return (
    <div className="sidebar">
      <div>
        <h2 className="name">{name}</h2>
        <img className="avatar" src={avatar} alt={name} />
        <p className="bio">{bio}</p>
        <Social social={social} />
        <Nav navItems={navigation} />
      </div>
      <Contacts contacts={contacts} />
    </div>
  );
};

export default Sidebar;
