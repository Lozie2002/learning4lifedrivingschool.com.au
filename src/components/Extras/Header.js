import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose, MdOutlineCleaningServices, MdOutlineContactMail } from "react-icons/md";
import { BsImages } from "react-icons/bs";
import MobileNav from "./MobileNav";
import Logo from "../../Images/LushCleaningLogo.png";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const [scroll, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex items-center justify-between px-4 z-50 ${
        scroll ? 'bg-black bg-opacity-80 backdrop-blur-lg rounded drop-shadow-lg shadow-lg lg:sticky top-0' : 'bg-black'
      } transition-all duration-300`}
    >
      {/* Logo Section */}
      <span className="md:w-1/3 lg:w-1/2 flex items-center justify-center py-5 px-2 relative">
        <Link to="/">
          <img src={Logo} alt="Lush Cleaning Logo" className="h-12" /> {/* Adjust height as needed */}
        </Link>
      </span>

      {/* Desktop Navigation Links */}
      <div className="w-2/3 hidden lg:flex items-center justify-start text-white">
        <ul className="flex gap-8 lg:gap-12">
          <li className="relative group">
            <Link to="/" className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full">
              <AiOutlineHome fontSize={20} />
              <span>Home</span>
            </Link>
          </li>
          <li className="relative group">
            <Link to="/about" className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full">
              <FiUser fontSize={20} />
              <span>About</span>
            </Link>
          </li>
          <li className="relative group">
            <Link to="/gallery" className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full">
              <BsImages fontSize={20} />
              <span>Gallery</span>
            </Link>
          </li>
          <li className="relative group">
            <Link to="/services" className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full">
              <MdOutlineCleaningServices fontSize={20} />
              <span>Services</span>
            </Link>
          </li>
          <li className="relative group">
            <Link to="/contact" className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full">
              <MdOutlineContactMail fontSize={20} />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Toggle */}
      <span>
        <div className="h-full lg:hidden flex items-center justify-center cursor-pointer relative">
          {showNav ? (
            <MdClose fontSize={25} className="text-white" onClick={() => setShowNav(!showNav)} />
          ) : (
            <RiMenu3Fill fontSize={25} className="text-white" onClick={() => setShowNav(!showNav)} />
          )}
          <MobileNav showNav={showNav} setShowNav={setShowNav} />
        </div>
      </span>
    </div>
  );
}

export default Header;
