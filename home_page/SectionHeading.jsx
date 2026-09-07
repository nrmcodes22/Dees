// home_page/SectionHeading.jsx
"use client";
import { motion } from "framer-motion";
import { viewportOnce } from "./motion";

export default function SectionHeading({ children }) {
  return (
    <div className="flex items-center gap-4 lg:mb-[70px] md:mb-[45px] mb-[29px]">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ type: "spring", bounce: 0, duration: 0.6 }}
        className="text-[clamp(16px,2.3vw,28px)] font-[500] text-black whitespace-nowrap"
      >
        {children}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.1 }}
        style={{ transformOrigin: "left" }}
        className="flex-1 h-px bg-[#989898]"
      />
    </div>
  );
}