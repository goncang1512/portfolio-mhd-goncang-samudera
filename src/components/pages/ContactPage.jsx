import React from "react";
import "../../style/contact.css";
import Navbar from "../layouts/Navbar";
import RightBar from "../layouts/contactLayouts/RightBar";
import LeftBar from "../layouts/contactLayouts/LeftBar";

function ContactPage() {
  return (
    <div className="contact-body">
      <div className="z-50">
        <Navbar />
      </div>
      <div className="card-body-container">
        <div className="card-container border rounded-xl shadow-xl">
          {/* card bagian kanan about me */}
          <div className="left w-full flex flex-col justify-center gap-5">
            <LeftBar />
          </div>
          {/* card bagian kanan kirim email */}
          <div className="right flex flex-col items-center justify-center  h-full w-full bg-white">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
