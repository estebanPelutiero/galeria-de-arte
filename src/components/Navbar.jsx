import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Paints from "../assets/icons/paints.svg";
import Home from "../assets/icons/home.svg";
import Whatsapp from "../assets/icons/whatsapp.svg";
import Logo from "../assets/icons/logo.svg";
import Underline from "../assets/icons/underline.svg";

const Navbar = () => {
  return (
    <header>
      {/* desktop navbar */}

      <div className="fixed z-10 flex items-center justify-center w-full mx-auto h-14 md:h-20 bg-white shadow-md">
        <nav className="w-full max-w-[1366px] md:mx-11">
          <ul className="flex justify-center md:justify-between items-center">
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>

            {/* no mostrar en mobile */}

            <div className="hidden md:flex justify-between w-64">
              <div>
                <HashLink to={"/#home"} className="font-redHat font-medium">
                  Home
                </HashLink>
                <img src={Underline} alt="" />
              </div>

              <div>
                <Link to={"/obras"} className="font-redHat font-medium">
                  Obras
                </Link>
                <img src={Underline} alt="" />
              </div>

              <div>
                <HashLink to={"/#contact"} className="font-redHat font-medium">
                  Contacto
                </HashLink>
                <img src={Underline} alt="" />
              </div>
            </div>
          </ul>
        </nav>
      </div>

      {/* mobile navbar */}

      <div className="hidden fixed z-10 flex justify-center items-center bottom-0 bg-white w-full h-12 mx-auto md:hidden">
        <nav className="flex w-52 h-8">
          <ul className="flex justify-between items-center w-full">
            <Link to={"/obras"}>
              <img className="w-7 h-7" src={Paints} alt="" />
            </Link>
            <HashLink to={"/#home"}>
              <img className="w-7 h-7" src={Home} alt="" />
            </HashLink>
            <HashLink to={"/#contact"}>
              <img className="w-7 h-7" src={Whatsapp} alt="" />
            </HashLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
