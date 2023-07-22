import React from "react";
import "../../style/home.css";
import Navbar from "../layouts/Navbar";
import HomeLeft from "../layouts/homeLayouts/HomeLeft";
import HomeRight from "../layouts/homeLayouts/HomeRight";
import CopyRight from "../layouts/CopyRight";

function HomePage() {
  return (
    <div className="home-page bg-netral-225 w-full h-screen flex flex-col overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <div className="home-section flex md:flex-row flex-col pb-10">
        <div className="home-left md:order-1 order-2 w-full h-full items-center flex xm-full">
          <HomeLeft />
        </div>
        <div className="home-right md:order-2 order-1 flex w-full justify-center h-screen items-center md:mt-0 mt-100px">
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
