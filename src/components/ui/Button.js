import React from "react";
import { Link } from "react-router-dom";

export default ({
  icon,
  text,
  href = "/",
  backgroundColor,
  color,
  onClick
}) => (
  <Link
    to={href}
    className="button"
    style={{ backgroundColor, color }}
    onClick={onClick}
  >
    {icon && <i className={`${icon} fa-fw mr-2`}></i>}
    {text}
  </Link>
);
