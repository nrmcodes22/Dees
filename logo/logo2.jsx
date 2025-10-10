"use client"
import React from 'react'
const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo4.png",
  // ➕ Add all your logo image paths here
];
export default function logo2() {
    return(
        <section className="py-6 px-24 bg-black">
             <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center h-20 w-20">
            <img src={logo} alt={`Logo ${index + 1}`} className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>
        </section>
    )
}