"use client";
import React from "react";
import { motion } from "framer-motion";
import Marquee from "../components/Marquee";



export default function Hero1() {
  return (
    <div className="flex flex-col items-center text-center bg-[#570202]">
      <h1
        className="
          mt-[clamp(233px,5vw,274px)]
          text-[clamp(28px,4.5vw,92px)]
          font-medium text-white
          leading-[clamp(30px,5vw,84px)]
          
          mb-20 md:mb-20 lg:mb-32
           max-w-full sm:max-w-[55%] md:max-w-[70%]
        "
      >
        {/* Desktop + Tablet version (2 lines, 6 words per line) */}
        <div
          className=""
          
        >
          Hand over your project, and sit
           back to see it go live.
        </div>

        {/* Mobile version (3 lines, shorter per line) */}
        
      </h1>

      {/* Marquee */}
      <div className="w-full mb-40 md:mb-48 lg:mb-64">
        <Marquee text="I’ve got a thing for great brands, so I design them" />
      </div>
    </div>
  );
}
