import React from "react";
import "../../style/home.css";
import Navbar from "../layouts/Navbar";
import HomeLeft from "../layouts/homeLayouts/HomeLeft";
import HomeRight from "../layouts/homeLayouts/HomeRight";

function HomePage() {
  return (
    <div className="home-page w-full h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <section className="home-section h-screen flex items-center">
        <div className="home-left w-full h-full items-center flex xm-full">
          <HomeLeft />
        </div>
        <div className="home-right flex w-full justify-center h-full items-center">
          <HomeRight />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
