import React, { useEffect } from "react";
import RouteLink from "../elements/navbar/RouteLink";

function Navbar() {
  useEffect(() => {
    const menuToggle = document.querySelector(".hum-toggle input");
    const navbarMenu = document.querySelector(".navbar-menu");

    function handleClick() {
      navbarMenu.classList.toggle("slide");
    }

    menuToggle.addEventListener("click", handleClick);

    return () => {
      menuToggle.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div className="navbar-top bg-white shadow-md h-16 w-screen flex justify-between items-center fixed">
        <div className="text-white flex items-center">
          <p className="navbar-name text-4xl text-black">Mhd. Goncang</p>
        </div>
        <ul className="navbar-menu w-80 flex justify-evenly">
          <RouteLink to="/">Home</RouteLink>
          <RouteLink to="/project">Project</RouteLink>
          <RouteLink to="/about">About</RouteLink>
          <RouteLink to="/contact">Contact</RouteLink>
        </ul>

        <div className="hum-toggle md:hidden">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" className="toggle-label">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>
      </div>
    </>
  );
}

export default Navbar;
