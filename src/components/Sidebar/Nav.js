import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ path, icon, label }) => (
  <NavLink
    exact={path === "/" ? true : false}
    to={path}
    activeClassName="active"
  >
    <i className={`${icon} fa-fw mr-2`}></i> {label}
  </NavLink>
);

const Nav = ({ navItems }) => (
  <nav className="nav">
    {navItems.map(navItem => (
      <NavItem {...navItem} />
    ))}
  </nav>
);

export default Nav;
