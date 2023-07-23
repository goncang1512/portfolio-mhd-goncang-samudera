import React from "react";
import "../../style/project.css";
import Navbar from "../layouts/Navbar";
import TechSkill from "../layouts/projectLayouts/TechSkill";
import ProjectNew from "../layouts/projectLayouts/ProjectNew";
import CopyRight from "../layouts/CopyRight";

function ProjectPage() {
  return (
    <div className="bg-netral-225 w-full h-full flex flex-col overflow-x-hidden">
      <div className="z-50">
        <Navbar />
      </div>
      <div className="h-full text-black flex flex-col items-center">
        <div className="container pt-28">
          <TechSkill />
        </div>
        <div className="container flex flex-col gap-2 pt-12">
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
