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
  "/images/logos/13.svg", "/images/logos/14.svg",
  "/images/logos/15.svg",
  "/images/logos/16.svg",
  "/images/logos/17.svg", "/images/logos/18.svg",
  "/images/logos/19.svg", "/images/logos/20.svg",
  "/images/logos/21.svg", "/images/logos/22.svg",
  "/images/logos/23.svg", "/images/logos/24.svg",
  "/images/logos/25.svg", "/images/logos/26.svg",
  "/images/logos/27.svg", "/images/logos/28.svg",
  "/images/logos/29.svg", "/images/logos/30.svg",
  "/images/logos/31.svg",
  "/images/logos/32.svg",
  "/images/logos/33.svg", "/images/logos/34.svg",
  "/images/logos/35.svg",
  "/images/logos/36.svg",
  "/images/logos/37.svg",
  "/images/logos/38.svg", "/images/logos/39.svg",
  "/images/logos/40.svg"

];
export default function logo2() {
  const [visibleLogos, setVisibleLogos] = useState(new Set());
  const logoRefs = useRef([]);
  const hasAnimated = useRef(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Collect newly visible indices
        const newIndices = [];
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting && !hasAnimated.current.has(index)) {
            hasAnimated.current.add(index);
            newIndices.push(index);
          }
        });

        // Sort by index so they stagger in order (left-to-right, top-to-bottom)
        newIndices.sort((a, b) => a - b);

        // Stagger each logo with a sequential delay
        newIndices.forEach((idx, i) => {
          setTimeout(() => {
            setVisibleLogos((prev) => new Set([...prev, idx]));
          }, i * 120);
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px'
      }
    );

    logoRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen py-10 md:py-20 lg:py-30 bg-[#0f0f0f]">
      <section className="px-6 md:px-14 lg:px-32 bg-[#0f0f0f]">
        <div className="grid grid-cols-3 md:grid-cols-5 justify-items-center md:mx-auto gap-x-6 gap-y-16 md:gap-x-8 md:gap-y-24 lg:gap-x-10 lg:gap-y-32">
          {logos.map((logo, index) => (
            <div
              key={index}
              ref={(el) => (logoRefs.current[index] = el)}
              data-index={index}
              className={`w-full aspect-square max-w-[170px] p-2 flex items-center justify-center`}
              style={{
                opacity: visibleLogos.has(index) ? 1 : 0,
                transform: visibleLogos.has(index)
                  ? 'translateY(0) scale(1)'
                  : 'translateY(-20px) scale(0.4)',
                transformOrigin: 'top center',
                transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}