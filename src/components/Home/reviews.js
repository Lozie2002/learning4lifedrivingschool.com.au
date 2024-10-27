import React from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ rating }) {
    return (
        <div className="flex">
            {[...Array(5)].map((star, index) => {
                return (
                    <FaStar
                        key={index}
                        className="text-yellow-500"
                        size={24}
                        color={index < rating ? "#FFD700" : "#E4E4E7"} // Gold color for filled stars, gray for empty stars
                    />
                );
            })}
        </div>
    );
}

function Interduce() {
    return (
        <div
            className="flex items-center justify-center w-full bg-white" // Set background gradient using Tailwind classes
            style={{
                minHeight: "30vh", // Set a smaller minimum height
                paddingBottom: "2rem", // Adjust bottom padding to prevent overflow
            }}
        >
            <div className="flex flex-col items-start justify-start text-left w-full max-w-screen-lg px-5 pt-10">
                <div className="flex w-full flex-col md:w-[100%]">
                    {/* Review Section */}
                    <div className="pt-10">
                        <h2 className="text-4xl md:text-5xl font-semibold text-black pb-4"> {/* Increased font size */}
                            Customer Reviews
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* 3-column layout */}
                            {/* Review Item 1 */}
                            <div className="bg-white border p-4 rounded-lg shadow-md">
                                <StarRating rating={5} /> {/* 5 stars for this review */}
                                <p className="font-poppins text-lg md:text-xl text-black"> {/* Increased font size */}
                                    "Lush Cleaning did an amazing job on my home! The team was professional and efficient. I highly recommend them!"
                                </p>
                                <p className="font-semibold text-gray-600 mt-2 text-md md:text-lg"> {/* Increased font size */}
                                    — Jane D.
                                </p>
                            </div>

                            {/* Review Item 2 */}
                            <div className="bg-white border p-4 rounded-lg shadow-md">
                                <StarRating rating={4} /> {/* 4 stars for this review */}
                                <p className="font-poppins text-lg md:text-xl text-black"> {/* Increased font size */}
                                    "Fantastic service! My windows have never been so clean. Will definitely use them again!"
                                </p>
                                <p className="font-semibold text-gray-600 mt-2 text-md md:text-lg"> {/* Increased font size */}
                                    — John S.
                                </p>
                            </div>

                            {/* Review Item 3 */}
                            <div className="bg-white border p-4 rounded-lg shadow-md">
                                <StarRating rating={5} /> {/* 5 stars for this review */}
                                <p className="font-poppins text-lg md:text-xl text-black"> {/* Increased font size */}
                                    "Great attention to detail and very friendly staff. I’m very pleased with the results!"
                                </p>
                                <p className="font-semibold text-gray-600 mt-2 text-md md:text-lg"> {/* Increased font size */}
                                    — Sarah T.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Interduce;
