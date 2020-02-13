import React from "react";

export default function Navbar() {
  const toggleNavbar = e => {
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar-overlay");
    const hamburger = document.querySelector(".hamburger");
    // If sidebar is already open
    if (sidebar.style.marginLeft !== "0px") {
      sidebar.style.marginLeft = "0px";
      overlay.style.opacity = 1;
      overlay.style.visibility = "initial";
      hamburger.classList.add("change");
    } else {
      sidebar.style.marginLeft = null;
      overlay.style.opacity = 0;
      overlay.style.visibility = null;
      hamburger.classList.remove("change");
    }
  };
  return (
    <>
      <div className="navbar-mobile">
        <div className="sidebar-overlay" onClick={toggleNavbar}></div>
        <h1 className="name">Riccardo Sacco</h1>
        <div className="hamburger" onClick={toggleNavbar}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </>
  );
}
