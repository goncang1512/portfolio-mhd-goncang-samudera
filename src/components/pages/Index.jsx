import React, { useEffect, useState } from "react";

// CSS
import "../../style/home.css";

// Import File
import HomeLeft from "../layouts/homeLayouts/HomeLeft";
import ProjectNew from "../layouts/projectLayouts/ProjectNew";
import Navbar from "../layouts/Navbar";
import HomeRight from "../layouts/homeLayouts/HomeRight";
import AboutLeft from "../layouts/aboutLayouts/AboutLeft";
import AboutRight from "../layouts/aboutLayouts/AboutRight";
import TeachSkill from "../layouts/projectLayouts/TechSkill";
import RightBar from "../layouts/contactLayouts/RightBar";
import LeftBar from "../layouts/contactLayouts/LeftBar";
import Maps from "../layouts/contactLayouts/Maps";
import CopyRight from "../layouts/CopyRight";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Index() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1500 });
  });
  return (
    <div className="overflow-x-hidden">
      <nav>
        <Navbar />
      </nav>

      {/* Bagian Home */}
      <section
        className="flex h-screen md:flex-row flex-col items-center"
        id="home"
      >
        <div
          className="md:order-1 order-2 w-full h-full items-center flex xm-full md:mt-0 mt-[50px] px-3"
          data-aos="fade-right"
        >
          <HomeLeft />
        </div>
        <div
          className="md:order-2 order-1 flex w-full justify-center h-screen items-center md:mt-0 mt-100px"
          data-aos="zoom-in"
        >
          <HomeRight />
        </div>
      </section>

      {/* Bagian About */}
      <section
        className="container flex flex-col w-screen h-full pt-20"
        id="about"
      >
        <div className="about-container flex md:flex-row flex-col">
          {/* card bagian kanan about me */}
          <div
            className="w-full flex items-center justify-start"
            data-aos="zoom-in"
          >
            <AboutLeft />
          </div>
          {/* card bagian kanan untuk memperkenalkan diri */}
          <div className="about-right w-full" data-aos="fade-down">
            <AboutRight />
          </div>
        </div>
        <div className="md:pt-20 pt-9 md:pb-0 pb-9">
          <TeachSkill />
        </div>
      </section>

      {/* Bagian Project */}
      <section className="container flex flex-col pt-20" id="project">
        <ProjectNew />
      </section>

      {/* Bagian Contact */}
      <section
        className="container pb-10 pt-20"
        id="contact"
        data-aos="fade-down"
      >
        <div className="card-container flex md:flex-row flex-col border rounded-xl shadow-xl">
          {/* card bagian kanan about me */}
          <div className="w-full flex flex-col justify-center md:order-1 order-2 gap-5 p-6 ">
            <LeftBar />
          </div>
          {/* card bagian kanan kirim email */}
          <div className="right flex flex-col items-center justify-center  h-full w-full md:order-2 p-6 order-1 bg-white">
            <RightBar />
          </div>
        </div>
        <div className="w-full pt-10">
          <Maps />
        </div>
      </section>

      {/* Bagian footer / akhir website */}
      <footer id="footer">
        <CopyRight />
      </footer>
    </div>
  );
}
