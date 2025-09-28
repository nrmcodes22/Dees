"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
const feedImages = [
  "/images/projectdivehero/Frame4.png",
  "/images/projectdivehero/Frame41.png",
  "/images/projectdivehero/Frame42.png",
  "/images/projectdivehero/Frame43.png",
  "/images/projectdivehero/Frame44.png",
];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};
const item = {
  hidden: { y: 40, opacity: 0, filter: "blur(6px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
export default function Hero5() {
  return (
    <section className="py-6 px-20 bg-white">
      {/* Section Heading */}
      <motion.div
        className="flex items-center gap-4 mt-[100px] mb-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.h2
          className="text-2xl font-normal text-black whitespace-nowrap"
          variants={item}
        >
          From my feed
        </motion.h2>
        <motion.div
          className="flex-1 h-px bg-[#989898]"
          variants={item}
        />
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {feedImages.map((src, i) => (
          <motion.div
            key={i}
            variants={item}
            className="relative aspect-[3/4] rounded-md overflow-hidden"
          >
            <Image
              src={src}
              alt={`Feed image ${i + 1}`}
              fill
              className="object-cover rounded-md hover:scale-105 w-[300px] h-[675px] transition-transform"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Paragraph + Button */}
      <motion.div
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.p
          className="text-gray-500 leading-relaxed text-xl"
          variants={item}
        >
          For the past few years, I’ve been sharing my design journey through
          short videos, I break down projects, share lessons I’ve learned, and
          document the process that shapes my work. It’s a space where I keep
          exploring new ways to make design approachable. You can explore more
          of this journey on Instagram.
        </motion.p>
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#570202] text-white px-6 py-4 rounded-full hover:bg-[#3d0000] transition"
          variants={item}
        >
          <FaInstagram className="text-lg" />
          <span className="w-32">My Instagram</span>
        </motion.a>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="flex-1 h-px mt-40 bg-[#989898]"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      />

      {/* Closing Line */}
      <motion.h2
        className="mt-15 text-xl max-w-3/5 text-[#6D7876] text-center mx-auto mb-15"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        That’s a little of what I do. If it feels like the right fit, I’d love
        to hear about your next project.
      </motion.h2>
    </section>
  );
}
