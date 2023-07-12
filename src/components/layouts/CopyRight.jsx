import React from "react";
import { AiFillGithub } from "react-icons/ai";

function CopyRight() {
  return (
    <div className="copy-page bg-neutral-800 text-white flex justify-between items-center h-32">
      <div className="copy-right h-full flex justify-between items-center w-full">
        <div>
          <h1 className="text-lg flex items-center w-full">
            Copyright © 2023. All rights are reserved
          </h1>
        </div>
        <div>
          <AiFillGithub
            size="27"
            className="icon-copy hover:scale-110 cursor-pointer text-white"
          />
        </div>
      </div>
    </div>
  );
}

export default CopyRight;
