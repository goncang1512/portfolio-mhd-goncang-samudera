import React from "react";
import { Link } from "react-router-dom";

function RouteLink(props) {
  const { to, children } = props;
  return (
    <li className="list-menu">
      <a href={to} className="link-menu">
        {children}
      </a>
    </li>
  );
}

export default RouteLink;
