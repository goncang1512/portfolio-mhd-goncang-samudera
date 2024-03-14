import { useEffect } from "react";
import IconSkill from "../../fragments/projectfragments/IconSkill";
import CardProject from "../../fragments/projectfragments/CardProject";
import AOS from "aos";
import "aos/dist/aos.css";

function TechSkill() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex flex-col gap-5" data-aos="fade-down">
      <CardProject.ProTitle>Tech Stack</CardProject.ProTitle>
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="p-5 border border-black rounded-lg">
          <div className="flex flex-wrap w-full gap-10 mt-5 justify-evenly">
            <IconSkill
              src="../../assets/svg/html-icon.svg"
              alt="HTML"
              title="HTML5"
            />
            <IconSkill
              src="../../assets/svg/css-icon.svg"
              alt="CSS"
              title="CSS3"
            />
            <IconSkill
              src="../../assets/svg/js-icon.svg"
              alt="JavaScript"
              title="Java Script"
            />
            <IconSkill
              src="../../assets/svg/typescript.svg"
              alt="JavaScript"
              title="TypeScript"
            />
            <IconSkill
              src="../../assets/svg/react-js-icon.svg"
              alt="React JS"
              title="React"
            />
            <IconSkill
              src="../../assets/svg/next-js.svg"
              alt="React JS"
              title="Next JS"
            />
            <IconSkill
              src="../../assets/svg/bootstrap-icon.svg"
              alt="Bootstrap"
              title="Bootstrap"
            />
            <IconSkill
              src="../../assets/svg/tailwind-icon.svg"
              alt="Tailwind"
              title="Tailwind CSS"
            />
            <IconSkill
              src="../../assets/svg/node-js-icon.svg"
              alt="React JS"
              title="Node JS"
            />
            <IconSkill
              src="../../assets/svg/express-js.svg"
              alt="React JS"
              title="Express JS"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechSkill;
