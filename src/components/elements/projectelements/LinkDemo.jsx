import React from "react";

function LinkDemo(props) {
  const { link, children } = props;
  return (
    <>
      <a
        href={link}
        className="card-actions justify-end flex text-lg flex items-center hover:text-blue-500"
      >
        {children}
      </a>
    </>
  );
}

export default LinkDemo;
