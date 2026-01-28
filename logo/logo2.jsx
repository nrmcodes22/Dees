"use client"

import React from 'react'
import { useState, useEffect, useRef } from 'react';
const logos = [
  "/images/logos/1.svg",
  "/images/logos/2.svg",
  "/images/logos/3.svg",
  "/images/logos/4.svg",
  "/images/logos/5.svg",
  "/images/logos/6.svg",
  "/images/logos/7.svg",
  "/images/logos/8.svg",
  "/images/logos/9.svg",
  "/images/logos/10.svg",
  "/images/logos/11.svg",
  "/images/logos/12.svg",
  "/images/logos/13.svg","/images/logos/14.svg",
  "/images/logos/15.svg",
  "/images/logos/16.svg",
  "/images/logos/17.svg","/images/logos/18.svg",
  "/images/logos/19.svg","/images/logos/20.svg",
  "/images/logos/21.svg","/images/logos/22.svg",
  "/images/logos/23.svg","/images/logos/24.svg",
  "/images/logos/25.svg","/images/logos/26.svg",
  "/images/logos/27.svg","/images/logos/28.svg",
  "/images/logos/29.svg","/images/logos/30.svg",
  "/images/logos/31.svg",
  "/images/logos/32.svg",
  "/images/logos/33.svg","/images/logos/34.svg",
  "/images/logos/35.svg",
  "/images/logos/36.svg",
  "/images/logos/37.svg",
    "/images/logos/38.svg","/images/logos/39.svg",
  "/images/logos/40.svg"
  
];
export default function logo2() {
  const [visibleLogos, setVisibleLogos] = useState(new Set());
  const logoRefs = useRef([]);
    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleLogos((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    logoRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);
    return(
       <div className="min-h-screen pt-10 md:pt-20 bg-black">
      <section className=" px-[clamp(10px,2vw,120px)] pb-[34px] bg-black">
        <div className="grid grid-cols-3 md:grid-cols-5 justify-items-center md:mx-auto gap-y-24 md:gap-y-[200px] gap-x-6 md:gap-x-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              ref={(el) => (logoRefs.current[index] = el)}
              data-index={index}
              className={` px-6.5 md:px-0  flex justify-center  transition-all duration-700 ease-out ${
                visibleLogos.has(index)
                  ? 'opacity-100 translate-y-0 scale-120'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{
                transitionDelay: `${(index % 5) * 100}ms`
              }}
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 "
              />
            </div>
          ))}
        </div>
      </section>
    </div>
    )
}