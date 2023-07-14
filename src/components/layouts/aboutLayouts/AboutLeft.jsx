import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutLeft() {
  return (
    <div className="img-content relative rounded-xl">
      <div className="container-rotate flex justify-center items-center w-36">
        <img
          src="../../public/assets/svg/text-rotate-frontend.svg"
          alt=""
          className="image-rotation w-36 absolute"
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
