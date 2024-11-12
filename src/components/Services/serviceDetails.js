import React from "react";
import SingleLesson from "../../Images/SingleLesson.webp";
import MultiLesson from "../../Images/Packages.webp";
import TestVehicle from "../../Images/TestVehicle.webp";

function Booking() {
  return (
    <div className="flex flex-col items-center justify-start relative overflow-hidden w-full bg-white p-8">
      <h1 className="text-gray-900 font-bold text-5xl my-8 text-center w-full shadow-md">
        Book Our Services
      </h1>
      
      <h2 className="text-gray-800 font-semibold text-4xl my-6 text-center w-full">
        Single Lessons
      </h2>
      <p className="text-gray-600 text-lg mb-6 text-center w-full max-w-xl">
        Our single lessons provide personalized attention, ensuring you gain the skills you need to excel.
      </p>
      <div className="w-full flex justify-center mb-10">
        <img src={SingleLesson} alt="Single Lessons" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>
      <a href="https://calendly.com/learning4lifedrivingschool/learning4life-driving-school-pty-ltd-single-lesson?month=2024-10" target="_blank" rel="noopener noreferrer">
        <button className="bg-teal-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-600 transition duration-300">
          Book a Single Lesson
        </button>
      </a>

      <h2 className="text-gray-800 font-semibold text-4xl my-6 text-center w-full">
        Multi Lesson Packages
      </h2>
      <p className="text-gray-600 text-lg mb-6 text-center w-full max-w-xl">
        Choose from our flexible multi-lesson packages for a comprehensive learning experience at a great value.
      </p>
      <div className="w-full flex justify-center mb-10">
        <img src={MultiLesson} alt="Multi Lesson Packages" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>

      <h2 className="text-gray-800 font-semibold text-4xl my-6 text-center w-full">
        Test Vehicle Usage
      </h2>
      <p className="text-gray-600 text-lg mb-6 text-center w-full max-w-xl">
        Experience our vehicles firsthand before making a commitment with our test usage options.
      </p>
      <div className="w-full flex justify-center mb-10">
        <img src={TestVehicle} alt="Test Vehicle Usage" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
}

export default Booking;
