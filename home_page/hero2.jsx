"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { staggerContainer, revealItem, pressSpring } from "./motion";
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
    category: "Modern clothing brand",
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
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (i) => {
    // Only allow click-to-toggle on mobile and tablet (below lg breakpoint)
    if (window.innerWidth < 1024) {
      setActiveIndex(activeIndex === i ? null : i);
    }
  };

  return (
    <section className="lg:pt-[131px] pt-[44px] px-[clamp(20px,4vw,120px)] pb-[34px] bg-white">
  <SectionHeading>Projects you can dive into</SectionHeading>

      {/* Grid */}
      <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-60px" }}
    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-6 lg:gap-x-4 xl:gap-x-10 gap-y-3 md:gap-y-6 lg:gap-y-4 xl:gap-y-12"
  >
    {projects.map((project, i) => (
      <motion.div
        key={i}
        variants={revealItem}
        whileTap={{ scale: 0.97 }}
        transition={pressSpring}
        onClick={() => handleClick(i)}
        className={`${i >= 6 ? (showAll ? "block" : "hidden md:hidden lg:block") : "block"}
          relative group lg:cursor-default cursor-pointer overflow-hidden shadow-md
          lg:hover:-translate-y-1 transition-transform duration-300`}
      >
            <div className="relative w-full aspect-square">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 lg:group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`
                  absolute inset-0 transition-all duration-500
                  ${
                    activeIndex === i
                      ? "bg-black/70 lg:bg-black/0"
                      : "bg-black/0 lg:group-hover:bg-black/70"
                  }
                `}
              />

              {/* Bottom Left — title & category */}
              <div className="absolute inset-0"> {/* wraps both bottom-left and bottom-right overlays */}
  
<div
  className={`
    absolute bottom-2 left-2 right-2
    flex items-end justify-between gap-3
    transition-all duration-500
    ${
      activeIndex === i
        ? "translate-y-0 opacity-100 lg:translate-y-6 lg:opacity-0"
        : "translate-y-6 opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
    }
  `}
>
  {/* Left — title & category */}
  <div className="min-w-0"> {/* min-w-0 lets the text truncate/wrap instead of forcing the row wider */}
    <h3 className="text-white text-lg md:text-xl font-medium">
      {project.title}
    </h3>
    <p className="text-[#C6C6C6] text-sm md:text-base font-light leading-tight line-clamp-2">
      {project.category}
    </p>
  </div>

  {/* Right — year */}
  <div className="text-[#aaa] text-xs md:text-sm font-light shrink-0">
    {project.year}
  </div>
</div>
</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* See More button — tablet only */}
      <div className="hidden md:flex lg:hidden justify-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="
            px-10 py-3 border border-[#570202]
            text-[#570202] text-sm tracking-widest uppercase
            transition-all duration-300
            hover:bg-[#570202] hover:text-white
          "
        >
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
}