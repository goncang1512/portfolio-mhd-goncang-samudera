import React, { useEffect, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import "../../style/project.css";
import Navbar from "../layouts/Navbar";
import TechSkill from "../layouts/projectLayouts/TechSkill";
import ProjectNew from "../layouts/projectLayouts/ProjectNew";
import CopyRight from "../layouts/CopyRight";

function ProjectPage() {
  const [showNewIcon, setShowNewIcon] = useState(false);

  // Fungsi untuk mengubah ikon tombol saat halaman di-scroll
  const handleScroll = () => {
    const halfPageHeight = window.innerHeight / 2;
    const scrollPosition = window.scrollY;
    setShowNewIcon(scrollPosition >= halfPageHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-netral-225 w-screen h-full flex flex-col overflow-x-hidden relative">
      <div className="z-50" id="project">
        <Navbar />
      </div>
      <div className="h-full text-black flex flex-col items-center">
        <div className="container pt-28">
          <TechSkill />
        </div>
        <div className="container flex flex-col gap-2 pt-12">
          <ProjectNew />
        </div>
        <div>
          <a
            href={showNewIcon ? "#project" : "#copyright"}
            className={`button-project fixed md:bottom-10 md:right-20 right-5 bottom-5 bg-white text-black p-5 rounded-full border-black border-2 hover:border-white`}
          >
            <AiOutlineArrowDown
              size="25"
              className={`${showNewIcon ? "animated-icon" : "animated-back"}`}
            />
          </a>
        </div>
        <div className="w-screen mt-8" id="copyright">
          <CopyRight />
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
