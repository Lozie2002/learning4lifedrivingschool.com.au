import React from "react";
import Hero from "../components/Home/Hero";
import Introduction from "../components/Home/Introduction";
import Location from "../components/Home/Location";
import Services from "../components/Home/servicesBasic";
import Reviews from "../components/Home/reviews";

function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <Services />
      <Location />
      <Reviews />
    </div>
  );
}

export default Home;
