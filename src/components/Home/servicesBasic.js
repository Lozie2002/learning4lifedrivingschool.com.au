import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import PressureWashingPhoto from "../../Images/ExteriorCleaning.jpg";
import ConcreteSealingPhoto from "../../Images/SideWalkCleaning2After.jpg";
import WindowCleaningPhoto from "../../Images/WindowCleaning.jpg";
import RoofCleaningPhoto1 from "../../Images/RoofCleaning1.jpg";
import SurfaceCleaningPhoto from "../../Images/SurfaceCleaning.jpg";

function Interduce() {
    return (
        <div
            className="flex items-center justify-center w-full"
            style={{
                backgroundColor: "white",
                minHeight: "30vh",
                paddingBottom: "2rem",
            }}
        >
            <div className="flex flex-col items-start justify-start text-left w-full max-w-screen-lg px-5 pt-10">
                <div className="flex w-full flex-col md:w-[100%]">
                    <p className="pb-6 text-5xl md:text-6xl font-light tracking-wide text-black">
                        Our Services
                    </p>

                    {/* 2x3 Grid for Images and Services */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Pressure Washing */}
                        <section className="text-center">
                            <img
                                src={PressureWashingPhoto}
                                alt="Pressure Washing"
                                className="w-full h-48 object-cover mx-auto mb-4 rounded-lg"
                            /> 
                            <h1 className="text-3xl md:text-4xl font-semibold text-black mb-2">
                                Exterior Cleaning
                            </h1>
                            <p className="font-poppins text-lg md:text-xl text-black">
                                Pressure washing removes stubborn stains, grime, mould, and algae, all possible slip hazards for your family.
                            </p>
                            <p className="font-poppins text-lg md:text-xl text-black mt-2">
                                <strong>Starting Price for Pressure Washing: $150</strong>
                            </p>
                        </section>

                        {/* Concrete Sealing */}
                        <section className="text-center">
                            {<img
                                src={ConcreteSealingPhoto}
                                alt="Concrete Sealing"
                                className="w-full h-48 object-cover mx-auto mb-4 rounded-lg"
                            /> }
                            <h1 className="text-3xl md:text-4xl font-semibold text-black mb-2">
                                Concrete Sealing
                            </h1>
                            <p className="font-poppins text-lg md:text-xl text-black">
                                Sealing your concrete creates a barrier against water infiltration, moisture damage, and pollutants like oil and grease.
                            </p>
                            <p className="font-poppins text-lg md:text-xl text-black mt-2">
                                <strong>Starting Price for Concrete Sealing: $200</strong>
                            </p>
                        </section>

                        {/* Window Cleaning */}
                        <section className="text-center">
                             <img
                                src={WindowCleaningPhoto}
                                alt="Window Cleaning"
                                className="w-full h-48 object-cover mx-auto mb-4 rounded-lg"
                            /> 
                            <h1 className="text-3xl md:text-4xl font-semibold text-black mb-2">
                                Window Cleaning
                            </h1>
                            <p className="font-poppins text-lg md:text-xl text-black">
                                Clean windows allow more sunlight into your home, making it brighter and more inviting.
                            </p>
                            <p className="font-poppins text-lg md:text-xl text-black mt-2">
                                <strong>Starting Price for Window Cleaning: $100</strong>
                            </p>
                        </section>

                        {/* Roof Cleaning */}
                        <section className="text-center">
                             <img
                                src={RoofCleaningPhoto1} // You can change this to RoofCleaningPhoto2 or RoofCleaningPhoto3 as needed
                                alt="Roof Cleaning"
                                className="w-full h-48 object-cover mx-auto mb-4 rounded-lg"
                            />
                            <h1 className="text-3xl md:text-4xl font-semibold text-black mb-2">
                                Roof Cleaning
                            </h1>
                            <p className="font-poppins text-lg md:text-xl text-black">
                                Roof cleaning removes dirt, algae, and moss, enhancing your roof's appearance and extending its lifespan.
                            </p>
                            <p className="font-poppins text-lg md:text-xl text-black mt-2">
                                <strong>Starting Price for Roof Cleaning: $250</strong>
                            </p>
                        </section>

                        {/* Surface Cleaning */}
                        <section className="text-center">
                             <img
                                src={SurfaceCleaningPhoto}
                                alt="Surface Cleaning"
                                className="w-full h-48 object-cover mx-auto mb-4 rounded-lg"
                            /> 
                            <h1 className="text-3xl md:text-4xl font-semibold text-black mb-2">
                                Surface Cleaning
                            </h1>
                            <p className="font-poppins text-lg md:text-xl text-black">
                                Surface cleaning provides a deep clean for patios, driveways, and other outdoor surfaces.
                            </p>
                            <p className="font-poppins text-lg md:text-xl text-black mt-2">
                                <strong>Starting Price for Surface Cleaning: $180</strong>
                            </p>
                        </section>

                    </div>

                    {/* Single "See More Information" Button */}
                    <Link to="/services" className="mt-8 inline-block">
                        <button className="bg-purple-500 text-white font-semibold py-2 px-4 rounded hover:bg-purple-600 transition duration-300">
                            See More Information
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Interduce;
