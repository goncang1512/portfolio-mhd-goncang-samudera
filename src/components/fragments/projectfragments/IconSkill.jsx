import React from "react";

function IconSkill(props) {
  const { src, alt } = props;
  return (
    <>
      <div className="flex items-center">
        <img className="icon-skill" src={src} alt={alt} />
      </div>
    </>
  );
}

export default IconSkill;
