import React from "react";
import { HiMailOpen } from "react-icons/hi";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

function LeftBar() {
  return (
    <>
      <div>
        <h2 className="text-2xl text-black font-bold flex justify-center">
          Contact
        </h2>
      </div>
      <div className="flex items-center gap-3">
        <div className="border p-2 rounded-full text-blue-500 bg-white shadow-xl">
          <HiMailOpen size="40" />
        </div>
        <div className="flex flex-col justify-start">
          <h1 className="font-bold text-xl text-start text-black">Email</h1>
          <p className="text-lg text-black text-start hover:text-blue-500">
            samuderanst@gmail.com
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="border p-2 rounded-full text-blue-500 bg-white shadow-xl">
          <IoLogoWhatsapp size="40" />
        </div>
        <div className="flex flex-col justify-start">
          <h1 className="font-bold text-xl text-start text-black">WhatsApp</h1>
          <p className="text-lg text-black text-start hover:text-blue-500">
            081357579420
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="border p-2 rounded-full text-blue-500 bg-white shadow-xl">
          <FaMapLocationDot size="40" />
        </div>
        <div className="flex flex-col justify-start">
          <h1 className="font-bold text-xl text-start text-black">Location</h1>
          <p className="text-lg text-start hover:text-blue-500 text-black">
            Sipirok, Tapanuli Selatan, Sumatra Utara, Indonesia
          </p>
        </div>
      </div>
    </>
  );
}

export default LeftBar;
