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
                    <h2 className="pb-2 text-3xl font tracking-wide text-blue-300">
                        QUALIFIED DRIVER TRAINER
                    </h2>
                    <p className="text-xl md:text-xl text-black pt-5 leading-relaxed max-w-[800px]">
                        Diana has coached children and adult sport for more than 20 years. Diana understands the anxiety and nerves of learning something new, especially driving, and uses her own life experience to build relationships with students and deliver a trusting and safe environment for learning.
                    </p>
                    <h2 className="pb-2 text-3xl  tracking-wide text-blue-300 mt-8">
                        LOW RISK DRIVING
                    </h2>
                    <p className="text-xl md:text-xl text-black leading-relaxed max-w-[800px] mt-4">
                        Diana chose to become a Driving Trainer because she ultimately would like to make the roads a safer place for herself and loved ones. It is Diana’s mission to coach and deliver drivers who are respectful of other road users and commit to safe low-risk driving for life.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Interduce;
