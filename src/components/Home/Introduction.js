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
                    <h2 className="pb-2 text-7xl font-light tracking-wide text-black"> {/* Increased font size */}
                        Who Are We
                    </h2>
                    <p className="font-light text-xl md:text-3xl text-black pt-5 leading-relaxed max-w-[800px]"> {/* Increased font size */}
                        I'm Lukas Argerakis, the founder and owner of Lush Exterior Cleaning, established in 2022. Driven by a passion for making homes and businesses shine, my journey began after being inspired by window cleaning videos on social media. Today, I offer a range of services, including pressure washing and window cleaning, all designed to enhance the curb appeal of your property. With a strong commitment to quality, attention to detail, and customer satisfaction, I strive to deliver outstanding results every time. Whether you're looking to revitalize your home or business exterior, I'm here to help!
                    </p>

                    <p className="font-light text-xl md:text-3xl text-black leading-relaxed max-w-[800px] mt-4"> {/* Increased font size */}
                        Contact us today to find out more about our services and how we can help you keep your space clean and tidy.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Interduce;
