import React from "react";
import { FaFileAlt } from "react-icons/fa"; // Importing FaFileAlt icon

function ResourcePage() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-white py-10">
      <div className="text-center w-full max-w-screen-lg px-6">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-blue-300 mb-8">
          Resources for Learner and Experienced Drivers
        </h1>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Box */}
          <div className="bg-white rounded-lg shadow-xl p-6 text-left flex flex-col items-center">
            <FaFileAlt className="w-12 h-12 text-teal-600 mb-4" /> {/* Icon */}
            <h2 className="text-3xl font-semibold text-teal-600">
              <a
                href="https://www.rms.nsw.gov.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-500 transition-colors"
              >
                NSW Department of Transport
              </a>
            </h2>
            <p className="text-gray-700">
              Access essential information and services for drivers in New South Wales, including licensing, road safety, and more.
            </p>
          </div>

          {/* Second Box */}
          <div className="bg-white rounded-lg shadow-xl p-6 text-left flex flex-col items-center">
            <FaFileAlt className="w-12 h-12 text-teal-600 mb-4" /> {/* Icon */}
            <h2 className="text-3xl font-semibold text-teal-600">
              <a
                href="https://www.rms.nsw.gov.au/roadsafety/rules/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-500 transition-colors"
              >
                NSW Road User Handbook
              </a>
            </h2>
            <p className="text-gray-700">
              Download the official Road User Handbook to stay up to date with the latest road rules and regulations in NSW.
            </p>
          </div>

          {/* Third Box */}
          <div className="bg-white rounded-lg shadow-xl p-6 text-left flex flex-col items-center">
            <FaFileAlt className="w-12 h-12 text-teal-600 mb-4" /> {/* Icon */}
            <h2 className="text-3xl font-semibold text-teal-600">
              <a
                href="https://www.rms.nsw.gov.au/roadsafety/licensing/driving-test/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-500 transition-colors"
              >
                Practical Test Booking
              </a>
            </h2>
            <p className="text-gray-700">
              Book your practical driving test and find out more about the testing process for learner drivers in NSW.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcePage;
