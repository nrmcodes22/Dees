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
    <div className="flex flex-col items-center text-center  bg-[#570202] min-h-screen">
      <motion.h1 className="mt-48 text-6xl md:text-5xl font-normal text-white leading-snug">
        <motion.div
          custom={0}
          variants={lineVariant}
          initial="hidden"
          animate="show"
        >
          Hand over your project, and sit
        </motion.div>
        <motion.div
          custom={1}
          variants={lineVariant}
          initial="hidden"
          animate="show"
          className="-mt-4"
        >
          back to see it go live.
        </motion.div>
      </motion.h1>

      {/* Marquee */}
      <div className="mt-16 w-full">
        <Marquee text="I’ve got a thing for great brands, so I design them" />
      </div>
    </div>
  );
}
