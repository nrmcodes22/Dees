"use client";
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion"
const projects = [
  {
    title: "Evolvix IQ",
    category: "Digital Marketing & Web Development Agency",
    year: "2025",
    img: "/images/projectdivehero/evolvix.png",
  },
  {
    title: "MachLee ROV",
    category: "Logo Design",
    year: "2024",
    img: "/images/projectdivehero/machlee.png",
  },
  {
    title: "Vastrajana",
    category: "Clothing boutique",
    year: "2025",
    img: "/images/projectdivehero/vastra.png",
  },
  {
    title: "Eco Bloom",
    category: "Ecofriendly & sustainabile farming",
    year: "2023",
    img: "/images/projectdivehero/ecobloom.png",
  },
  {
    title: "Veyora",
    category: "Modern clothing brandd",
    year: "2023",
    img: "/images/projectdivehero/veyora.png",
  },
  {
    title: "Vayu Tech",
    category: "Agricultural drone company",
    year: "2024",
    img: "/images/projectdivehero/evolvix.png",
  },
  {
    title: "Z Trady",
    category: "AI powered trading assistant",
    year: "2025",
    img: "/images/projectdivehero/ztrady.png",
  },
  {
    title: "UVXYZ",
    category: "Software development company",
    year: "2025",
    img: "/images/projectdivehero/uvxyz.png",
  },
];

export default function Hero2() {
  return (
    <section className="py-6 px-20 bg-white">
      {/* Heading */}
      <motion.div 
      className=" flex items-center gap-4 mt-[131px] mb-8"
      initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
      >
        <h2 className="text-2xl font-normal text-black whitespace-nowrap">
          Projects you can dive into
        </h2>
        <div className="flex-1 h-px bg-[#989898]"></div>
      </motion.div>

      {/* Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className=" animate-appear relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            
          >
            <Image
              src={project.img}
              alt={project.title}
              width={400}
              height={283}
              className="object-cover w-full h-[283px] group-hover:scale-125 transition-transform duration-800"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-gray-800/40 to-gray-200/10"></div>

            <div className="absolute bottom-3 left-3 text-white">
              <h3 className="text-lg font-normal">{project.title}</h3>
              <p className="text-sm opacity-80 font-light w-72">{project.category}</p>
            </div>
            <div className="absolute bottom-3 right-3 text-sm font-light text-white">
              {project.year}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}