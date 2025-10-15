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
      delay: i * 0.8,
    },
  }),
};

export default function Hero1() {
  return (
    <div className="flex flex-col items-center text-center bg-[#570202]">
      <motion.h1
        className="
          lg:mt-60 md:mt-48
          text-3xl md:text-5xl lg:text-6xl
          font-medium text-white
          leading-snug md:leading-tight lg:leading-[4.5rem]
          lg:mx-64 md:mx-40 mx-8
          mb-20 md:mb-20 lg:mb-32
          lg:w-[56.25rem] md:w-[50rem] w-[23rem]
        "
      >
        {/* Desktop + Tablet version (2 lines, 6 words per line) */}
        <motion.div
          className="hidden md:block"
          custom={0}
          variants={lineVariant}
          initial="hidden"
          animate="show"
        >
          Hand over your project, and sit<br />
           back to see it go live.
        </motion.div>

        {/* Mobile version (3 lines, shorter per line) */}
        <motion.div
          className="block md:hidden"
          custom={0}
          variants={lineVariant}
          initial="hidden"
          animate="show"
        >
          Hand over your project,<br/> 
          and sit back to see it  <br />
          go live.
        </motion.div>
      </motion.h1>

      {/* Marquee */}
      <div className="w-full mb-40 md:mb-48 lg:mb-64">
        <Marquee text="I’ve got a thing for great brands, so I design them" />
      </div>
    </div>
  );
}
