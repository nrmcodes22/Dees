"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useState,useEffect, useRef } from "react";
const feedImages = [
  "/images/projectdivehero/Frame4.png",
  "/images/projectdivehero/Frame41.png",
  "/images/projectdivehero/Frame42.png",
  "/images/projectdivehero/Frame43.png",
  "/images/projectdivehero/Frame44.png",
];
export default function Hero5()
{
   /* ------------------ MOBILE STATE ------------------ */
  const mobileRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleMobileScroll = () => {
    const track = mobileRef.current;
    if (!track) return;
    const width = track.children[0].offsetWidth;
    setActive(Math.round(track.scrollLeft / width));
  };

  /* ------------------ DESKTOP INFINITE ------------------ */
  const desktopRef = useRef(null);
  const position = useRef(0);

  useEffect(() => {
    const track = desktopRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;
    const speed = 0.1; // px per frame (tune this)

    let raf;
    const animate = () => {
      position.current += speed;
      if (position.current >= halfWidth) {
        position.current = 0;
      }
      track.style.transform = `translateX(-${position.current}px)`;
      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, []);
    return (
        <section className="lg:pt-[131px] px-[clamp(20px,6vw,120px)]  pt-[44px]  pb-[34px] bg-white">
      {/* Heading */}
      <div 
      className=" flex items-center lg:gap-[16px] md:gap-[34px] gap-[6px] mb-10">
        <h2 className="text-lg md:text-2xl lg:text-[1.75rem] font-medium text-black whitespace-nowrap">
            From my feed
        </h2>

        <div className="flex-1 h-px bg-[#989898]"></div>
      </div>
      <div className="flex flex-col mb-24">
        <div className="md:order-2 md:flex gap-20">
          <p className="font-[300] text-[#6D7876]  text-[clamp(16px,2vw,28px)] md:tracking-tight leading-normal">For the past few years, I’ve been sharing my design journey through short videos, I break down projects, share lessons I’ve learned, and document the process that shapes my work. It’s a space where I keep exploring new ways to make design approachable. You can explore more of this journey on Instagram.</p>
        <a href="/" className="w-fit h-fit inline-flex items-center justify-center gap-2 mt-8 md:mt-0 bg-[#570202] px-[clamp(10px,12vw,38px)] py-[clamp(8px,3vw,20px)] rounded-full font-worksans font-[500] text-[clamp(18px,4vw,20px)] tracking-tight text-white leading-none whitespace-nowrap select-none touch-manipulation lg:self-end">
  <img
    src="/images/icons/InstagramLogo.png"
    alt=""
    className="h-6 w-6 lg:h-8 lg:w-8 block"
  />
  <span>My Instagram</span>
</a>

        </div>
        
         {/* ================= MOBILE SLIDER ================= */}
      <div className="md:hidden mt-20">
        <div
          ref={mobileRef}
          onScroll={handleMobileScroll}
          className="
            flex
            overflow-x-auto
            snap-x snap-mandatory
            scrollbar-hide gap-4
          "
        >
          {feedImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className=" h-[100vw] aspect-[9/16] object-cover snap-start rounded-[6px]"
            />
          ))}
        </div>

        {/* dots */}
        <div className="flex justify-center gap-2 mt-8">
          {feedImages.map((_, i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-transform ${
                active === i
                  ? "bg-[#570202] scale-125"
                  : "bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= DESKTOP INFINITE ================= */}
      <div className="hidden md:block overflow-hidden md:order-1 md:mb-10 lg:mb-28">
        <div
          ref={desktopRef}
          className="flex gap-4 lg:gap-6 will-change-transform"
        >
          {[...feedImages, ...feedImages].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="h-[65vw]  lg:h-[30vw] w-auto object-cover rounded-lg flex-shrink-0"
            />
          ))}
        </div>
      </div>
      </div>
      <div className="hidden md:flex h-px mx-auto bg-[#989898] w-[80vw]"></div>
      <p className="mt-10 lg:mt-22 text-center mx-auto text-[#6D7876] text-[clamp(16px,2.3vw,28px)] lg:max-w-[40vw] md:max-w-[65vw] max-w-[60vw] mb-20">That’s a little of what I do. If it feels like the right fit, I’d love to hear about your next project.</p>
      
      </section>
    )
}