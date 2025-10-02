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
    <section className="py-6 px-20 bg-white">
      {/* Heading */}
      <motion.div
        className="flex items-center gap-4 mt-[131px] mb-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
      >
        <motion.h2
          className="text-2xl font-normal text-black whitespace-nowrap"
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
        className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={item} className="relative group">
          <Image
            src={"/images/preston.png"}
            alt={"preston"}
            width={1710}
            height={823}
            className="object-cover w-full h-full group-hover:scale-110 rounded-lg transition-transform duration-800"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-gray-800/40 to-transparent transition"></div>

          {/* Text */}
          <div className="absolute bottom-3 left-3 text-white mb-4 ml-4">
            <h3 className="text-2xl font-normal">Preston</h3>
            <p className="text-md opacity-80 w-72 font-light">
              Advanced solar cooking solution
            </p>
            <p className="text-md opacity-80 w-72 font-light">August 2025</p>
          </div>

          {/* Button */}
          <motion.button
            variants={item}
            className="absolute bottom-3 right-3 px-12 py-3 bg-[#570202] text-white font-light rounded-full hover:bg-[#6b0b0b] transition mb-4 mr-4"
          >
            Learn more
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
