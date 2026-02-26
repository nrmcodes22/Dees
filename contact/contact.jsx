"use client"
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState('success'); // 'success' or 'error'

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setFormData({
        firstName: '', lastName: '', email: '', countryCode: '+91',
        phone: '', budget: '', website: '', brandName: '',
        timeframe: '', services: '', findMe: '', description: ''
      });
      setPopupType('success');
      setShowPopup(true);
      setIsSubmitting(false); // ← stops spinner exactly when popup appears
    } else {
      setPopupType('error');
      setShowPopup(true);
      setIsSubmitting(false);
    }
  } catch (err) {
    console.error(err);
    setPopupType('error');
    setShowPopup(true);
    setIsSubmitting(false);
  }
};

  return (
    <>
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

  <PhoneInput
    country={"in"}
    value={formData.phone}
    onChange={(phone) =>
      setFormData((prev) => ({ ...prev, phone }))
    }
    inputClass="!w-full !py-3 !pl-14 !border-gray-300 !rounded-md"
    containerClass="!w-full"
    buttonClass="!border-gray-300"
  />
</div>

                {/* Budget Section */}
                <div>
  <label className="block text-[clamp(14px,5vw,26px)] font-normal text-black mb-4">
    Your Budget <span className="text-sm font-normal text-[#6D7876]">(required)</span>
  </label>

  <div className="relative">
    <select
      name="budget"
      value={formData.budget}
      onChange={handleChange}
      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white appearance-none"
      required
    >
      <option value="">Select an option</option>
      <option>$500 - $1000</option>
      <option>$1000 - $2000</option>
      <option>$2000 - $4000</option>
      <option>$4000+</option>
    </select>

    <svg
      className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none"
      xmlns="/images/icons/CaretDown.svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
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

  <div className="relative">
    <select
      name="timeframe"
      value={formData.timeframe}
      onChange={handleChange}
      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white appearance-none"
      required
    >
      <option value="">Select an option</option>
      <option>1-2 weeks</option>
      <option>2-4 weeks</option>
      <option>1-2 months</option>
      <option>3+ months</option>
    </select>

    <svg
      className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none"
      xmlns="/images/icons/CaretDown.svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>

                {/* Services Section */}
                <div>
  <label className="block text-[clamp(14px,5vw,26px)] font-normal text-black mb-4">
    What services are you looking for? <span className="text-sm font-normal text-[#6D7876]">(required)</span>
  </label>

  <div className="relative">
    <select
      name="services"
      value={formData.services}
      onChange={handleChange}
      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white appearance-none"
      required
    >
      <option value="">Select an option</option>
      <option>Logo Design</option>
      <option>Visual Identity</option>
      <option>Packaging Design</option>
      <option>Colateral Design</option>
      <option>UI/UX Design</option>
      <option>Web Development</option>
      <option>Make Your Own Package</option>
    </select>

    <svg
      className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none"
      xmlns="/images/icons/CaretDown.svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>

                {/* How Did You Find Me Section */}
                <div>
  <label className="block text-[clamp(14px,5vw,26px)] font-normal text-black mb-4">
    How did you find me?
  </label>

  <div className="relative">
    <select
      name="findMe"
      value={formData.findMe}
      onChange={handleChange}
      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white appearance-none"
    >
      <option value="">Select an option</option>
      <option>Google Search</option>
      <option>Social Media</option>
      <option>Referral</option>
      <option>Other</option>
    </select>

    <svg
      className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
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
    disabled={isSubmitting}
    className="px-16 py-4 bg-[#570202] text-white text-lg font-normal rounded-full hover:bg-red-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
  >
    {isSubmitting ? (
      <>
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
        Sending...
      </>
    ) : (
      "Send"
    )}
  </button>
</div>
              </div>
            </div>
          </div>
        </div>









      </section>

      {/* Popup Modal */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.6)', animation: 'fadeIn 0.3s ease-out' }}
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white rounded-2xl p-10 max-w-md w-[90%] text-center shadow-2xl"
            style={{ animation: 'slideUp 0.4s ease-out' }}
            onClick={(e) => e.stopPropagation()}
          >
            {popupType === 'success' ? (
              <>
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-2xl font-semibold text-black mb-3">Thank You!</h3>
                <p className="text-[#6D7876] leading-relaxed mb-6">
                  Your message has been received. I'll get back to you as soon as possible. Looking forward to creating something amazing together!
                </p>
              </>
            ) : (
              <>
                <div className="text-5xl mb-4">😔</div>
                <h3 className="text-2xl font-semibold text-black mb-3">Oops!</h3>
                <p className="text-[#6D7876] leading-relaxed mb-6">
                  Something went wrong. Please try again or reach out directly via email.
                </p>
              </>
            )}
            <button
              onClick={() => setShowPopup(false)}
              className="px-10 py-3 bg-[#570202] text-white rounded-full hover:bg-red-800 transition-colors text-sm tracking-wider uppercase"
            >
              {popupType === 'success' ? 'Sounds Good!' : 'Try Again'}
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
}
