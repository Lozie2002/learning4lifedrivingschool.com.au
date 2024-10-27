import React from "react";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FiUser, FiFileText } from "react-icons/fi";

import { Link } from "react-router-dom";
function MobileNav({ showNav, setShowNav }) {
  return (
    <div
      className={
        showNav
          ? "fixed h-1/2 bg-black  w-full top-[68px] left-0 rounded-b-md border-2 border-t-0 border-blue-700 z-50 transition-all duration-[500ms] overflow-hidden"
          : "fixed h-0 bg-black  w-full top-[68px] left-0 rounded-b-md  z-50 transition-all duration-[500ms] overflow-hidden"
      }
    >
      <div className=" block items-center justify-center text-white">
        <ul className="flex gap-8 flex-col mt-10">
          <li className="relative group">
            <Link
              to={"/"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
              onClick={() => setShowNav(false)}
            >
              <AiOutlineHome fontSize={20} />
              <span className="">Home</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/about"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
              onClick={() => setShowNav(false)}
            >
              <FiUser fontSize={20} />
              <span className="">About</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/services"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
              onClick={() => setShowNav(false)}
            >
              <AiOutlineFundProjectionScreen fontSize={20} />
              <span className="">Services</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/gallery"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
              onClick={() => setShowNav(false)}
            >
              <FiFileText fontSize={20} />
              <span className="">Gallery</span>
            </Link>
          </li>
        </ul>

       
      </div>
    </div>
  );
}

export default MobileNav;
