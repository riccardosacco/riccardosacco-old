import React from "react";
import { Link } from "react-router-dom";

export default ({ icon, text, href = "/", backgroundColor, color }) => (
  <Link to={href} className="button" style={{ backgroundColor, color }}>
    {icon && <i className={`${icon} fa-fw mr-2`}></i>}
    {text}
  </Link>
);
