import React from "react";
import "../../style/home.css";
import Navbar from "../layouts/Navbar";
import HomeLeft from "../layouts/homeLayouts/HomeLeft";
import HomeRight from "../layouts/homeLayouts/HomeRight";
import CopyRight from "../layouts/CopyRight";

function HomePage() {
  return (
    <div className="home-page w-full h-screen flex flex-col overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <div className="home-section flex pb-10">
        <div className="home-left w-full h-full items-center flex xm-full">
          <HomeLeft />
        </div>
        <div className="home-right flex w-full justify-center h-screen items-center">
          <HomeRight />
        </div>
      </div>
      <div className="w-screen">
        <CopyRight />
      </div>
    </div>
  );
}

export default HomePage;
