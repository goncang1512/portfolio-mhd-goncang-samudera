import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutLeft() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div className="img-content relative rounded-xl">
      <div className="container-rotate flex justify-center items-center w-44">
        <img
          src="https://stefantopalovicdev.vercel.app/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
          alt=""
          className={`${
            isHovered ? "hover-rotation" : "image-rotation"
          } bg-netral-225 absolute rounded-full`}
        />
        <div
          className="icon-arrow text-black absolute"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <div>
            <AiOutlineArrowRight size="50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutLeft;
