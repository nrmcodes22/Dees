"use client";
import React from "react";
import { motion } from "framer-motion";
import Marquee from "../components/Marquee";



export default function Hero1() {
  return (
    <div className="flex flex-col items-center text-center bg-[#570202]">
      <h1
        className="
          lg:mt-60 mt-48
          text-[clamp(2rem,5vw,7rem)]
          font-medium text-white
          leading-normal
          lg:mx-64 md:mx-40 mx-8
          mb-20 md:mb-20 lg:mb-32
          lg:max-w-[55%]
          
        "
      >
        {/* Desktop + Tablet version (2 lines, 6 words per line) */}
        <div
          className="hidden md:block"
          
        >
          Hand over your project, and sit
           back to see it go live.
        </div>

        {/* Mobile version (3 lines, shorter per line) */}
        <div
          className="block md:hidden"
          
        >
          Hand over your project,<br/> 
          and sit back to see it  <br />
          go live.
        </div>
      </h1>

      {/* Marquee */}
      <div className="w-full mb-40 md:mb-48 lg:mb-64">
        <Marquee text="I’ve got a thing for great brands, so I design them" />
      </div>
    </div>
  );
}
