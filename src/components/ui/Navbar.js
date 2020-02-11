import React from "react";

export default function Navbar() {
  return (
    <div className="navbar-mobile">
      <div className="name">Riccardo Sacco</div>
      <button className="hamburger" onClick={e => console.log(e)}>
        <i className="fa fa-bars fa-2x"></i>
      </button>
    </div>
  );
}
