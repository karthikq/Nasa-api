/** @format */

import React from "react";
import { Link } from "react-router-dom";
const Button = ({ className, title, path }) => {
  return (
    <button className={className}>
      <Link to={`/${path}`} className={path === "images" ? "link" : "link2"}>
        {title}
      </Link>
      <i class="fas fa-arrow-right"></i>
    </button>
  );
};

export default Button;
