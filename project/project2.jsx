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
    title: "Ask Haily",
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
    <section className="hidden md:block pt-[50px] px-[clamp(20px,4vw,120px)] bg-white">
        <div className="grid grid-cols-4 gap-6  mb-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className=""
          >
            <div className="w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className=" object-cover rounded-md"
              />
            </div>
            <div className="py-4">
              {/* Title & Year same line */}
              <h3 className="text-[clamp(13px,1.5vw,26px)] font-[500] tracking-tighter leading-[90%] text-black w-full">
                  {project.title}
                </h3>
              <div className="flex justify-between items-center font-[400] text-[#989898] text-[clamp(12px,1.5vw,21px)]">
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