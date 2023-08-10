import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Logo from "../assets/icons/newLogo.png";
import Underline from "../assets/icons/underline.svg";
import { AiOutlineMenu } from 'react-icons/ai' 
import { GrClose } from 'react-icons/gr'

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <header>
      {/* desktop navbar */}

      <div className="fixed z-10 flex items-center justify-center w-full mx-auto h-fit bg-white shadow-md">
        <nav className="w-full max-w-[1366px] md:mx-11">
          <ul className="flex justify-center md:justify-between items-center">
            <HashLink className="ml-2 md:ml-0" to={"/#home"}>
              <img className="w-24 md:w-28 py-1" src={Logo} alt="" />
            </HashLink>

            {/* no mostrar en mobile */}

            <div className="justify-start md:flex md:justify-between w-64">
              <div className="hidden md:block">
                <HashLink to={"/#home"} className="font-redHat font-medium">
                  Home
                </HashLink>
                <img src={Underline} alt="" />
              </div>

              <div className="hidden md:block">
                <Link to={"/obras"} className="font-redHat font-medium">
                  Obras
                </Link>
                <img src={Underline} alt="" />
              </div>

              <div className="hidden md:block">
                <HashLink to={"/#contact"} className="font-redHat font-medium">
                  Contacto
                </HashLink>
                <img src={Underline} alt="" />
              </div>
            </div>
          </ul>
        </nav>
        <div onClick={handleNav} className="block md:hidden mx-4">
          {nav ? <GrClose size={20} /> : <AiOutlineMenu size={20} />} 
        </div>
      </div>

      {/* mobile navbar */}

      <div className={nav ? "fixed z-10 flex justify-center items-center top-[65.9px] bg-white w-full h-fit mx-auto" : "fixed left-[-100%]"}>
        <nav className="flex w-full">
          <ul className="flex flex-col justify-around items-center w-full">
            <HashLink className="text-center font-medium py-3 px-3 border-b border-t border-t-background border-b-background font-redHat w-full" to={"/#home"}>
              Home
            </HashLink>
            <Link className="text-center font-medium py-3 px-3 border-b border-b-background font-redHat w-full" to={"/obras"}>
              Obras
            </Link>
            <HashLink className="text-center font-medium py-3 px-3 border-b border-b-background font-redHat w-full" to={"/#contact"}>
              Contacto
            </HashLink>
          </ul>
        </nav>
      </div> 
    </header>
  );
};

export default Navbar;
