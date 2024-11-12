import React from "react";
import { FaClipboardCheck, FaCarSide, FaHandsHelping } from "react-icons/fa";
import { MdCarRental } from "react-icons/md";
import { RiStackLine } from "react-icons/ri";

function Services() {
  return (
    <div
      className="flex items-center justify-center w-full bg-gradient-to-r from-blue-400 to-blue-300"
      style={{ minHeight: "80vh", padding: "2rem 0" }}
    >
      <div className="flex flex-col items-center text-left w-full max-w-screen-lg px-5">
        <h1 className="text-6xl font-extrabold tracking-wide text-white text-center w-full mb-10">
          Services
        </h1>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {[
            {
              icon: <FaClipboardCheck className="text-black text-5xl my-4" />,
              title: "Driving Test Assessment",
              description: "A comprehensive assessment to prepare you for the driving test, focusing on critical skills and confidence."
            },
            {
              icon: <FaCarSide className="text-black text-5xl my-4" />,
              title: "Dual Controlled Vehicles",
              description: "Safety-first driving lessons with dual-controlled vehicles for a secure and comfortable learning experience."
            },
            {
              icon: <FaHandsHelping className="text-black text-5xl my-4" />,
              title: "Driving Test Support",
              description: "Get the guidance you need to succeed on test day, with dedicated support and practical advice."
            },
            {
              icon: <MdCarRental className="text-black text-5xl my-4" />,
              title: "Car Hire",
              description: "Convenient car hire options for your driving test or additional practice, fully insured and ready for use."
            },
            {
              icon: <RiStackLine className="text-black text-5xl my-4" />,
              title: "Lesson Packages",
              description: "Flexible lesson packages to suit your schedule and learning pace, with options for beginners and advanced drivers."
            },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center transition-transform duration-300 hover:scale-105">
              {service.icon}
              <h2 className="text-3xl font-semibold ttext-black mb-2">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <button
          className="mt-10 px-8 py-3 text-lg font-medium text-white bg-teal-600 rounded-full shadow-md hover:bg-teal-700 transition duration-300"
        >
          Learn More About Our Lesson Packages
        </button>
      </div>
    </div>
  );
}

export default Services;
