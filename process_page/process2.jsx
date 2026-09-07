"use client";
import React from "react";
import { motion } from "framer-motion";
import { clientSteps, designSteps } from "./processData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Process() {
  return (
    <section className="hidden md:block pt-[50px] px-[clamp(20px,4vw,120px)] bg-white overflow-hidden">
      {/* Heading */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-[clamp(16px,2.3vw,28px)] font-[500] text-black whitespace-nowrap">
          Client Process
        </h2>
        <div className="flex-1 h-px bg-[#989898]" />
      </div>

      {/* Timeline */}
      <div className="relative flex w-full">
        {clientSteps.map((step, i) => (
          <motion.div
            key={step.number}
            className="relative flex flex-1 flex-col items-center"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            {/* Circle */}
            <motion.div
              className="relative z-10 mb-6 w-[clamp(62px,6vw,108px)] h-[clamp(62px,6vw,108px)] flex items-center justify-center rounded-full bg-[#570202] text-white text-[clamp(30px,2.5vw,52px)] font-[400]"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {step.number}
            </motion.div>

            {/* Connector line — now matches the circle's own clamp() so it always
                crosses the true vertical center, instead of the old hardcoded 90px */}
            {i !== clientSteps.length - 1 && (
              <motion.span
                className="absolute top-[calc(clamp(62px,6vw,108px)/2)] left-1/2 -right-1/2 h-px bg-black origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.12 + 0.2, ease: "easeOut" }}
              />
            )}

            {/* Title */}
            <div className="text-left max-w-[95%]">
              <h3 className="font-semibold text-black mb-2 text-[clamp(18px,1.5vw,28px)]">
                {step.title}
              </h3>
              <p className="text-[#6D7876] text-[clamp(16px,1vw,22px)] leading-[clamp(16px,1.3vw,22px)] max-w-[90%] lg:max-w-[15vw] font-[300]">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-[131px] mb-8">
        <h2 className="text-[clamp(16px,2.3vw,28px)] font-[500] text-black whitespace-nowrap">
          Design Process
        </h2>
        <div className="flex-1 h-px bg-[#989898]" />
      </div>

      <div className="grid md:grid-cols-2 gap-y-16 gap-x-20 mt-20 pb-20">
        {designSteps.map((step, i) => (
          <motion.div
            key={step.number}
            className="flex items-start gap-4"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex-shrink-0 w-[clamp(62px,5vw,72px)] h-[clamp(62px,5vw,72px)] flex items-center justify-center rounded-full bg-[#570202] text-white text-[clamp(30px,1.5vw,52px)] font-[400]"
            >
              {step.number}
            </motion.div>
            <div>
              <h3 className="font-semibold text-[clamp(18px,2.2vw,28px)] text-black mb-1">
                {step.title}
              </h3>
              <p className="text-[#6D7876] text-[clamp(18px,1vw,22px)] tracking-tight leading-[clamp(18px,2vw,22px)] font-[300]">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}