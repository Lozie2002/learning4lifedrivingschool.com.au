import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

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
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
