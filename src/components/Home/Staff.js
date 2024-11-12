import React from "react";
import shaunImage from "../../Images/Shaun.png"; // Importing Shaun's image
import dianaImage from "../../Images/Diana.webp"; // Importing Diana's image

function Interduce() {
    return (
        <div
            className="flex items-center justify-center w-full bg-gradient-to-r from-blue-300 to-blue-200"
            style={{
               
                minHeight: "30vh",
                paddingBottom: "2rem",
            }}
        >
            <div className="flex flex-col items-start justify-start text-left w-full max-w-screen-lg px-5 pt-10">
                <div className="flex w-full flex-col md:w-[100%]">
                    <h1 className="pb-2 text-7xl font-bold tracking-wide text-white">
                        Meet Our Staff
                    </h1>

                    {/* Diana's Section */}
                    <div className="text-gray-800 pt-6 max-w-[800px] space-y-6 ">
                        {/* Diana's Image */}
                        <img
                            src={dianaImage}
                            alt="Diana Lozell"
                            className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-teal-400 shadow-xl mb-4"
                        />
                        
                        <h2 className="pb-2 text-5xl font-medium tracking-wide text-white">Diana Lozell</h2>
                        <h3 className="text-2xl font-medium ">Principal Driver Trainer</h3>

                        <p className="font-light text-xl leading-relaxed tracking-wide">
                            I am proud that I have personally helped hundreds of young people overcome their self-doubt and anxieties to achieve their goals and become safe and confident drivers.
                        </p>
                        
                        <p className="font-light text-xl leading-relaxed tracking-wide">
                            I chose to become a Driver Trainer because I am driven to make the roads a safer place for myself, my loved ones, and the students I teach. Having personally experienced road rage from licensed drivers, I believe many drivers unknowingly place others at risk. My mission is to coach and develop respectful road users committed to safe driving for life.
                        </p>
                        
                        <p className="font-light text-xl leading-relaxed tracking-wide">
                            Through my role as Secretary for The NSW Driver Trainers Association, I am actively advocating for greater road safety and working towards reducing fatalities on NSW roads.
                        </p>

                        {/* Book Diana Button */}
                        <button className="mt-4 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600 focus:outline-none transition duration-300">
                            Book Diana
                        </button>
                    </div>

                    {/* Shaun's Section */}
                    <div className="text-gray-800 pt-10 max-w-[800px] space-y-6">
                        {/* Shaun's Image */}
                        <img
                            src={shaunImage}
                            alt="Shaun"
                            className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-teal-400 shadow-xl mb-4"
                        />
                        
                        <h2 className="pb-2 text-5xl font-medium tracking-wide text-white">Shaun</h2>
                        <h3 className="text-2xl font-medium ">Driver Trainer</h3>

                        <p className="font-light text-xl leading-relaxed tracking-wide">
                            With over five years of experience, I have a strong commitment to helping new drivers feel at ease behind the wheel and understand the rules of the road.
                        </p>
                        
                        <p className="font-light text-xl leading-relaxed tracking-wide">
                            My goal is to make each lesson informative, safe, and enjoyable. I tailor my teaching methods to fit each student’s individual needs, ensuring they feel confident and prepared for all aspects of driving.
                        </p>
                        
                        <p className="font-light text-xl leading-relaxed tracking-wide">
                            As a certified Driving Trainer, I am dedicated to instilling good habits and a respectful attitude towards other road users, creating safer roads for everyone.
                        </p>

                        {/* Book Shaun Button */}
                        <button className="mt-4 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600 focus:outline-none transition duration-300">
                            Book Shaun
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Interduce;
