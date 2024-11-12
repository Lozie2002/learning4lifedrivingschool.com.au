import React from "react";
import { Route, Routes } from "react-router-dom";
import { FiCalendar } from "react-icons/fi"; // Importing the icon

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";

import Header from "./components/Extras/Header";
import Footer from "./components/Extras/Footer";
import ScrollToTop from "./components/Extras/ScrollToTop";

function App() {
  return (
    <div className="bg-white">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      {/* Enhanced Floating Book Button with Icon */}
      <a href="/contact" className="fixed bottom-5 right-5 z-50">
        <button className="flex items-center gap-2 px-8 py-5 bg-blue-400 text-white font-semibold rounded-full shadow-lg hover:bg-black hover:scale-105 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-teal-300">
          <FiCalendar className="text-xl" /> {/* Icon added here */}
          Book Now
        </button>
      </a>
    </div>
  );
}

export default App;
