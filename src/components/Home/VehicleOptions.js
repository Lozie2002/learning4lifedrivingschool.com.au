import React from "react";
import Car from "../../Images/Car.webp";

function Interduce() {
    return (
        <section className="flex items-center justify-center w-full bg-white min-h-[30vh] pb-8">
            <div className="flex flex-col items-start justify-start text-left w-full max-w-screen-lg px-5 pt-10">
                <div className="flex flex-col w-full">
                <h2 className="pb-2 text-5xl font-bold tracking-wide text-blue-300"> {/* Increased font size */}
                        Vehicles and Options
                    </h2>
                    <p className="font-poppins text-l text-black pt-2 max-w-[1000px] leading-relaxed">
                        L4L Driving School offers a high-quality learning experience using 2021 Hyundai i30 vehicles equipped with dual controls, allowing instructors to ensure a safe and low-risk environment for new drivers. This system is especially helpful for nervous or unsure students, providing extra security and confidence. Alongside these advanced safety features, L4L’s professional trainers deliver comprehensive and supportive instruction, helping students develop essential driving skills and good habits. Whether you’re a beginner or need a refresher, L4L Driving School provides an ideal setting for mastering driving.
                    </p>
                </div>
                {/* Commenting out the Map image */}
                <img
                    src={Car}
                    alt="Car"
                    className="w-full h-auto object-cover rounded-lg mt-6 shadow-md"
                />
            </div>
        </section>
    );
}

export default Interduce;
