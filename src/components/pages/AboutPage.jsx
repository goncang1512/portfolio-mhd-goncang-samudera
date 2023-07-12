import React from "react";
import Navbar from "../layouts/Navbar";

function AboutPage() {
  return (
    <div className="text-black h-screen">
      <div className="z-50">
        <Navbar />
      </div>
      <section className="pt-20">
        <p style={{ marginLeft: "50px", color: "blue" }}>Cooming Soon</p>
      </section>
    </div>
  );
}

export default AboutPage;
