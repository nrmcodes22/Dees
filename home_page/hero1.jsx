"use client"
import React from "react";
import { motion } from 'framer-motion';
import Marquee from "../components/Marquee";
export default function Hero1() {
  return (
    <div className="flex flex-col items-center text-center px-6 bg-[#570202] min-h-screen">
      {/* Hero Heading */}

      <motion.h1 
  className="mt-48 text-4xl md:text-5xl font-light leading-tight max-w-3xl text-white"
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
>
  Hand over your project, and sit <br /> back to see it go live.
</motion.h1>
     <div className="mt-24">
        <Marquee text="◆ I’ve got a thing for great brands, so I design them."/>
      </div>
      
    </div>
  );
}
