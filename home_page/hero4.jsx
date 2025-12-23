"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const testimonials = [
  {
    text2: "I have worked with several designers in the past, but Mani is the first who truly met my expectations. He takes the time to listen carefully to every requirement and delivers with precision. For my company logo, we were impressed with the very first design, yet when we requested an alternative, Mani patiently created another option without hesitation and we are 100% satisfied with the result.",
    text:"In addition to the logo, he designed our social media templates, merchandise, visiting cards, and letterhead, making him a complete one-stop solution for brand design. His work is highly professional, creative, and always delivered on time. I strongly recommend Mani to anyone seeking reliable and comprehensive branding services.",
    name: "Bathula Jaya Teja @Founder",
    company: "UVXYZ",
  },
  {
    img: "/images/testimonials/Frame17.png",
    text: "As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow.",
    name: "Swapnil Gaikwad @Founder",
    company: "Eunora",
  },
  {
    img: "/images/testimonials/Frame18.png",
    text: "As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow.",
    name: "Rakesh Yadav @Founder",
    company: "Klairklint",
  },
  {
    text2: "As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow. As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow.",
    text:"As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow. As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow",
    name: "Abhishek Kumar @Team",
    company: "Codesign",
  },
   {
    text2: "As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow. As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow.",
    text:"As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow. As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow",
    name: "Abhishek Kumar @Team",
    company: "Codesign",
  },
  {
    img: "/images/testimonials/Frame19.png",
    text: "As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow.",
    name: "Abhishek Kumar @Team",
    company: "Codesign",
  },
]
export default function Hero4() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const track = trackRef.current;
    const cardWidth = track.children[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const stride = cardWidth + gap;

    setActive(Math.round(track.scrollLeft / stride));
  };
  return (
    <section className="lg:pt-[74px] px-[clamp(20px,6vw,120px)]  pt-[44px]  pb-[34px] bg-white">
      {/* Heading */}
      <div
        className="flex items-center gap-4 lg:mb-[70px] md:mb-[37px] mb-[29px]"
        
      >
        <h2
          className="text-lg md:text-2xl lg:text-[1.75rem] font-[500] text-black whitespace-nowrap"
          
        >
          Words from people I've worked with
        </h2>
        <div
          className="flex-1 h-px bg-[#989898]"
         
        />
      </div>
      {/* 📱 Mobile slider */}
      <div className="md:hidden">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="
            flex 
            gap-3
            overflow-x-auto
            snap-x snap-mandatory
            scroll-smooth scrollbar-hide
 text-[#6D7876] font-[400] px-4 w-screen sm:w-full 
          "
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="
                min-w-full
                snap-start
                border
                rounded-[6px]
                p-4
                bg-white
                shadow-sm
                border-[#989898]
                flex flex-col justify-between
              "
            >
              <div className="flex flex-col  ">
          {item.img ? (
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-6"
            />
          ) : item.text2 ? (
            <p className=" leading-[clamp(20px,1.4vw,25px)] text-[clamp(14px,1.25vw,18px)] mb-2 tracking-tight">
              {item.text2}
            </p>
          ) : null}

          <p className="leading-[clamp(20px,1.4vw,25px)] text-[clamp(14px,1.25vw,18px)] tracking-tight
">
            {item.text}
          </p>
          </div>
          <div className="mt-6 text-[clamp(18px,1.5vw,23px)] font-[500] text-black leading-5">
            {item.name}<br/>
            {item.company}
          </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center  gap-2 mt-4 ">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-full transition ${
                active === i ? "bg-[#570202] scale-125" : "bg-[#D9D9D9] scale-100"
              }`}
            />
          ))}
        </div>
      </div>
      <div  className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-[clamp(2rem,3vw,8rem)]
 text-[#6D7876] font-[400]">
        {testimonials.map((item) => (
        <div
          
          className="border rounded-[6px] p-4 bg-white shadow-sm border-[#989898] flex flex-col justify-between  "
        >
          <div className="flex flex-col  ">
          {item.img ? (
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-6"
            />
          ) : item.text2 ? (
            <p className=" leading-[clamp(20px,1.4vw,25px)] text-[clamp(14px,1.25vw,18px)] mb-2 tracking-tight">
              {item.text2}
            </p>
          ) : null}

          <p className="leading-[clamp(20px,1.4vw,25px)] text-[clamp(14px,1.25vw,18px)] tracking-tight
">
            {item.text}
          </p>
          </div>
          <div className="mt-6 text-[clamp(18px,1.5vw,23px)] font-[500] text-black leading-5">
            {item.name}<br/>
            {item.company}
          </div>
        </div>
      ))}
      </div>
      </section>
  )
}