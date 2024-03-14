import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutLeft() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div
      className={`${
        isHovered ? "img-content-two" : "img-content "
      }  relative rounded-xl`}
    >
      <div className="flex items-center justify-center container-rotate w-44">
        <img
          src="https://stefantopalovicdev.vercel.app/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
          alt=""
          className={`${
            isHovered ? "hover-rotation" : "image-rotation"
          } bg-white absolute rounded-full ease-in-out`}
        />
        <div
          className="absolute text-black icon-arrow"
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
