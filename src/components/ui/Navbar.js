import React from "react";

export default function Navbar() {
  const toggleNavbar = e => {
    console.log(e);
  };
  return (
    <div className="navbar-mobile">
      <div className="name">Riccardo Sacco</div>
      <button className="hamburger" onClick={toggleNavbar}>
        <i className="fa fa-bars fa-2x"></i>
      </button>
    </div>
  );
}
