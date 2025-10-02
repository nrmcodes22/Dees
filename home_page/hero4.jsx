"use client";
import Image from "next/image";
import React from "react";
import {motion} from "framer-motion";
const testimonials = [
  {
    text: "I have worked with several designers in the past, but Mani is the first who truly met my expectations. He takes the time to listen carefully to every requirement and delivers with precision. For my company logo, we were impressed with the very first design, yet when we requested an alternative, Mani patiently created another option without hesitation and we are 100% satisfied with the result.",
    text2:"In addition to the logo, he designed our social media templates, merchandise, visiting cards, and letterhead, making him a complete one-stop solution for brand design. His work is highly professional, creative, and always delivered on time. I strongly recommend Mani to anyone seeking reliable and comprehensive branding services.",
    name: "Bathula Jaya Teja @Founder",
    company: "UVXYZ",
  },
  {
    img: "/images/testimonials/Frame17.png",
    text: "As I’ve built my brand, I’ve found various ways to eek out more efficiency in my day-to-day workflow.",
    name: "Swapnil Gaikwad @Founder",
    company: "Eunora",
  },
  {
    img: "/images/testimonials/Frame18.png",
    text: "As I’ve built my brand, I’ve found various ways to eek out more efficiency in my day-to-day workflow.",
    name: "Rakesh Yadav @Founder",
    company: "Klairklint",
  },
  {
    img: "/images/testimonials/Frame19.png",
    text: "As I’ve built my brand, I’ve found various ways to eek out more efficiency in my day-to-day workflow.",
    name: "Abhishek Kumar @Team",
    company: "Codesign",
  },
  {
    text: "As I’ve built my brand, I’ve found various ways to eek out more efficiency in my day-to-day workflow. As I’ve built my brand, I’ve found various ways to eek out more efficiency in my day-to-day workflow.",
    text2:"As I’ve built my brand, I’ve found various ways to eek out more efficiency in my day-to-day workflow. As I’ve built my brand, I’ve found various ways to eek out more efficiency in my day-to-day workflow",
    name: "Abhishek Kumar @Team",
    company: "Codesign",
  },
  {
    text: "As I’ve built my brand, I’ve found various ways to eek out more efficiency in my day-to-day workflow. As I’ve built my brand, I’ve found various ways to eek out more efficiency in my day-to-day workflow.",
    text2:"As I’ve built my brand, I’ve found various ways to eek out more efficiency in my day-to-day workflow. As I’ve built my brand, I’ve found various ways to eek out more efficiency in my day-to-day workflow",
    name: "Abhishek Kumar @Team",
    company: "Codesign",
  },
];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
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
      stiffness: 90,
      damping: 18,
    },
  },
};

export default function Hero4() {
  return (
    <section className="py-6 px-6 md:px-12 lg:px-20 bg-white">
      {/* Section Heading */}
      <motion.div
        className="flex items-center gap-4 mt-[100px] mb-8"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl font-normal text-black whitespace-nowrap"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Words from people I’ve worked with
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

      {/* Testimonials Grid */}
      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            variants={item ? item : {}}
            className="border rounded-lg shadow-sm p-6 bg-white flex flex-col border-[#989898] justify-between"
          >
            {item.img && (
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={200}
                className="rounded-md w-full mb-4 object-cover"
              />
            )}
            <div>
              <p className="text-gray-600 text-md mb-4">“{item.text}”</p>
              {item.text2 && (
                <p className="text-gray-600 text-md mb-4">“{item.text2}”</p>
              )}
            </div>
            <h4 className="font-semibold text-gray-900">
              {item.name} <span className="font-normal">@{item.company}</span>
            </h4>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
