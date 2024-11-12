import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon

function Introduction() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        // Log the entire data object for better debugging
        console.log("API response data:", data);
        
        // Check if data exists and if it has media items
        if (data.data) {
          setMedia(data.data);
        } else {
          console.warn("No media found in the response.");
          setMedia([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
<div className="bg-gradient-to-r from-blue-300 to-blue-200 text-white flex flex-col lg:flex-row items-start justify-center relative overflow-hidden p-4">
{/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center my-5 lg:gap-10">
 <h2 className="pb-2 text-7xl font-bold tracking-wide text-white"> {/* Increased font size */}          Our Instagram Feed
        </h2>
        
        {/* Media Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 w-full">
          {Array.isArray(media) && media.length > 0 ? (
            media.slice(0, 9).map(item => (
              <div key={item.id} className="relative rounded-lg shadow-lg bg-gray-200 overflow-hidden">
                <img
                  src={item.media_url}
                  alt={item.caption || "Instagram Media"} // Added meaningful alt text
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs sm:text-sm text-center px-2">
                    {item.caption || "No caption"}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No media available</p> // Display a message if there are no media items
          )}
        </div>

        {/* Follow Me Section */}
        <div className="mt-10 w-full">
          <p className="text-md sm:text-lg font-semibold flex items-center">
            <FaInstagram className="text-xl sm:text-2xl mr-2" /> {/* Instagram logo */}
            Follow us on Instagram: 
            <a 
              href="https://www.instagram.com/learning4lifedrivingschool/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-teal-400 underline ml-1 font-bold"
            >
              @Learning4LifeDrivingSchool
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
