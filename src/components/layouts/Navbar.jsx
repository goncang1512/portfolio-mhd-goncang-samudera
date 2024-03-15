import { useState } from "react";
import RouteLink from "../elements/navbar/RouteLink";

function Navbar() {
  const [aktif, setAktif] = useState(false);

  function navClick(e) {
    setAktif(e.target.checked);
  }

  return (
    <>
      <div className="fixed flex items-center justify-between w-screen h-16 bg-white shadow-md navbar-top">
        <div className="flex items-center text-white">
          <p className="text-4xl text-black navbar-name">Mhd. Goncang</p>
        </div>
        <ul
          className={`navbar-menu w-80 flex justify-evenly ${
            aktif ? "slide" : ""
          }`}
        >
          <RouteLink to="#home">Home</RouteLink>
          <RouteLink to="#about">About</RouteLink>
          <RouteLink to="#project">Project</RouteLink>
          <RouteLink to="#contact">Contact</RouteLink>
        </ul>

        <div className="hum-toggle md:hidden">
          <input
            type="checkbox"
            id="checkbox"
            checked={aktif}
            onChange={navClick}
          />
          <label htmlFor="checkbox" className="toggle-label">
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
