"use client";
import React from "react";
import { motion } from "framer-motion";
import Marquee from "../components/Marquee";



export default function Hero1() {
  return (
    <div className="flex flex-col items-center text-center bg-[#570202]">
      
    <motion.h1
    initial={{ opacity: 0, rotateX: -90 }}
    animate={{ opacity: 1, rotateX: 0 }}
    transition={{
      duration: 2,
      ease: [0.22, 1, 0.36, 1], // smoother premium easing
    }}
    style={{
      transformOrigin: "left top",
      transformStyle: "preserve-3d",
    }}
    className="
      mt-[clamp(150px,0.5vw,274px)]
      text-[clamp(28px,4.5vw,92px)]
      font-medium text-white
      leading-[clamp(30px,5vw,84px)]
      mb-20 md:mb-20 lg:mb-32
      max-w-full mx-3 sm:max-w-[55%] md:max-w-[70%]
      will-change-transform
    "
  >
    Hand over your project, and sit
    <br />
    back to see it go live.
  </motion.h1>

      {/* Marquee */}
      <div className="w-full mb-[clamp(158px,1.5vw,254px)]">
        <Marquee text="I’ve got a thing for great brands, so I design them" />
      </div>
    </div>
  );
}
