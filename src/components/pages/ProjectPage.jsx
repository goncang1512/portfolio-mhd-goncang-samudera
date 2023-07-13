import React from "react";
import "../../style/project.css";
import Navbar from "../layouts/Navbar";
import TechSkill from "../layouts/projectLayouts/TechSkill";
import ProjectNew from "../layouts/projectLayouts/ProjectNew";
import CopyRight from "../layouts/CopyRight";

function ProjectPage() {
  return (
    <div className="w-full h-screen flex flex-col overflow-x-hidden">
      <div className="z-50">
        <Navbar />
      </div>
      <div className="project-page h-full text-black flex flex-col">
        <div className="tech-skill pt-20">
          <TechSkill />
        </div>
        <div className="project-section flex flex-col gap-2">
          <ProjectNew />
        </div>
        <div className="w-screen mt-8">
          <CopyRight />
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
