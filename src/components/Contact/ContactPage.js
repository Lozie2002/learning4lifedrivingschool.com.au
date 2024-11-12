import React, { useState } from "react";
import Learning4lifeBackground from "../../Images/Learning4lifeBackground.webp"; // Adjust the path based on your folder structure

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center relative overflow-hidden p-8">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center lg:items-center my-2 lg:gap-10">
        <h1 className="text-customColor text-5xl font-extrabold my-5 text-center"> {/* Increased font size and weight */}
          CONTACT ME
        </h1>
        <form className="w-full lg:w-3/4" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="text-black text-lg font-semibold" htmlFor="name"> {/* Increased label font size */}
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 rounded bg-gray-200 text-customColor border border-customColor text-lg" 
            />
          </div>
          <div className="mb-5">
            <label className="text-black text-lg font-semibold" htmlFor="email"> {/* Increased label font size */}
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 rounded bg-gray-200 text-customColor border border-customColor text-lg" 
            />
          </div>
          <div className="mb-5">
            <label className="text-black text-lg font-semibold" htmlFor="message"> {/* Increased label font size */}
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 mt-2 rounded bg-gray-200 text-customColor border border-customColor text-lg" 
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-customColor hover:bg-black text-white font-bold py-3 rounded text-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-5">
        <img
          src={Learning4lifeBackground} // Use the imported image
          alt="Aidan Lozell"
          className="w-full h-auto max-w-lg lg:max-w-xl rounded-lg shadow-2xl border-4 border-customColor"
        />
      </div>
    </div>
  );
}

export default ContactForm;
