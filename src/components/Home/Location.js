import React from "react";
import MapImage from "../../Images/Map.png";
function Interduce() {
    return (
        <section
            className="flex items-center justify-center w-full bg-white min-h-[30vh] pb-8"
        >
            <div className="flex flex-col items-start justify-start text-left w-full max-w-screen-lg px-5 pt-10">
                <div className="flex flex-col w-full">
                    <h2 className="pb-2 text-5xl font-light tracking-wide text-black">
                        We Service
                    </h2>
                    <p className="font-poppins text-3xl text-black pt-5 max-w-[1000px]">
                        Sutherland Shire // Wollongong // Illawarra // Sydney
                    </p>
                    <p className="font-poppins text-2xl text-black pt-5 max-w-[1000px]">
                        Call Us on:
                        <br />
                        0455 555 555
                        <br />
                        to see if we service your area.
                    </p>
                </div>
                {/* Commenting out the Map image */}
                 <img
                    src={MapImage}
                    alt="Map"
                    className="w-full h-auto object-cover rounded-lg mt-6"
                /> 
            </div>
        </section>
    );
}

export default Interduce;
