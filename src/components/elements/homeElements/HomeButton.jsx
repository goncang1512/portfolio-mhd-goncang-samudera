import React from "react";
import { Link } from "react-router-dom";

function HomeButton(props) {
  const { to, children, classname } = props;
  return (
    <>
      <Link to={to}>
        <button
          className={`download-button bg-blue-600 text-white hover:scale-105 py-2 ${classname}`}
        >
          {children}
        </button>
      </Link>
    </>
  );
}

export default HomeButton;
