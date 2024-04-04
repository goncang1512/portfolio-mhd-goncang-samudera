import { useEffect } from "react";

// CSS
import "../../App.css";
import "../../style/home.css";
import "../../style/about.css";
import "../../style/contact.css";
import "../../style/project.css";

// Import File
import HomeLeft from "../layouts/homeLayouts/HomeLeft";
import ProjectNew from "../layouts/projectLayouts/ProjectNew";
import HomeRight from "../layouts/homeLayouts/HomeRight";
import AboutLeft from "../layouts/aboutLayouts/AboutLeft";
import AboutRight from "../layouts/aboutLayouts/AboutRight";
import TeachSkill from "../layouts/projectLayouts/TechSkill";
import RightBar from "../layouts/contactLayouts/RightBar";
import LeftBar from "../layouts/contactLayouts/LeftBar";
import Maps from "../layouts/contactLayouts/Maps";
import Sertifikat from "../layouts/aboutLayouts/sertifikat";

// Import packages
import AOS from "aos";
import "aos/dist/aos.css";

export default function Index() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1500 });
  });
  return (
    <div className="overflow-x-hidden">
      {/* Bagian Home */}
      <section
        className="flex flex-col items-center h-screen md:flex-row"
        id="home"
      >
        <div
          className="md:order-1 order-2 w-full h-full items-center flex xm-full md:mt-0 mt-[50px] px-3"
          data-aos="fade-right"
        >
          <HomeLeft />
        </div>
        <div
          className="flex items-center justify-center order-1 w-full h-screen md:order-2"
          data-aos="zoom-in"
        >
          <HomeRight />
        </div>
      </section>

      {/* Bagian About */}
      <section
        className="container flex flex-col w-screen h-full md:pt-20 pt-[100px]"
        id="about"
      >
        <div className="flex flex-col about-container md:flex-row">
          {/* card bagian kanan about me */}
          <div
            className="flex items-center justify-start w-full"
            data-aos="zoom-in"
          >
            <AboutLeft />
          </div>
          {/* card bagian kanan untuk memperkenalkan diri */}
          <div className="w-full about-right" data-aos="fade-down">
            <AboutRight />
          </div>
        </div>
        <div className="md:pt-20 pt-9 md:pb-0 pb-9">
          <TeachSkill />
        </div>
        <div data-aos="fade-down">
          <Sertifikat />
        </div>
      </section>

      {/* Bagian Project */}
      <section className="container flex flex-col pt-20" id="project">
        <ProjectNew />
      </section>

      {/* Bagian Contact */}
      <section
        className="container pt-20 pb-10"
        id="contact"
        data-aos="fade-down"
      >
        <div className="flex flex-col border shadow-xl card-container md:flex-row rounded-xl">
          {/* card bagian kanan about me */}
          <div className="flex flex-col justify-center order-2 w-full gap-5 p-6 md:order-1 ">
            <LeftBar />
          </div>
          {/* card bagian kanan kirim email */}
          <div className="order-1 w-full h-full p-6 bg-white right md:order-2">
            <RightBar />
          </div>
        </div>
        <div className="w-full pt-10">
          <Maps />
        </div>
      </section>
    </div>
  );
}
