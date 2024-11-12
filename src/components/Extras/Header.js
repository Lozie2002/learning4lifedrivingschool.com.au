import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose, MdOutlineCleaningServices, MdOutlineContactMail } from "react-icons/md";
import { BsImages } from "react-icons/bs";
import MobileNav from "./MobileNav";
import Logo from "../../Images/Learning4lifeLogo.webp";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const [scroll, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between px-4 py-3 transition-all duration-300 z-50 ${
        scroll
          ? "bg-black bg-opacity-80 backdrop-blur-md rounded-b-md shadow-lg lg:sticky top-0"
          : "bg-black"
      }`}
    >
      {/* Logo Section */}
      <Link to="/" className="flex items-center py-2 px-2">
        <img src={Logo} alt="Learning4Life Logo" className="h-12" />
        {/* Heading Section */}
        <h1 className="text-white text-lg lg:text-xl font-bold ml-2">Learning4Life Driving School</h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex w-full justify-center text-white">
        <ul className="flex gap-8">
          {[
            { to: "/", icon: <AiOutlineHome fontSize={20} />, label: "Home" },
            { to: "/about", icon: <FiUser fontSize={20} />, label: "About" },
            { to: "/gallery", icon: <BsImages fontSize={20} />, label: "Gallery" },
            { to: "/services", icon: <MdOutlineCleaningServices fontSize={20} />, label: "Services" },
            { to: "/resources", icon: <MdOutlineContactMail fontSize={20} />, label: "Resources" },
            { to: "/contact", icon: <MdOutlineContactMail fontSize={20} />, label: "Contact" },
          ].map((item) => (
            <li key={item.to} className="relative group">
              <Link
                to={item.to}
                className="flex gap-1 items-center font-semibold text-lg cursor-pointer relative transition-all"
              >
                {item.icon}
                <span>{item.label}</span>
                {/* Animated underline */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-200" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden flex items-center justify-center">
        <button
          className="text-white focus:outline-none"
          onClick={() => setShowNav((prev) => !prev)}
        >
          {showNav ? <MdClose fontSize={25} /> : <RiMenu3Fill fontSize={25} />}
        </button>
      </div>

      {/* Mobile Navigation Component */}
      <MobileNav showNav={showNav} setShowNav={setShowNav} />
    </header>
  );
}

export default Header;
