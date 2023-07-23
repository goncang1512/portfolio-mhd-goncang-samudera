import React, { useEffect } from "react";
import IconSkill from "../../fragments/projectfragments/IconSkill";
import CardProject from "../../fragments/projectfragments/CardProject";
import AOS from "aos";
import "aos/dist/aos.css";

function TechSkill() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex flex-col" data-aos="fade-down">
      <CardProject.ProTitle>Tech Stack Front End</CardProject.ProTitle>
      <div className="flex w-full flex-wrap justify-evenly mt-5 gap-10">
        <IconSkill src="../../assets/svg/html-icon.svg" alt="HTML" />
        <IconSkill src="../../assets/svg/css-icon.svg" alt="CSS" />
        <IconSkill src="../../assets/svg/js-icon.svg" alt="JavaScript" />
        <IconSkill src="../../assets/svg/react-js-icon.svg" alt="React JS" />
        <IconSkill src="../../assets/svg/bootstrap-icon.svg" alt="Bootstrap" />
        <IconSkill src="../../assets/svg/tailwind-icon.svg" alt="Tailwind" />
      </div>
    </div>
  );
}

export default TechSkill;
