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
  return (
    <section className="lg:pt-[131px]  pt-[44px] px-[clamp(20px,6vw,120px)] pb-[34px] bg-white">
      {/* Heading */}
      <div 
      className=" flex items-center lg:gap-[16px] md:gap-[34px] gap-[6px] mb-[21px] md:mb-[60px] lg:mb-[87px]">
        <h2 className="text-lg md:text-2xl lg:text-[1.75rem] font-medium text-black whitespace-nowrap">
            Projects you can dive into
        </h2>

        <div className="flex-1 h-px bg-[#989898]"></div>
      </div>

      {/* Grid */}
      <div className="grid 
        grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-6 lg:gap-x-4 xl:gap-x-10
    gap-y-3 md:gap-y-6 lg:gap-y-4 xl:gap-y-12">

        {projects.map((project, i) => (
          <div
            key={i}
            className={`
              ${i>=6?"lg:block md:hidden":""} animate-appear relative group rounded-[3px] md:rounded-[6px] overflow-hidden shadow-md hover:shadow-xl transition `}
            
          >
         <div className="relative w-full 
                aspect-[4/3]">

    <Image
      src={project.img}
      alt={project.title}
      fill
      className="object-cover group-hover:scale-125 transition-transform duration-800"
    />
    <div
      className="absolute inset-0 rounded-[3px]"
      style={{
        background: `
          linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.82) 100%)
        `,
      }}
    ></div>
  </div>

            <div className="">
            <div className="absolute bottom-1 left-2 md:bottom-2 lg:bottom-3 lg:left-3 text-white w-[80%]">
              <h3 className="text-[16px] md:text-[18px] lg:text-[22px] font-[500] mb-[-5px]">{project.title}</h3>
              <p className="text-[#C6C6C6] lg:w-full text-[8px] md:text-[14px]  lg:text-[16px] font-[300] leading-normal ">{project.category}</p>
            </div>
            <div className="absolute bottom-1 md:bottom-2 right-2  lg:bottom-3 lg:right-3 font-[300] text-[8px] md:text-[14px] lg:text-[16px]  text-[#C6C6C6]  leading-normal">
              {project.year}
            </div>
            </div>
          </div>
        ))}
      </div>
      <button className=" mt-[52.61px] block md:hidden font-worksans text-white text-[15.422px] font-[500] bg-[#570202] px-[45.5px] py-[16px] rounded-[32.13px] transition-all duration-300 tracking-[-0.463px]">
  See more
</button>
    </section>
  );
}