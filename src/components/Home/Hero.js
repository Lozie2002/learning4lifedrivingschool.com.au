import React from "react";
import logo from "../../Images/LushCleaningLogo.png"; // Importing the logo image
import backgroundImage from "../../Images/ExteriorCleaning.jpg"; // Importing the background image

function Hero() {
  return (
    <div
      className="h-[80vh] flex flex-col items-center justify-center lg:flex-row bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Left side: Text */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center flex-col mt-6 lg:mt-10 px-4 bg-opacity-80">
        <div className="flex flex-col items-center lg:items-start gap-2">
          <h3
            className="text-white text-2xl lg:text-4xl font-semibold drop-shadow-lg"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Welcome to
          </h3>
          <p
            className="text-white text-3xl lg:text-5xl font-bold drop-shadow-2xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            LUSH CLEANING
          </p>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center mt-6 lg:mt-10">
        <img
          src={logo}
          alt="Lush Cleaning Logo"
          className="w-1/2 lg:w-1/3 h-auto rounded-full shadow-2xl border-4 border-white"
        />
      </div>
    </div>
  );
}

export default Hero;
