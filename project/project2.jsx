"use client"
import React, { useState } from 'react';
export default function Project2() {
    const projects = [
  {
    title: "Preston",
    category: "Visual Identity",
    year: 2025,
    image: "/images/project/preston.png",
  },
  {
    title: "Vastrajna",
    category: "Visual Identity",
    year: 2025,
    image: "/images/project/vastra.png",
  },
  {
    title: "Machlee ROV",
    category: "Logo Design",
    year: 2024,
    image: "/images/project/machlee.png",
  },
  {
    title: "Evolvix IQ",
    category: "Logo Design",
    year: 2024,
    image: "/images/project/evolvix.png",
  },
  {
    title: "E-Cell NIT Rourkela",
    category: "Logo Design",
    year: 2024,
    image: "/images/project/ecell.png",
  },
  {
    title: "Eco Bloom",
    category: "Visual Identity",
    year: 2023,
    image: "/images/project/ecobloom.png",
  },
  {
    title: "UVXYZ",
    category: "Visual Identity",
    year: 2025,
    image: "/images/project/uvxyz.png",
  },
  {
    title: "Culture Concept Interior Solution",
    category: "Brand Identity",
    year: 2025,
    image: "/images/project/culture.png",
  },
  {
    title: "Ask Hally",
    category: "Logo Design",
    year: 2025,
    image: "/images/project/askhally.png",
  },
  {
    title: "Veyora",
    category: "Visual Identity",
    year: 2024,
    image: "/images/project/veyora.png",
  },
  {
    title: "Z Trady",
    category: "Logo Design",
    year: 2025,
    image: "/images/project/machlee.png",
  },
  {
    title: "Vayu Tech",
    category: "Brand Identity",
    year: 2024,
    image: "/images/project/evolvix.png",
  },
  {
    title: "Furno Express",
    category: "Visual Identity",
    year: 2025,
    image: "/images/project/flrno.png",
  },
  {
    title: "Lushkart",
    category: "Logo Design",
    year: 2024,
    image: "/images/project/vastra.png",
  },
  {
    title: "Klairlint",
    category: "Logo Design",
    year: 2023,
    image: "/images/project/klairnet.png",
  },
  {
    title: "Pickle Basket",
    category: "Logo Design",
    year: 2025,
    image: "/images/project/evolvix.png",
  },
  {
    title: "Preston",
    category: "Visual Identity",
    year: 2025,
    image: "/images/project/preston.png",
  },
  {
    title: "Sweet Hat Dough Co.",
    category: "Visual Identity",
    year: 2025,
    image: "/images/project/sweethat.png",
  },
  {
    title: "Fridge Friend",
    category: "Brand Identity",
    year: 2025,
    image: "/images/project/fridgefriend.png",
  },
  {
    title: "House of Petals",
    category: "Logo Design",
    year: 2024,
    image: "/images/project/housepetals.png",
  },
  {
    title: "Coming Soon ",
    category: "Logo Design",
    year: 2024,
    image: "/images/project/comingsoon.png",
  },
  

  // 
];
return (
    <section className="py-6 px-8 md:px-20 bg-white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className=""
          >
            <div className="md:h-72 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="py-4">
              {/* Title & Year same line */}
              <h3 className="text-xl font-semibold text-black">
                  {project.title}
                </h3>
              <div className="flex justify-between items-center font-medium text-[#989898] text-lg">
                <p className="">{project.category}</p>
                <p className="">{project.year}</p>
              </div>

              {/* Category below */}
              
            </div>
          </div>
          
        ))}
      </div>
    </section>
)
}