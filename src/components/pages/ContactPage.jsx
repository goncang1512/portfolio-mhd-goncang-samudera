import React from "react";
import "../../style/contact.css";
import Navbar from "../layouts/Navbar";
import RightBar from "../layouts/contactLayouts/RightBar";
import LeftBar from "../layouts/contactLayouts/LeftBar";
import CopyRight from "../layouts/CopyRight";

function ContactPage() {
  return (
    <div className="bg-netral-225 h-screen overflow-x-hidden">
      <div className="z-50">
        <Navbar />
      </div>
      <div className="card-body-container">
        <div className="card-container flex md:flex-row flex-col border rounded-xl shadow-xl">
          {/* card bagian kanan about me */}
          <div className="left w-full flex flex-col justify-center md:order-1 order-2 gap-5 p-6 bg-netral-225">
            <LeftBar />
          </div>
          {/* card bagian kanan kirim email */}
          <div className="right flex flex-col items-center justify-center  h-full w-full md:order-2 p-6 order-1 bg-white">
            <RightBar />
          </div>
        </div>
      </div>
      <div className="w-screen">
        <CopyRight />
      </div>
    </div>
  );
}

export default ContactPage;
