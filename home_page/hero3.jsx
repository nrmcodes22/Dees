"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { revealSpring, viewportOnce } from "./motion";


export default function Hero3() {
  return (
   <section className="lg:pt-[74px] pt-[44px] pb-[34px] px-[clamp(20px,4vw,120px)] bg-white">
  <SectionHeading>Latest from my desk</SectionHeading>

      {/* Single Project Card */}
       <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={viewportOnce}
    transition={revealSpring}
    className="relative lg:rounded-[6px] md:rounded-[3.318px] rounded-[1.928px] overflow-hidden shadow-md"
    // dropped hover:shadow-xl — the image zoom is already the hover cue, don't compete with it
  >
        <div className="relative group ">
          <Image
            src={"/images/preston.png"}
            alt={"preston"}
            width={2000}
            height={2000}
           className="relative w-full lg:aspect-[1710/823] md:aspect-[945/455] aspect-[401/316]
          group-hover:scale-110 transition-transform duration-[800ms]"
          />
          {/* Gradient overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-gray-800/30 to-transparent transition"></div>
      {/* Text */}
      <div className="absolute bottom-0 left-0 px-[clamp(12px,3vw,49px)] pb-[clamp(16px,2vw,55px)] leading-normal w-full">
         <div className="flex justify-between items-end w-full">
    {/* Left section */}
    <div className="w-full md:w-auto">
      <h2 className="text-[clamp(20px,3vw,28px)] text-white font-[500]">Preston</h2>

      <div className="flex md:flex-col justify-between text-[clamp(16px,1.9vw,24px)] font-[300] text-[#C6C6C6] lg:text-white w-full">
        <p>Advanced solar cooking solution</p>
        <p className="tracking-[-0.88px]">2025</p>
      </div>
    </div>

    {/* Right section */}
    <a className="hidden md:flex bg-[#570202] font-worksans leading-normal font-[500] lg:rounded-[50px] lg:px-10 lg:py-4 lg:text-xl  lg:tracking-[-0.72px] md:rounded-full md:px-10 md:py-3 md:text-lg  md:tracking-[-0.42px] text-white" href="/">
      Learn more
    </a>
  </div>
      </div>
        
        </div>
      </motion.div>
    </section>
  );
}
