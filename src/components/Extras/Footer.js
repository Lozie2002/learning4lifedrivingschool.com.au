import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import logo from "../../Images/Learning4lifeLogo.webp"; // Importing the logo image

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-black text-white px-6 py-8">
      {/* Logo and Slogan Section */}
      <div className="flex flex-col items-center gap-3 mb-4">
        <img src={logo} alt="Learning 4 Life Logo" className="w-32 h-auto" />
        <h1 className="text-lg font-bold tracking-wide">Learning 4 Life Driving School</h1>
        <p className="text-sm text-gray-400">Driving you from L to P</p>
      </div>

      {/* Social Media Links */}
      <div className="flex items-center gap-6 mb-4">
        <a
          href="https://www.instagram.com/riteshk_007/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-teal-400 transition-transform transform hover:scale-110"
          aria-label="Instagram"
        >
          <AiFillInstagram size={30} />
        </a>
        <a
          href="https://www.facebook.com/yourfacebookprofile" // Replace with your actual Facebook link
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-teal-400 transition-transform transform hover:scale-110"
          aria-label="Facebook"
        >
          <FaFacebook size={30} />
        </a>
      </div>

      {/* Divider Line */}
      <hr className="border-t border-gray-600 w-full mb-4" />

      {/* Designer Credit and Copyright */}
      <div className="text-center text-gray-500 text-xs ">
        <p className="mb-1">
          Designed and Developed by <strong>Aidan Lozell</strong>
        </p>
        <p>&copy; {new Date().getFullYear()} Learning 4 Life Driving School. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
