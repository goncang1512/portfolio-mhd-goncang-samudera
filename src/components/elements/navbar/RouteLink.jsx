import React from "react";
import { Link } from "react-router-dom";

function RouteLink(props) {
  const { to, children } = props;
  return (
    <li className="list-menu">
      <Link to={to} className="link-menu">
        {children}
      </Link>
    </li>
  );
}

export default RouteLink;
