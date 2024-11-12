import React from "react";
import Welcome from "../components/Home/WelcomePage";
import Introduction from "../components/Home/Introduction";
import VehicleOptions from "../components/Home/VehicleOptions";
import Staff from "../components/Home/Staff";
import Reviews from "../components/Home/Reviews";
import Values from "../components/Home/Values";
import Services from "../components/Home/Services";

function Home() {
  return (
    <div>
      <Welcome />
      <Introduction />
      <Values />

      <Staff />
      <VehicleOptions />
      <Services />
      <Reviews />
    </div>
  );
}

export default Home;
