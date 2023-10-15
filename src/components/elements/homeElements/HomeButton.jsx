import React from "react";
import { Link } from "react-router-dom";

function HomeButton(props) {
  const { to, children, classname } = props;
  return (
    <>
      <a href={to}>
        <button
          className={`${classname} bg-blue-600 text-white duration-300 ease-in-out trasition-all hover:scale-105 py-2 `}
        >
          {children}
        </button>
      </a>
    </>
  );
}

export default HomeButton;
