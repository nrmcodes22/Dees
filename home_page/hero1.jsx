"use client";
import React from "react";
import { motion } from "framer-motion";
import Marquee from "../components/Marquee";

const lineVariant = {
  hidden: { y: 40, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.8, // delay for each line
    },
  }),
};

export default function Hero1() {
  return (
    <div className="flex flex-col items-center text-center  bg-[#570202]">
      <motion.h1 className="lg:mt-[245px] md:mt-[196px] md:text-[48px] lg:text-[92px] text-[34px] font-[500] text-white md:leading-[51px] lg:leading-[102px] leading-[39.8px] lg:mx-[255px] md:mx-[159px] mx-[35px] mb-[87.87px] md:mb-[83.5px] lg:mb-[133px]">
        <motion.div
          custom={0}
          variants={lineVariant}
          initial="hidden"
          animate="show"
        >
          Hand over your project, and sit back to see it go live.
        </motion.div>
        
      </motion.h1>

      {/* Marquee */}
      <div className="w-full mb-[156px] lg:mb-[256px] md:mb-[198.5px]">
        <Marquee text="I’ve got a thing for great brands, so I design them" />
      </div>
    </div>
  );
}
