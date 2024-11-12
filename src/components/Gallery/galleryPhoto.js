import React from "react";
import GalleryPhoto1 from "../../Images/galleryImages/GalleryPhoto1.png";
import GalleryPhoto2 from "../../Images/galleryImages/GalleryPhoto2.png";
import GalleryPhoto3 from "../../Images/galleryImages/GalleryPhoto3.png";
import GalleryPhoto4 from "../../Images/galleryImages/GalleryPhoto4.png";
import GalleryPhoto5 from "../../Images/galleryImages/GalleryPhoto5.png";
import GalleryPhoto6 from "../../Images/galleryImages/GalleryPhoto6.png";
import GalleryPhoto7 from "../../Images/galleryImages/GalleryPhoto7.png";
import GalleryPhoto8 from "../../Images/galleryImages/GalleryPhoto8.png";
import GalleryPhoto9 from "../../Images/galleryImages/GalleryPhoto9.png";

// Array of images with alt text
const galleryImages = [
  { src: GalleryPhoto1, alt: "Gallery Photo 1" },
  { src: GalleryPhoto2, alt: "Gallery Photo 2" },
  { src: GalleryPhoto3, alt: "Gallery Photo 3" },
  { src: GalleryPhoto4, alt: "Gallery Photo 4" },
  { src: GalleryPhoto5, alt: "Gallery Photo 5" },
  { src: GalleryPhoto6, alt: "Gallery Photo 6" },
  { src: GalleryPhoto7, alt: "Gallery Photo 7" },
  { src: GalleryPhoto8, alt: "Gallery Photo 8" },
  { src: GalleryPhoto9, alt: "Gallery Photo 9" },
];

// Function to shuffle the array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

function GallerySection() {
  // Shuffle images for random layout
  const shuffledImages = shuffleArray([...galleryImages]);

  return (
    <div className=" bg-gradient-to-r from-blue-300 to-blue-200 flex items-center justify-center w-full bg-white py-0 min-h-screen pb-5 pl-5 pr-5 pt-5">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-screen-lg px-0">
        {/* Section Heading */}
        <h2 className="pb-4 text-5xl font-bold tracking-wide text-white text-center">
          Gallery 
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
