import React, { useEffect } from "react";
import "../../style/about.css";
import Navbar from "../layouts/Navbar";
import AboutLeft from "../layouts/aboutLayouts/AboutLeft";
import AboutRight from "../layouts/aboutLayouts/AboutRight";
import CopyRight from "../layouts/CopyRight";
import TeachSkill from "../layouts/projectLayouts/TechSkill";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-page overflow-x-hidden w-screen h-full gap-5">
      <div className="z-50">
        <Navbar />
      </div>
      <div className="about-section flex flex-col w-screen rounded-xl shadow-xl h-full">
        <div className="about-container flex md:flex-row flex-col">
          {/* card bagian kanan about me */}
          <div
            className="w-full flex items-center justify-start"
            data-aos="zoom-in"
          >
            <AboutLeft />
          </div>
          {/* card bagian kanan untuk memperkenalkan diri */}
          <div className="about-right w-full" data-aos="fade-right">
            <AboutRight />
          </div>
        </div>
        <div className="md:pt-20 pt-9 md:pb-0 pb-9">
          <TeachSkill />
        </div>
      </div>
      <div className="w-screen">
        <CopyRight />
      </div>
    </div>
  );
}

export default AboutSection;
