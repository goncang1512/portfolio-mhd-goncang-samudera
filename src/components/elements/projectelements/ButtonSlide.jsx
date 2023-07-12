import React from "react";

function ButtonSlide(props) {
  const { href, children } = props;
  return (
    <>
      <a href={href} className="btn btn-xs">
        {children}
      </a>
    </>
  );
}

export default ButtonSlide;
