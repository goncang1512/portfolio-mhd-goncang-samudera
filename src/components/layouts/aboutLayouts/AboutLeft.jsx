import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutLeft() {
  return (
    <div className="img-content relative rounded-xl">
      <div className="container-rotate flex justify-center items-center w-44">
        <img
          src="https://stefantopalovicdev.vercel.app/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
          alt=""
          className="image-rotation"
        />
        <div className="icon-arrow text-black absolute">
          <a href="https://github.com/goncang1512/portfolio-mhd-goncang-samudera">
            <AiOutlineArrowRight size="50" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutLeft;
