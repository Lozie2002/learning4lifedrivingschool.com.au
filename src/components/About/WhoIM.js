import React from "react";
import ExteriorCleaning from '../../Images/ExteriorCleaning.jpg';

function WhoIM() {
  return (
    <div className="bg-white h-auto flex flex-col lg:flex-row items-center justify-center py-10 lg:py-16 px-4 lg:px-12 relative">
      {/* Left Side: Text Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center flex-col my-6 lg:my-0 text-center lg:text-left z-20">
        <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-4/5 max-w-lg lg:max-w-none">
          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl font-bold text-black mb-4 lg:mb-6">
            About Lush Exterior Cleaning
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-700 mt-4 leading-relaxed">
            I'm Lukas Argerakis, the founder and owner of Lush Exterior Cleaning, established in 2022. Driven by a passion for making homes and businesses shine, my journey began after being inspired by window cleaning videos on social media. Today, I offer a range of services, including pressure washing and window cleaning, all designed to enhance the curb appeal of your property. With a strong commitment to quality, attention to detail, and customer satisfaction, I strive to deliver outstanding results every time.
          </p>

          {/* Mission Statement */}
          <h2 className="text-3xl font-semibold text-black mt-8 lg:mt-10">Our Mission</h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-700 mt-4 leading-relaxed">
            At Lush Exterior Cleaning, our mission is to provide top-notch cleaning services that enhance the beauty and longevity of your property. We believe that a clean exterior not only improves curb appeal but also reflects the pride you take in your home or business.
          </p>

          {/* Core Values */}
          <h2 className="text-3xl font-semibold text-black mt-8 lg:mt-10">Core Values</h2>
          <div className="text-lg sm:text-xl lg:text-2xl font-light text-gray-700 mt-4 leading-relaxed space-y-2">
            <p><strong>Quality:</strong> We strive for excellence in every job, ensuring complete customer satisfaction.</p>
            <p><strong>Integrity:</strong> We believe in honest communication and transparency with our clients.</p>
            <p><strong>Innovation:</strong> We stay up to date with the latest cleaning techniques and products to provide the best service possible.</p>
            <p><strong>Community:</strong> We are dedicated to serving our local community and supporting other small businesses.</p>
          </div>
        </div>
      </div>

      {/* Right Side: Image Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0 z-20">
         
        <img
          src={ExteriorCleaning}
          alt="Lush Exterior Cleaning"
          className="h-auto max-h-[500px] w-full object-cover rounded-lg shadow-lg"
        />
        
      </div>
    </div>
  );
}

export default WhoIM;
