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
    <section className="lg:pt-[131px] lg:px-[106px] pt-[44px] md:px-[39px] px-[20px] pb-[34px] bg-white">
      {/* Heading */}
      <motion.div 
      className=" flex items-center lg:gap-[16px] md:gap-[34px] gap-[6px] mb-[21px] md:mb-[60px] lg:mb-[87px]"
      initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
      >
        <h2 className="text-[16px] lg:text-[28px] md:text-[22px] font-[500] text-black whitespace-nowrap">
          Projects you can dive into
        </h2>
        <div className="flex-1 h-px bg-[#989898]"></div>
      </motion.div>

      {/* Grid */}
      <div className="grid md:gap-x-[23px] lg:gap-x-[42px] gap-x-[19.63px]  md:gap-y-[24px] lg:gap-y-[52px] gap-y-[23.61px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className=" animate-appear relative group rounded-[6px] overflow-hidden shadow-md hover:shadow-xl transition"
            
          >
         <div className="relative w-full lg:aspect-[395/283] md:aspect-[380/214] aspect-[190.37/136.392]">
    <Image
      src={project.img}
      alt={project.title}
      fill
      className="object-cover group-hover:scale-125 transition-transform duration-800"
    />
    <div
      className="absolute inset-0 rounded-[2.892px]"
      style={{
        background: `
          linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.82) 100%)
        `,
      }}
    ></div>
  </div>


            <div className="absolute bottom-3 left-3 text-white">
              <h3 className="text-[16px] md:text-[22px]  font-[500]">{project.title}</h3>
              <p className="md:text-[14px] text-[8px] text-[#C6C6C6] w-[151.013px] font-[300] leading-normal">{project.category}</p>
            </div>
            <div className="absolute bottom-3 right-3 text-[8px] font-[300]  text-[#C6C6C6] md:text-[14px] leading-normal">
              {project.year}
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