import React from "react";

function IconSkill(props) {
  const { src, alt, title } = props;
  return (
    <>
      <div className="flex items-center">
        <img
          className="icon-skill cursor-pointer w-10 grayscale brightness-75 hover:filter-none"
          src={src}
          alt={alt}
          title={title}
        />
      </div>
    </>
  );
}

export default IconSkill;
