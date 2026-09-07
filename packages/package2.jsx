"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const lineGrow = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const listStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const packages = [
  {
    title: "Logo design",
    image: "/images/package/package.png",
    imageOrder: "order-1 md:order-2",
    textOrder: "order-2 md:order-1",
    paragraphs: [
      "My Logo Design package is perfect for businesses looking for a professional logo design. With this package, you'll get a custom-designed logo that represents your brand's values and personality.",
      "Whether you're looking to refresh your brand or establish a new one, My Logo Design package is designed to give you a solid foundation for your brand. I'll work closely with you to understand your vision and preferences, ensuring that the final design meets your expectations.",
      "A well-designed logo is a crucial element of your brand's identity, conveying your values and message to your target audience. I'll create a unique and memorable logo that sets your brand apart and leaves a lasting impression.",
    ],
    includes: [
      "Primary Logo + Variations (Monochrome, Inverted)",
      "High Resolution Files (PNG, JPEG, PDF)",
      "Source File (AI, EPS)",
      "Basic Brand Guidelines (Color Palette + Fonts)",
      "2 Revisions",
    ],
  },
  {
    title: "Visual identity design",
    image: "/images/package/package1.png",
    imageOrder: "order-1 md:order-2",
    textOrder: "order-2 md:order-1",
    reverse: true,
    paragraphs: [
      "My Visual package is designed for businesses that want to take their brand to the next level. With a focus on visual identity, this package includes a comprehensive design solution that will make your brand stand out. From the color palette to typography, I'll create a cohesive visual identity that reflects your brand's personality.",
      "By investing in My Visual package, you'll get a design solution that's both aesthetically pleasing and functional. I'll work with you to create a visual identity that resonates with your target audience and sets you apart from the competition.",
    ],
    includes: [
      "Logo design",
      "Visual identity (color palette, typography)",
      "Social media kit",
      "3 design concepts",
      "3 Revisions",
    ],
  },
  {
    title: "Collateral design",
    image: "/images/package/package2.png",
    imageOrder: "order-1 md:order-2",
    textOrder: "order-2 md:order-1",
    paragraphs: [
      "My Logo Design package is perfect for businesses looking for a professional logo design. With this package, you'll get a custom-designed logo that represents your brand's values and personality.",
      "Whether you're looking to refresh your brand or establish a new one, My Logo Design package is designed to give you a solid foundation for your brand. I'll work closely with you to understand your vision and preferences, ensuring that the final design meets your expectations.",
      "A well-designed logo is a crucial element of your brand's identity, conveying your values and message to your target audience. I'll create a unique and memorable logo that sets your brand apart and leaves a lasting impression.",
    ],
    includes: [
      "Primary Logo + Variations (Monochrome, Inverted)",
      "High Resolution Files (PNG, JPEG, PDF)",
      "Source File (AI, EPS)",
      "Basic Brand Guidelines (Color Palette + Fonts)",
      "2 Revisions",
    ],
  },
];

function PackageSection({ pkg, isFirst }) {
  return (
    <div className={isFirst ? "" : "mt-15"}>
      {/* Heading */}
      <motion.div
        className="flex items-center gap-4 lg:mb-[70px] md:mb-[37px] mb-[29px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.h2
          variants={fadeUp}
          className="text-[clamp(16px,2.3vw,28px)] font-[500] text-black whitespace-nowrap"
        >
          {pkg.title}
        </motion.h2>
        <motion.div
          variants={lineGrow}
          style={{ transformOrigin: "left" }}
          className="flex-1 h-px bg-[#989898]"
        />
      </motion.div>

      {/* Content */}
      <div
        className={`flex text-[#6D7876] gap-10 flex-col md:flex-row ${
          pkg.reverse ? "" : ""
        }`}
      >
        {/* Text Section */}
        <motion.div
          className={`${pkg.textOrder} flex-1 flex justify-between md:flex-col gap-[clamp(24px,5vw,98px)]`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="order-2 md:order-1 text-[clamp(16px,2vw,26px)] tracking-tighter leading-[clamp(20px,3vw,40px)] lg:tracking-normal flex flex-col gap-[clamp(12px,2vw,20px)] w-[50%] md:w-full">
            {pkg.paragraphs.map((p, i) => (
              <motion.p key={i} custom={i} variants={fadeUp}>
                {p}
              </motion.p>
            ))}
          </div>

          <div className="order-1 md:order-2 flex flex-col text-[clamp(16px,2vw,26px)] tracking-tighter leading-[clamp(20px,3vw,26px)] w-[50%] md:w-full">
            <div className="order-2 md:order-1 mb-20">
              <p className="mb-4 font-semibold text-[clamp(18px,2.2vw,28px)]">
                This package includes:
              </p>
              <motion.ol
                className="list-disc space-y-3 ml-[clamp(24px,5vw,50px)]"
                variants={listStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {pkg.includes.map((item, i) => (
                  <motion.li key={i} variants={listItem}>
                    {item}
                  </motion.li>
                ))}
              </motion.ol>
            </div>
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="order-1 md:order-2 bg-[#570202] text-white text-[clamp(14px,1.5vw,20px)] px-6 py-4 rounded-full hover:bg-[#6d0d0d] transition-colors max-w-48 text-center mb-10 md:mb-0"
            >
              Contact me
            </motion.a>
          </div>
        </motion.div>

        {/* Image Section */}
        <div className={`${pkg.imageOrder} flex-1 flex overflow-hidden rounded-[6px]`}>
          <motion.img
            src={pkg.image}
            alt={pkg.title}
            className="aspect-[16/9] object-cover rounded-[6px] w-full"
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Package2() {
  return (
    <section className="lg:pt-[74px] px-[clamp(20px,4vw,120px)] pt-[44px] pb-[34px] bg-white">
      <div>
        {packages.map((pkg, i) => (
          <PackageSection key={pkg.title} pkg={pkg} isFirst={i === 0} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="border border-[#570202] rounded-md px-7 py-3.5 mt-20 mb-20"
      >
        <p className="text-[#570202] font-semibold mb-5 md:mb-1 text-[clamp(16px,1.5vw,28px)]">
          Note
        </p>
        <p className="text-[#570202] text-[clamp(14px,1.5vw,26px)] font-light tracking-[-0.03em] md:tracking-[-0.06em] leading-[clamp(12px,4vw,24px)] mt-3">
          Please note, package contents may vary as each project is uniquely
          designed and tailored to specific requirements, so that contents
          are not standardized.
        </p>
      </motion.div>
    </section>
  );
}