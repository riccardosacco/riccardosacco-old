import React from "react";
import { Link } from "react-router-dom";

export default ({ icon, text, href = "/" }) => (
  <Link to={href} className="button">
    <i className={`${icon} fa-fw mr-2`}></i>
    {text}
  </Link>
);
