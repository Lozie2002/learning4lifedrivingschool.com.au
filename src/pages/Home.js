import React from "react";
import Welcome from "../components/Home/WelcomePage";
import Introduction from "../components/Home/Introduction";
import VehicleOptions from "../components/Home/VehicleOptions";
import Staff from "../components/Home/Staff";
import Values from "../components/Home/Values";
import Services from "../components/Home/Services";
import CustomerReviews from "../components/Home/customerReviews";

function Home() {
  return (
    <div>
      <Welcome />
      <Introduction />
      <Values />

      <Staff />
      <VehicleOptions />
      <Services />
      <CustomerReviews />
     
    </div>
  );
}

export default Home;
