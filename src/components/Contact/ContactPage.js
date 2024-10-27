import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, such as sending data to a server
    console.log({ name, email, phone, message });
  };

  return (
    <div className="bg-white h-[70vh] flex flex-col items-center justify-center relative">
      {/* Contact Form Section */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center flex-col my-6 lg:my-10 px-4 lg:px-10 z-20">
        <div className="flex flex-col items-center justify-center w-full lg:w-4/5 text-center">
          {/* Heading */}
          <h1 className="text-black text-2xl lg:text-4xl font-bold">
            Contact <span className="text-[#ad50eb]">Lush Exterior Cleaning</span>
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full mt-6 space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-left text-black font-semibold">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Ez"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-left text-black font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-left text-black font-semibold">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-left text-black font-semibold">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-purple-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
