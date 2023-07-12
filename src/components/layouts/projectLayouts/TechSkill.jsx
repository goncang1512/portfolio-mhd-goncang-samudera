import React from "react";
import IconSkill from "../../fragments/projectfragments/IconSkill";

function TechSkill() {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl">Tech Stack Front End</h1>
      <div className="flex w-full flex-wrap justify-evenly mt-5 gap-10">
        <IconSkill src="../../assets/svg/html-icon.svg" alt="HTML" />
        <IconSkill src="../../assets/svg/css-icon.svg" alt="CSS" />
        <IconSkill src="../../assets/svg/js-icon.svg" alt="JavaScript" />
        <IconSkill src="../../assets/svg/react-js-icon.svg" alt="React JS" />
        <IconSkill src="../../assets/svg/bootstrap-icon.svg" alt="Bootstrap" />
        <IconSkill src="../../assets/svg/tailwind-icon.svg" alt="Tailwind" />
        <IconSkill src="../../assets/svg/node-js-icon.svg" alt="Node JS" />
      </div>
    </div>
  );
}

export default TechSkill;
