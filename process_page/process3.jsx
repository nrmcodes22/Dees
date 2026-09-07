"use client";
import React, { useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { clientSteps, designSteps } from "./processData";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function TimelineRow({ step, index, total, scrollYProgress }) {
  const start = index / total;
  const end = (index + 1) / total;
  // Maps this row's slice of the container's scroll progress to a 0→1 fill,
  // clamped so segments before/after their turn stay fully empty/full.
  const scaleY = useTransform(scrollYProgress, [start, end], [0, 1], {
    clamp: true,
  });

  return (
    <motion.div
      className="flex gap-4"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      {/* Rail: circle + connecting line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-[clamp(64px,20vw,90px)] h-[clamp(64px,20vw,90px)] flex items-center justify-center rounded-full bg-[#570202] text-white text-[clamp(26px,8vw,38px)] font-[400] z-10">
          {step.number}
        </div>
        {index !== total - 1 && (
          <div className="relative flex-1 w-px">
            {/* Static base line, faint */}
            <div className="absolute inset-0 w-px bg-black/15" />
            {/* Animated fill that travels down as you scroll */}
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 w-px bg-black"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-10 pt-2">
        <h3 className="font-semibold text-black text-[clamp(20px,5vw,28px)] mb-1">
          {step.title}
        </h3>
        <p className="text-[#6D7876] text-[clamp(15px,3.5vw,22px)] leading-[1.4] font-[300] mt-2">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

function TimelineList({ steps }) {
  const containerRef = useRef(null);
  // Progress tracks scroll through this specific list, not the whole page.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.6"],
  });

  return (
    <div ref={containerRef} className="flex flex-col px-6">
      {steps.map((step, i) => (
        <TimelineRow
          key={step.number}
          step={step}
          index={i}
          total={steps.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}

export default function ProcessSteps() {
  const [active, setActive] = React.useState("client");

  return (
    <div className="block md:hidden">
      <div className="flex w-full text-black relative">
        <button
          onClick={() => setActive("client")}
          className={`px-4.5 py-4.5 w-[50vw] text-[16px] font-[500] transition-colors relative ${
            active === "client" ? "bg-[#FFE7E7]" : "bg-white"
          }`}
        >
          Client Process
          {active === "client" && (
            <motion.span
              layoutId="mobile-tab-underline"
              className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-[#570202]"
            />
          )}
        </button>

        <button
          onClick={() => setActive("design")}
          className={`px-4.5 py-4.5 w-[50vw] text-[16px] font-[500] transition-colors relative ${
            active === "design" ? "bg-[#FFE7E7]" : "bg-white"
          }`}
        >
          Design Process
          {active === "design" && (
            <motion.span
              layoutId="mobile-tab-underline"
              className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-[#570202]"
            />
          )}
        </button>
      </div>

      {/* Tab content crossfades + slides instead of hard-swapping */}
      <div className="mt-24 overflow-hidden">
        <AnimatePresence mode="wait">
          {active === "client" && (
            <motion.div
              key="client"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <TimelineList steps={clientSteps} />
            </motion.div>
          )}
          {active === "design" && (
            <motion.div
              key="design"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <TimelineList steps={designSteps} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}