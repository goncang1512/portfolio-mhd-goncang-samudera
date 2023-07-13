import React from "react";
import Navbar from "../layouts/Navbar";
import CopyRight from "../layouts/CopyRight";
import "../../style/about.css";

function AboutPage() {
  return (
    <div className="w-full h-screen flex flex-col overflow-x-hidden">
      <div className="z-50">
        <Navbar />
      </div>
      <div className="w-full h-screen flex flex-col justify-center items-center overflow-x-hidden">
        <p className="text-blue-500 text-3xl">Cooming Soon</p>
        <div className="foto-about"></div>
      </div>
      <div className="w-screen">
        <CopyRight />
      </div>
    </div>
  );
}

export default AboutPage;
