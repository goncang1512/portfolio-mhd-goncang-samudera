import React from "react";
import HomeSend from "../../elements/homeElements/HomeButton";

function HomeButton() {
  return (
    <>
      <HomeSend to="#contact" classname="p-7 text-base rounded-lg">
        Kirim Pesan
      </HomeSend>
      <a href="">
        <button className="duration-300 ease-in-out trasition-all rounded-lg p-7 border border-blue-600 text-blue-600 text-center hover:scale-105 hover:bg-blue-600 hover:text-white text-base py-2 border-x-2 ">
          Download CV
        </button>
      </a>
    </>
  );
}

export default HomeButton;
