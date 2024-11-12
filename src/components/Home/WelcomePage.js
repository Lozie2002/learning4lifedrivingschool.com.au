import React from "react";
import backgroundImage from "../../Images/Learning4lifeBackground.webp"; // Importing the background image

function Hero() {
  return (
    <div
      className="h-[80vh] flex flex-col items-center justify-center lg:flex-row bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Left side: Text */}
      <div className="relative w-full lg:w-1/2 h-full flex items-center justify-center flex-col mt-6 lg:mt-10 px-4">
        <div className="flex flex-col items-center lg:items-start gap-3 text-center lg:text-left">
          <h3
            className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold drop-shadow-lg leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Welcome to
          </h3>
          <p
            className="text-blue-300 text-4xl sm:text-5xl lg:text-6xl font-extrabold drop-shadow-2xl leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Learning4life<br />Driving School
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
