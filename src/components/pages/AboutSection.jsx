import React from "react";
import "../../style/about.css";
import Navbar from "../layouts/Navbar";
import AboutLeft from "../layouts/aboutLayouts/AboutLeft";
import AboutRight from "../layouts/aboutLayouts/AboutRight";
import CopyRight from "../layouts/CopyRight";

function AboutSection() {
  return (
    <div className="overflow-x-hidden w-full h-screen gap-5">
      <div className="z-50">
        <Navbar />
      </div>
      <div className="about-section w-screen rounded-xl shadow-xl">
        <div className="about-container flex">
          {/* card bagian kanan about me */}
          <div className="w-full flex items-center justify-start">
            <AboutLeft />
          </div>
          {/* card bagian kanan kirim email */}
          <div className="about-right w-full">
            <AboutRight />
          </div>
        </div>
      </div>
      <div className="w-screen">
        <CopyRight />
      </div>
    </div>
  );
}

export default AboutSection;
