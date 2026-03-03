"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import {motion} from "framer-motion"
//import Project2 from "@/project/project2"

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
  return (
    <section className="lg:pt-[131px]  pt-[44px] px-[clamp(20px,4vw,120px)] pb-[34px] bg-white">
      {/* Heading */}
      <div 
      className=" flex items-center lg:gap-[16px] md:gap-[34px] gap-[6px] mb-[21px] md:mb-[60px]">
        <h2 className="text-[clamp(16px,2.3vw,28px)] font-[500] text-black whitespace-nowrap">
            Projects you can dive into
        </h2>

        <div className="flex-1 h-px bg-[#989898]"></div>
      </div>

      {/* Grid */}
    <div
        className="
          grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          gap-x-3 md:gap-x-6 lg:gap-x-4 xl:gap-x-10
          gap-y-3 md:gap-y-6 lg:gap-y-4 xl:gap-y-12 
        "
      >
        {projects.map((project, i) => (
          <div
            key={i}
            onClick={() =>
              setActiveIndex(activeIndex === i ? null : i)
            }
            className={`
              ${
                i >= 6
                  ? showAll
                    ? "block"
                    : "hidden md:hidden lg:block"
                  : "block"
              }
              relative group cursor-pointer
              overflow-hidden shadow-md
              transition duration-500
            `}
          >
            <div className="relative w-full aspect-square ">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`
                  absolute inset-0 transition-all duration-500 
                  ${
                    activeIndex === i
                      ? "bg-black/70"
                      : "bg-black/0 md:group-hover:bg-black/70"
                  }
                `}
              />

              {/* Bottom Left (Title + Category) */}
              <div
                className={`
                  absolute bottom-2 left-2 
                  transition-all duration-500
                  ${
                    activeIndex === i
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                  }
                `}
              >
                <h3 className="text-white text-lg md:text-xl font-medium">
                  {project.title}
                </h3>

                <p className="text-[#C6C6C6] text-sm md:text-base font-light leading-tight line-clamp-2  max-w-[70%] md:max-w-[100%]">
                  {project.category}
                </p>
              </div>

              {/* Bottom Right (Year) */}
              <div
                className={`
                  absolute bottom-2 right-2
                  text-[#aaa] text-xs md:text-sm font-light
                  transition-all duration-500
                  ${
                    activeIndex === i
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                  }
                `}
              >
                {project.year}
              </div>
            </div>
          </div>
        ))}
      </div>

      

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