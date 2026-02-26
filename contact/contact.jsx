"use client"
import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    budget: '',
    website: '',
    brandName: '',
    timeframe: '',
    services: '',
    findMe: '',
    description: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="pt-[50px] px-[clamp(20px,4vw,120px)] bg-white">
      {/* Section heading */}
      <div
        className="flex items-center gap-4"
      >
        <h2
          className="text-[clamp(16px,2.3vw,28px)] font-[500] text-black whitespace-nowrap"
        >
          Contact
        </h2>
        <div
          className="flex-1 h-px bg-[#989898]"
         
        />
      </div>

      {/* Main layout */}
       <div className="mt-6 pb-10">
        
          <div className="flex flex-col md:flex md:flex-row md:justify-between  gap-8 md:gap-0">
            {/* Left Column - Intro */}
            <div className="flex flex-col md:w-[38%] space-y-6 ">
              <h1 className="text-4xl font-normal text-black">Well, Hey!</h1>
              
              <div className="space-y-4 text-[#6D7876]">
                <p>I'm excited to hear from you and explore how we can work together to create something amazing.</p>
                <p>Got a project in mind? Let's chat! Whether you're looking for a fresh design perspective, need help with branding, or just want to say hello, I'm here to listen. Drop me a line, and let's see how we can bring your ideas to life!</p>
              </div>

              <div className="space-y-3 text-[#6D7876]">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                  <p>dollamanibehera567@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  <p>Rourkela, India</p>
                </div>
              </div>

              {/* Image */}
              <div className="mt-8 flex-1">
                <img 
                  className="w-full h-64 md:h-full object-cover rounded-lg" 
                  src="images/contact_page.jpg"
                  alt="Workspace with laptop"
                />
              </div>
            </div>

            {/* Right Column - Form */}
            
              <div className="rounded-lg md:w-[55%] border-gray-300 border-1 py-4 px-2 md:py-8 md:px-6">
                <div className="space-y-6 text-black">
                  {/* Name Section */}
                  <div>
                    <label className="block text-[clamp(14px,5vw,26px)] font-normal text-black mb-4">
                      Name <span className="text-sm font-normal text-[#6D7876]">(required)</span>
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-[#565656] mb-2">First name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#565656] mb-2">Last name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email Section */}
                  <div>
                    <label className="block text-[clamp(14px,5vw,26px)] font-normal text-black mb-4">
                      Email <span className="text-sm font-normal text-[#6D7876]">(required)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                      required
                    />
                  </div>

                  {/* Phone Number Section */}
                  <div>
                    <label className="block text-[clamp(14px,5vw,26px)] font-normal text-black mb-4">
                      Phone No.
                    </label>
                    <div className="flex gap-2">
                      <select 
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
                      >
                        <option>+91</option>
                        <option>+1</option>
                        <option>+44</option>
                        <option>+61</option>
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                      />
                    </div>
                  </div>

                  {/* Budget Section */}
                  <div>
                    <label className="block text-[clamp(14px,5vw,26px)] font-normal text-black mb-4">
                      Your Budget <span className="text-sm font-normal text-[#6D7876]">(required)</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6D7876]">$</span>
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        required
                      />
                    </div>
                  </div>

                  {/* Website URL Section */}
                  <div>
                    <label className="block text-[clamp(14px,5vw,26px)] font-normal text-black mb-4">
                      Website URL
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>

                  {/* Brand or Product Name Section */}
                  <div>
                    <label className="block text-[clamp(14px,5vw,26px)] font-normal text-black mb-4">
                      Brand or product name <span className="text-sm font-normal text-[#6D7876]">(required)</span>
                    </label>
                    <input
                      type="text"
                      name="brandName"
                      value={formData.brandName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                      required
                    />
                  </div>

                  {/* Estimated Timeframe Section */}
                  <div>
                    <label className="block text-[clamp(14px,5vw,26px)] font-normal text-black mb-4">
                      Estimated timeframe <span className="text-sm font-normal text-[#6D7876]">(required)</span>
                    </label>
                    <select
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
                      required
                    >
                      <option value="">Select an option</option>
                      <option>1-2 weeks</option>
                      <option>2-4 weeks</option>
                      <option>1-2 months</option>
                      <option>3+ months</option>
                    </select>
                  </div>

                  {/* Services Section */}
                  <div>
                    <label className="block text-[clamp(14px,5vw,26px)] font-normal text-black mb-4">
                      What services are you looking for? <span className="text-sm font-normal text-[#6D7876]">(required)</span>
                    </label>
                    <select
                      name="services"
                      value={formData.services}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
                      required
                    >
                      <option value="">Select an option</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>UI/UX Design</option>
                      <option>Branding</option>
                      <option>SEO/Marketing</option>
                    </select>
                  </div>

                  {/* How Did You Find Me Section */}
                  <div>
                    <label className="block text-[clamp(14px,5vw,26px)] font-normal text-black mb-4">
                      How did you find me?
                    </label>
                    <select 
                      name="findMe"
                      value={formData.findMe}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
                    >
                      <option value="">Select an option</option>
                      <option>Google Search</option>
                      <option>Social Media</option>
                      <option>Referral</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Brief Project Description Section */}
                  <div>
                    <label className="block text-[clamp(14px,5vw,26px)] font-normal text-black mb-4">
                      Brief project description <span className="text-sm font-normal text-[#6D7876]">(required)</span>
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      onClick={handleSubmit}
                      className="px-16 py-4 bg-[#570202] text-white text-lg font-normal rounded-full hover:bg-red-800 transition-colors"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
      
    
      
   



      
    </section>
  );
}
