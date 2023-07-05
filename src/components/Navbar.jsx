import React from "react";
import Paints from "../assets/icons/paints.svg";
import Home from "../assets/icons/home.svg";
import Whatsapp from "../assets/icons/whatsapp.svg";
import Logo from "../assets/icons/logo.svg";
import Underline from "../assets/icons/underline.svg";

const Navbar = () => {
  return (
    <div>
      {/* desktop navbar */}

      <div className="fixed z-10 flex items-center top-0 w-full h-20 bg-white shadow-md">
        <nav className="w-full md:mx-11 lg:mx-[136px]">
          <ul className="flex justify-center md:justify-between items-center">
            <div>
              <img src={Logo} alt="" />
            </div>

            {/* no mostrar en mobile */}

            <div className="hidden md:flex justify-between w-64">
              <div>
                <a className="font-redHat font-medium" href="#">
                  Home
                </a>
                <img src={Underline} alt="" />
              </div>

              <div>
                <a className="font-redHat font-medium" href="#">
                  Obras
                </a>
                <img src={Underline} alt="" />
              </div>

              <div>
                <a className="font-redHat font-medium" href="#">
                  Contacto
                </a>
                <img src={Underline} alt="" />
              </div>
            </div>
          </ul>
        </nav>
      </div>

      {/* mobile navbar */}

      <div className="fixed z-10 flex justify-center items-center bottom-0 bg-white w-full h-12 mx-auto md:hidden">
        <nav className="flex w-52 h-8">
          <ul className="flex justify-between items-center w-full">
            <a href="#">
              <img className="w-7 h-7" src={Paints} alt="" />
            </a>
            <a href="#">
              <img className="w-7 h-7" src={Home} alt="" />
            </a>
            <a href="#">
              <img className="w-7 h-7" src={Whatsapp} alt="" />
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
