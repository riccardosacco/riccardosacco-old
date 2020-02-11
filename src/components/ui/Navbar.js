import React from "react";

export default function Navbar() {
  const toggleNavbar = e => {
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");
    const hamburger = document.querySelector(".hamburger");
    // If sidebar is already open
    if (sidebar.style.marginLeft !== "0px") {
      sidebar.style.marginLeft = "0px";
      overlay.style.opacity = 1;
      hamburger.classList.add("change");
    } else {
      sidebar.style.marginLeft = null;
      overlay.style.opacity = 0;
      hamburger.classList.remove("change");
    }
  };
  return (
    <>
      <div className="overlay" onClick={toggleNavbar}></div>
      <div className="navbar-mobile">
        <div className="name">Riccardo Sacco</div>
        <div className="hamburger" onClick={toggleNavbar}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        {/* <button className="hamburger" onClick={toggleNavbar}>
          <i className="fa fa-bars fa-2x"></i>
        </button> */}
      </div>
    </>
  );
}
