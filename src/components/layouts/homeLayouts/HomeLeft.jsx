import React from "react";
import HomeDownload from "../../fragments/homeFragments/HomeButton";
import TeksAnimation from "../../fragments/homeFragments/TeksAnimation";
import Sosmed from "../../fragments/homeFragments/Sosmed";

function HomeLeft() {
  return (
    <div className="md:pl-[20%] pl-0 flex  flex-col">
      <TeksAnimation />
      <div className="sosmed-home flex justify-start gap-6  my-5 items-center">
        <Sosmed />
      </div>
      <div className="mt-5 flex gap-5">
        <HomeDownload />
      </div>
    </div>
  );
}

export default HomeLeft;
