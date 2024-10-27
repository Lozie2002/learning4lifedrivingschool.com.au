import React from "react";

import SolarImage from "../../Images/solarPanel.jpg";
import PressureWashingImage from "../../Images/ExteriorCleaning.jpg";
import ConcreteSealingImage from "../../Images/SideWalkCleaning2After.jpg";
import WindowCleaningImage from "../../Images/WindowCleaning.jpg";
import RoofCleaningImage1 from "../../Images/RoofCleaning1.jpg";
import RoofCleaningImage2 from "../../Images/RoofCleaning2.jpg";
import RoofCleaningImage3 from "../../Images/RoofCleaning3.jpg";
import SurfaceCleaningImage from "../../Images/SurfaceCleaning.jpg";
import DrivewayCleaningImageBefore from "../../Images/DrivewayBefore.jpg";
import DrivewayCleaningImageAfter from "../../Images/DrivewayAfter.jpg";
import RoofCleaningNew1 from "../../Images/RoofCleaningNew1.jpg";
import RoofCleaningNew2 from "../../Images/RoofCleaningNew2.jpg";

const galleryImages = [
  { src: SolarImage, alt: "Solar Panel Cleaning" },
  { src: PressureWashingImage, alt: "Pressure Washing" },
  { src: ConcreteSealingImage, alt: "Concrete Sealing" },
  { src: WindowCleaningImage, alt: "Window Cleaning" },
  { src: RoofCleaningImage1, alt: "Roof Cleaning 1" },
  { src: RoofCleaningImage2, alt: "Roof Cleaning 2" },
  { src: RoofCleaningImage3, alt: "Roof Cleaning 3" },
  { src: SurfaceCleaningImage, alt: "Surface Cleaning" },
  { src: DrivewayCleaningImageBefore, alt: "Driveway Cleaning Before" },
  { src: DrivewayCleaningImageAfter, alt: "Driveway Cleaning After" },
  { src: RoofCleaningNew1, alt: "Roof Cleaning New 1" },
  { src: RoofCleaningNew2, alt: "Roof Cleaning New 2" },
];

// Function to shuffle the array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

function GallerySection() {
  // Shuffle images for random layout
  const shuffledImages = shuffleArray([...galleryImages]);

  return (
    <div className="flex items-center justify-center w-full bg-white py-0 min-h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-screen-lg px-0">
        {/* Section Heading */}
        <h2 className="pb-4 text-5xl font-bold tracking-wide text-black text-center drop-shadow-md">
          Images From our Recent Jobs
        </h2>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full h-full mt-4">
          {shuffledImages.map((image, index) => (
            <div
              key={index}
              className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
