"use client"
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    website: "",
    brandName: "",
    timeframe: "",
    services: "",
    findUs: "",
    description: "",
    countryCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <section className="py-6 px-6 md:px-12 lg:px-24 bg-white">
      {/* Section heading */}
      <div className="flex items-center gap-4 mt-20 mb-8">
        <h2 className="text-2xl md:text-3xl font-normal text-black whitespace-nowrap">
          Contact
        </h2>
        <div className="flex-1 h-px bg-[#989898]"></div>
      </div>

      {/* Main layout */}
      <div className="mt-10 flex flex-col lg:flex-row text-[#6D7876] justify-between gap-10 lg:gap-20">
        {/* Left side */}
        <div className="Left w-full lg:w-1/2 h-full">
          <h2 className="text-4xl md:text-6xl font-light text-black">
            Well, Hey!
          </h2>
          <p className="mt-6 md:mt-10 text-lg md:text-2xl">
            I'm excited to hear from you and explore how we can work together to
            create something amazing.
          </p>
          <p className="mt-6 md:mt-10 text-lg md:text-2xl">
            Got a project in mind? Let's chat! Whether you're looking for a
            fresh design perspective, need help with branding, or just want to
            say hello, I'm here to listen. Drop me a line, and let's see how we
            can bring your ideas to life!
          </p>
          <div className="flex items-center gap-2 mt-6 md:mt-10">
            <img src="/images/icons/EnvelopeSimple.png" className="h-6 md:h-10" />
            <p className="text-sm md:text-lg">dollamanibehera567@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <img src="/images/icons/MapPin.png" className="h-6 md:h-10" />
            <p className="text-sm md:text-lg">Rourkela, India</p>
          </div>
          <img
            src="/images/contact_page.jpg"
            className="mt-6 md:mt-10 w-full h-full rounded-lg object-contain"
          />
        </div>

        {/* Right side (Form) */}
        <div className="Right border border-[#D4D4D4] rounded-lg p-6 md:p-8 w-full lg:w-2/3">
          {/* Name */}
          <div className="mb-6 md:mb-8">
            <label className="block text-xl md:text-2xl font-light text-black mb-2">
              Name{" "}
              <span className="ml-2 text-gray-400 font-normal text-sm">
                (required)
              </span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-[#565656] text-sm md:text-lg mb-2">
                  First name
                </p>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#989898] rounded-full text-md"
                />
              </div>
              <div>
                <p className="text-[#565656] text-sm md:text-lg mb-2">
                  Last name
                </p>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#989898] rounded-full text-md"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="mb-6 md:mb-8">
            <label className="block text-xl md:text-2xl font-light text-black mb-2">
              Email{" "}
              <span className="ml-2 text-gray-400 font-normal text-sm">
                (required)
              </span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#989898] rounded-full text-md"
            />
          </div>

          {/* Phone */}
          <div className="mb-6 md:mb-8">
            <label className="block text-xl md:text-2xl font-light text-black mb-2">
              Phone No.
            </label>
            <div className="grid grid-cols-100 gap-4">
              
              <select
                className="p-3 border rounded-full col-span-6"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
              </select>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#989898] rounded-full text-md col-span-92"
              />
            </div>
          </div>

          {/* Budget */}
          <div className="mb-6 md:mb-8">
            <label className="block text-xl md:text-2xl font-light text-black mb-2">
              Your Budget{" "}
              <span className="ml-2 text-gray-400 font-normal text-sm">
                (required)
              </span>
            </label>
            <div className="relative">
              <span className="absolute top-3 left-4 text-gray-500 text-lg">
                $
              </span>
              <input
                type="text"
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 pl-8 border border-[#989898] rounded-full text-md"
              />
            </div>
          </div>

          {/* Website */}
          <div className="mb-6 md:mb-8">
            <label className="block text-xl md:text-2xl font-light text-black mb-2">
              Website URL
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#989898] rounded-full text-md"
            />
          </div>

          {/* Brand name */}
          <div className="mb-6 md:mb-8">
            <label className="block text-xl md:text-2xl font-light text-black mb-2">
              Brand or product name{" "}
              <span className="ml-2 text-gray-400 font-normal text-sm">
                (required)
              </span>
            </label>
            <input
              type="text"
              name="brandName"
              required
              value={formData.brandName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#989898] rounded-full text-md"
            />
          </div>

          {/* Timeframe */}
          <div className="mb-6 md:mb-8">
            <label className="block text-xl md:text-2xl font-light text-black mb-2">
              Estimated timeframe{" "}
              <span className="ml-2 text-gray-400 font-normal text-sm">
                (required)
              </span>
            </label>
            <div className="relative w-full">
              <select
                name="timeframe"
                value={formData.timeframe}
                onChange={handleChange}
                required
                className="appearance-none w-full px-4 py-3 border border-[#989898] rounded-full text-md pr-10"
              >
                <option value="">Select an option</option>
                <option value="1-2weeks">1-2 weeks</option>
                <option value="1month">1 month</option>
                <option value="2-3months">2-3 months</option>
                <option value="3+months">3+ months</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="relative mb-6 md:mb-8">
            <label className="block text-xl md:text-2xl font-light text-black mb-2">
              What services are you looking for?
              <span className="ml-2 text-gray-400 font-normal text-sm">
                (required)
              </span>
            </label>
            <div className="relative w-full">
                <select
              name="services"
              value={formData.services}
              onChange={handleChange}
              required
              className="appearance-none w-full px-4 py-3 border border-[#989898] rounded-full text-md pr-10"
            >
              <option value="">Select an option</option>
              <option value="web-design">Web Design</option>
              <option value="branding">Branding</option>
              <option value="marketing">Marketing</option>
              <option value="development">Development</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            
          </div>

          {/* Find Us */}
          <div className="mb-6 md:mb-8">
            <label className="block text-xl md:text-2xl font-light text-black mb-2">
              How did you find me?
            </label>
            <div className="relative w-full">
                <select
              name="findUs"
              value={formData.findUs}
              onChange={handleChange}
              className="appearance-none w-full px-4 py-3 border border-[#989898] rounded-full text-md"
            >
              <option value="">Select an option</option>
              <option value="google">Google</option>
              <option value="social-media">Social Media</option>
              <option value="referral">Referral</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            
          </div>

          {/* Description */}
          <div className="mb-6 md:mb-8">
            <label className="block text-xl md:text-2xl font-light text-black mb-2">
              Brief project description{" "}
              <span className="ml-2 text-gray-400 font-normal text-sm">
                (required)
              </span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 rounded-[30px] text-md resize-none border border-[#989898]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full md:w-auto bg-[#570202] text-white text-lg px-12 py-4 rounded-full hover:bg-[#6d0d0d] transition font-light"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
