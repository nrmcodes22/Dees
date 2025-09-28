"use client";
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { 
    opacity: 0, 
    scale: 0.92,
    y: 60,
    rotateX: 15
  },
  show: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: { 
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};
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
    <section className=" py-6 px-20 bg-white">
      {/* Heading */}
      <motion.div 
    className="flex items-center gap-4 mt-[131px] mb-8"
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.h2 
      className="text-2xl font-normal text-black whitespace-nowrap"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      Projects you can dive into
    </motion.h2>
    <motion.div 
      className="flex-1 h-px bg-[#989898]"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      style={{ originX: 0 }}
    />
  </motion.div>
     

      {/* Grid */}
      <motion.div
      className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {projects.map((project, i) => (
        <motion.div
          key={i}
          variants={item}
          className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
        >
            <Image
              src={project.img}
              alt={project.title}
              width={400}
              height={290}
              className="object-cover w-full h-[283px] group-hover:scale-105 transition-transform"
            />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-gray-800/40 to-gray-200/10  transition"></div>



            <div className="absolute bottom-3 left-3 text-white">
              <h3 className="text-lg font-normal">{project.title}</h3>
              <p className="text-sm opacity-80 font-light w-72">{project.category}</p>
            </div>
            <div className="absolute bottom-3 right-3 text-sm font-light text-white">
              {project.year}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
