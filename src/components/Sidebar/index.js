import React from "react";
import { Link } from "react-router-dom";

import Social from "../../components/ui/Social";
import Nav from "./Nav";
import Contacts from "./Contacts";

import Context from "../../context";

const Sidebar = () => {
  return (
    <Context.Consumer>
      {context => {
        const {
          name,
          avatar,
          bio,
          social,
          navigation,
          contacts
        } = context.settings;
        return (
          <>
            <div className="sidebar">
              <div>
                <Link to="/">
                  <h2 className="name">{name}</h2>
                </Link>
                <img className="avatar" src={avatar} alt={name} />
                <p className="bio">{bio}</p>
                <Social social={social} />
                <Nav navItems={navigation} />
              </div>
              <Contacts contacts={contacts} />
            </div>
          </>
        );
      }}
    </Context.Consumer>
  );
};

export default Sidebar;
