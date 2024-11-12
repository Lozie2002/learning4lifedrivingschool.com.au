import React from "react";
import DrivingSchoolImage from '../../Images/Car.webp';

function WhoIM() {
  return (
    <div className="bg-white h-auto flex flex-col lg:flex-row items-center justify-center py-10 lg:py-16 px-4 lg:px-12 relative">
      {/* Left Side: Text Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center flex-col my-6 lg:my-0 text-center lg:text-left z-20">
        <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-4/5 max-w-lg lg:max-w-none">
          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl font-bold text-black mb-4 lg:mb-6">
            About Learning for Life Driving School
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-700 mt-4 leading-relaxed">
            I'm [Instructor's Name], the founder and lead instructor of Learning for Life Driving School, established in [Year]. Our mission is to equip students with the skills, confidence, and knowledge necessary to become safe and responsible drivers. Through personalized lessons, we ensure each student learns at their own pace, making the journey to earning a driver’s license both educational and enjoyable.
          </p>

          {/* Mission Statement */}
          <h2 className="text-3xl font-semibold text-black mt-8 lg:mt-10">Our Mission</h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-700 mt-4 leading-relaxed">
            At Learning for Life Driving School, our mission is to foster responsible driving habits that will last a lifetime. We believe that safe driving skills contribute to the well-being of our community and reduce road-related risks.
          </p>

          {/* Core Values */}
          <h2 className="text-3xl font-semibold text-black mt-8 lg:mt-10">Core Values</h2>
          <div className="text-lg sm:text-xl lg:text-2xl font-light text-gray-700 mt-4 leading-relaxed space-y-2">
            <p><strong>Safety:</strong> Safety is our top priority, both in and out of the car.</p>
            <p><strong>Patience:</strong> We approach each lesson with patience and understanding.</p>
            <p><strong>Excellence:</strong> We strive to provide comprehensive and effective driving instruction.</p>
            <p><strong>Community:</strong> We are committed to contributing positively to our community by creating safe drivers.</p>
          </div>
        </div>
      </div>

      {/* Right Side: Image Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0 z-20">
        <img
          src={DrivingSchoolImage}
          alt="Learning for Life Driving School"
          className="h-auto max-h-[500px] w-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default WhoIM;
