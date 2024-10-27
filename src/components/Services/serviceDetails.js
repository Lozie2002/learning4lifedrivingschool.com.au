import React from "react";
import PressureWashingPhoto from "../../Images/ExteriorCleaning.jpg";
import ConcreteSealingPhoto from "../../Images/SideWalkCleaning2After.jpg";
import WindowCleaningPhoto from "../../Images/WindowCleaning.jpg";
import RoofCleaningPhoto1 from "../../Images/RoofCleaning1.jpg";
import SurfaceCleaningPhoto from "../../Images/SurfaceCleaning.jpg";
import GutterCleaningPhotoNew1 from "../../Images/RoofCleaningNew1.jpg";
import GutterCleaningPhotoNew2 from "../../Images/RoofCleaningNew2.jpg";

function Services() {
  return (
    <div className="flex flex-col items-start justify-start relative overflow-hidden w-full bg-white">
      <h1 className="text-gray-900 font-bold text-5xl my-8 text-center w-full">
        Our Services
      </h1>

      <p className="text-gray-700 text-left mb-6 max-w-4xl self-center text-lg">
        We offer a range of high-quality cleaning services tailored to keep your
        home or business looking its best. Whether it's pressure washing,
        window cleaning, or solar panel maintenance, we've got you covered.
      </p>

      <div className="z-20 flex flex-col items-start gap-6 m-4 w-full max-w-5xl mx-auto">

        {/* Pressure Washing */}
        <ServiceCard
          title="Pressure Washing"
          description="Pressure washing is an effective method to remove stubborn stains, grime, mould, and algae that can create slip hazards. This service is ideal for enhancing the curb appeal of your property."
          benefits="Improved safety, enhanced appearance, increased property value, and prevention of surface deterioration."
          process="We utilize high-pressure water jets to effectively clean a variety of surfaces including driveways, decks, and siding. Our skilled team ensures that every corner is thoroughly cleaned."
          image={SurfaceCleaningPhoto}
        />

        {/* Concrete Sealing */}
        <ServiceCard
          title="Concrete Sealing"
          description="Sealing your concrete surfaces protects against water infiltration, moisture damage, and stains from pollutants such as oil and grease, ultimately preserving their integrity."
          benefits="Prolongs the lifespan of your concrete surfaces, enhances their color, prevents staining, and reduces maintenance costs over time."
          process="Our process includes cleaning the surface thoroughly, applying a high-quality sealant designed for durability, and ensuring proper curing for optimal results."
          image={ConcreteSealingPhoto}
        />

        {/* Window Cleaning */}
        <ServiceCard
          title="Window Cleaning"
          description="Regular window cleaning not only enhances the natural light in your home but also prevents the buildup of grime and dirt that can degrade your windows over time."
          benefits="Enhanced natural light, improved aesthetics, extended lifespan of windows, and increased energy efficiency."
          process="We use a combination of traditional methods, such as squeegeeing, along with modern equipment for streak-free results that leave your windows crystal clear."
          image={WindowCleaningPhoto}
        />

        {/* Gutter Cleaning */}
        <ServiceCard
          title="Gutter Cleaning"
          description="Clogged gutters can lead to serious water damage, which is why regular gutter cleaning is essential. It ensures that rainwater flows freely, protecting your home from potential damage."
          benefits="Prevents water damage, pest infestations, reduces the risk of mould growth, and saves you from costly repairs in the long run."
          process="Our team carefully removes debris from gutters and downspouts, ensuring proper flow and functionality. We also inspect for damages or areas that may need repairs."
          images={[GutterCleaningPhotoNew1, GutterCleaningPhotoNew2]}
        />

        {/* House Washing */}
        <ServiceCard
          title="House Washing"
          description="Soft washing is a gentle yet effective method to clean your house’s exterior, removing contaminants such as mildew and stains while being safe for delicate surfaces."
          benefits="Safe for delicate surfaces, prolongs the lifespan of your paint and siding, and significantly enhances curb appeal."
          process="We utilize low-pressure water combined with specialized detergents to safely and effectively clean surfaces without damaging them."
          image={PressureWashingPhoto}
        />

        {/* Roof Washing */}
        <ServiceCard
          title="Roof Washing"
          description="Our roof washing service is designed to remove harmful mould and mildew, helping to preserve the structural integrity of your roof while enhancing its appearance."
          benefits="Extends the lifespan of your roof, improves energy efficiency by reflecting sunlight, and significantly boosts your home's aesthetic appeal."
          process="We use soft washing techniques along with eco-friendly products to safely clean roofs without causing any damage."
          image={RoofCleaningPhoto1}
        />
      </div>
    </div>
  );
}

// ServiceCard component to encapsulate service details and image
const ServiceCard = ({ title, description, benefits, process, image, images }) => (
  <div className="flex flex-col lg:flex-row p-6 rounded-lg w-full bg-gray-100 shadow-md">
    <div className="lg:w-1/2 pr-4">
      <h2 className="text-4xl font-semibold text-gray-800 mb-2 text-left">
        {title}
      </h2>
      <p className="text-gray-600 text-left mb-2 text-xl">
        {description}
      </p>
      <p className="text-gray-600 text-left text-xl">
        <strong>Benefits:</strong> {benefits}
      </p>
      <p className="text-gray-600 text-left mt-1 text-xl">
        <strong>Process:</strong> {process}
      </p>
    </div>
    <div className="lg:w-1/2 mt-4 lg:mt-0">
      {images ? (
        images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={title}
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />
        ))
      ) : (
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg shadow-md"
        />
      )}
    </div>
  </div>
);

export default Services;
