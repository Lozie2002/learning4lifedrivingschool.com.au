import React from "react";

function Interduce() {
    return (
        <div
            className="flex items-center justify-center w-full"
            style={{
                backgroundColor: "white", // Set background color
                minHeight: "30vh", // Set a smaller minimum height
                paddingBottom: "2rem", // Adjust bottom padding to prevent overflow
                paddingTop: "2rem", // Add top padding for better spacing
            }}
        >
            <div className="flex flex-col items-start justify-start text-left w-full max-w-screen-lg px-5">
                <div className="flex w-full flex-col md:w-full">
                    <h2 className="pb-2 text-5xl font-bold tracking-wide text-blue-300"> {/* Increased font size */}
                        Who Are We
                    </h2>
                    <p className="text-xl md:text-xl text-black pt-5 leading-relaxed max-w-[800px]"> {/* Increased font size */}
                    Our Mission is to coach and empower individuals of all ages to become confident, responsible, and skilled drivers for life. We are dedicated to building the knowledge and abilities needed to not only pass the driving test on the first attempt but to ensure lasting road safety and confidence behind the wheel.
                    </p>
                    <p className="text-xl md:text- xl text-black leading-relaxed max-w-[800px] mt-4"> {/* Increased font size */}
                        Contact us today to find out more about our services and how we can help you keep your space clean and tidy.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Interduce;
