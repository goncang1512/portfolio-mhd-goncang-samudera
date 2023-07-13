import React from "react";
import Navbar from "../layouts/Navbar";

function AboutPage() {
  return (
    <div className="text-black h-screen">
      <div className="z-50">
        <Navbar />
      </div>
      <section className="h-screen w-screen flex justify-center items-center text-blue-500 text-3xl">
        <p>Cooming Soon</p>
      </section>
    </div>
  );
}

export default AboutPage;
