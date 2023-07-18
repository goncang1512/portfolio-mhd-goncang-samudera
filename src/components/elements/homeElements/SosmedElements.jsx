import React from "react";

function SosmedElements(props) {
  const { link, src } = props;
  return (
    <>
      <a href={link}>
        <img
          src={src}
          alt=""
          className="w-8 grayscale hover:grayscale-0 hover:scale-110"
        />
      </a>
    </>
  );
}

export default SosmedElements;
