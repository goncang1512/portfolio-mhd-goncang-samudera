import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function CopyRight() {
  return (
    <div className="copy-page bg-neutral-800 text-white flex justify-between items-center h-32">
      <div className="copy-right h-full flex justify-between items-center w-full">
        <div>
          <h1 className="text-lg flex items-center w-full">
            Copyright © 2023.
          </h1>
        </div>
        <div className="flex gap-3">
          <a href="https://github.com/goncang1512">
            <AiFillGithub
              size="27"
              className="icon-copy hover:scale-110 cursor-pointer text-white"
            />
          </a>
          <a href="https://www.linkedin.com/in/goncang-samudera-019363284/">
            <AiFillLinkedin
              size="27"
              className="icon-copy hover:scale-110 cursor-pointer text-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CopyRight;
