import React from "react";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineClose } from "react-icons/ai";
import { FiUser, FiFileText } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Import social icons
import { Link } from "react-router-dom";

function MobileNav({ showNav, setShowNav }) {
  return (
    <div
    style={{ backgroundColor: "#181818",
      border: "1px solid #181818",
     }}
      className={
        showNav
          ? "fixed h-full w-[250px] top-0 left-0 rounded-r-md border-r-2  z-50 transition-transform duration-500 transform translate-x-0"
          : "fixed h-full w-[250px] top-0 left-0 rounded-r-md border-r-2  z-50 transition-transform duration-500 transform -translate-x-full"
      }
    >
      <div className="flex flex-col items-center text-white">
        {/* Close Button */}
        <div className="w-full flex justify-end p-4">
          <AiOutlineClose
            fontSize={24}
            className="cursor-pointer text-white hover:text-gray-400"
            onClick={() => setShowNav(false)}
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col w-full mt-4">
          <li className="w-full border-b border-white">
            <Link
              to="/"
              className="flex gap-4 items-center pl-6 py-3 text-base font-semibold hover:bg-gray-700 hover:text-white transition-colors rounded-r-md"
              onClick={() => setShowNav(false)}
            >
              <AiOutlineHome fontSize={20} />
              <span>Home</span>
            </Link>
          </li>
          <li className="w-full border-b border-white">
            <Link
              to="/about"
              className="flex gap-4 items-center pl-6 py-3 text-base font-semibold hover:bg-gray-700 hover:text-white transition-colors rounded-r-md"
              onClick={() => setShowNav(false)}
            >
              <FiUser fontSize={20} />
              <span>About</span>
            </Link>
          </li>
          <li className="w-full border-b border-white">
            <Link
              to="/services"
              className="flex gap-4 items-center pl-6 py-3 text-base font-semibold hover:bg-gray-700 hover:text-white transition-colors rounded-r-md"
              onClick={() => setShowNav(false)}
            >
              <AiOutlineFundProjectionScreen fontSize={20} />
              <span>Services</span>
            </Link>
          </li>
          <li className="w-full border-b border-white">
            <Link
              to="/resources"
              className="flex gap-4 items-center pl-6 py-3 text-base font-semibold hover:bg-gray-700 hover:text-white transition-colors rounded-r-md"
              onClick={() => setShowNav(false)}
            >
              <FiUser fontSize={20} />
              <span>Resources</span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/gallery"
              className="flex gap-4 items-center pl-6 py-3 text-base font-semibold hover:bg-gray-700 hover:text-white transition-colors rounded-r-md"
              onClick={() => setShowNav(false)}
            >
              <FiFileText fontSize={20} />
              <span>Gallery</span>
            </Link>
          </li>
        </ul>

        {/* Follow Us Section */}
        <div className="w-full flex flex-col items-center mt-6 text-center">
          <p className="text-sm font-semibold mb-4">Follow Us</p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaFacebookF fontSize={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaTwitter fontSize={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaInstagram fontSize={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaLinkedinIn fontSize={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
