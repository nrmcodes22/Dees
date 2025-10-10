"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.96, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Hero2() {
  return (
    <section className="lg:pt-[74px] lg:px-[106px] pt-[27px] md:px-[39px] px-[20px] bg-white">
      {/* Heading */}
      <motion.div
        className="flex items-center gap-4 lg:mb-[70px] md:mb-[37px] mb-[29px]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
      >
        <motion.h2
          className="text-[16px] md:text-[22px] lg:text-[28px] font-[500] text-black whitespace-nowrap"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Latest from my desk
        </motion.h2>
        <motion.div
          className="flex-1 h-px bg-[#989898]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          style={{ originX: 0 }}
        />
      </motion.div>

      {/* Single Project Card */}
      <motion.div
        className="relative lg:rounded-[6px] md:rounded-[3.318px] rounded-[1.928px] overflow-hidden shadow-md hover:shadow-xl transition"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={item} className="relative group ">
          <Image
            src={"/images/preston.png"}
            alt={"preston"}
            width={2000}
            height={2000}
            className="relative w-full lg:aspect-[1710/823] md:aspect-[945/455] aspect-[401/316] group-hover:scale-110  transition-transform duration-800"
          />
          {/* Gradient overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-gray-800/30 to-transparent transition"></div>
      {/* Text */}
      <div className="absolute bottom-0 left-0 px-[12px] lg:px-[49px] md:px-[27px] pb-[16px] md:pb-[28.8px] lg:pb-[55px] leading-normal w-full">
         <div className="flex justify-between items-end w-full">
    {/* Left section */}
    <div className="w-full md:w-auto">
      <h2 className="text-[22px] lg:text-[34px] md:text-[18px] font-[500]">Preston</h2>

      <div className="flex md:flex-col justify-between text-[16px] md:text-[18px] lg:text-[22px] font-[300] text-[#C6C6C6] lg:text-white w-full">
        <p>Advanced solar cooking solution</p>
        <p className="tracking-[-0.88px]">2025</p>
      </div>
    </div>

    {/* Right section */}
    <a className="hidden md:flex bg-[#570202] font-worksans leading-normal font-[500] lg:rounded-[50px] lg:px-[59.5px] lg:py-[25px] lg:text-[24px]  lg:tracking-[-0.72px] md:rounded-[40px] md:px-[32.5px] md:py-[14px] md:text-[14px]  md:tracking-[-0.42px]">
      Learn more
    </a>
  </div>
      </div>
        
        </motion.div>
      </motion.div>
    </section>
  );
}
