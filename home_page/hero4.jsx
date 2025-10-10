"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    text: "I have worked with several designers in the past, but Mani is the first who truly met my expectations. He takes the time to listen carefully to every requirement and delivers with precision. For my company logo, we were impressed with the very first design, yet when we requested an alternative, Mani patiently created another option without hesitation and we are 100% satisfied with the result.",
    text2:"In addition to the logo, he designed our social media templates, merchandise, visiting cards, and letterhead, making him a complete one-stop solution for brand design. His work is highly professional, creative, and always delivered on time. I strongly recommend Mani to anyone seeking reliable and comprehensive branding services.",
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
    text: "As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow. As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow.",
    text2:"As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow. As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow",
    name: "Abhishek Kumar @Team",
    company: "Codesign",
  },
   {
    text: "As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow. As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow.",
    text2:"As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow. As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow",
    name: "Abhishek Kumar @Team",
    company: "Codesign",
  },
  {
    img: "/images/testimonials/Frame19.png",
    text: "As I've built my brand, I've found various ways to eek out more efficiency in my day-to-day workflow.",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const isScrollingRef = useRef(false);

  // infinite mobile: triple the items and start in the middle
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const startOffset = testimonials.length;

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Initialize mobile scroll position to middle chunk and observe size changes
  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;

    const update = () => {
      const first = container.querySelector("[data-testimonial-item]");
      const gap = parseFloat(getComputedStyle(container).gap || "0") || 0;
      const itemWidth = first ? first.offsetWidth + gap : container.scrollWidth / extendedTestimonials.length;
      container.scrollLeft = itemWidth * startOffset;
      setCurrentIndex(startOffset);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(container);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [isMobile]);

  // Auto-advance index on mobile
  useEffect(() => {
    if (!isMobile || isPaused) return;
    const interval = setInterval(() => setCurrentIndex((prev) => prev + 1), 4500); // slower auto-advance
    return () => clearInterval(interval);
  }, [isMobile, isPaused]);

  // Manual scroll detection (user interaction) — update index and pause auto-scroll
  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    let scrollTimeout;
    let pauseTimeout;

    const onScroll = () => {
      if (isScrollingRef.current) return; // ignore programmatic anims
      setIsPaused(true);
      clearTimeout(scrollTimeout);
      clearTimeout(pauseTimeout);

      scrollTimeout = setTimeout(() => {
        const first = container.querySelector("[data-testimonial-item]");
        const gap = parseFloat(getComputedStyle(container).gap || "0") || 0;
        const itemWidth = first ? first.offsetWidth + gap : container.scrollWidth / extendedTestimonials.length;
        const newIndex = Math.round(container.scrollLeft / itemWidth);
        setCurrentIndex(newIndex);

        pauseTimeout = setTimeout(() => setIsPaused(false), 2000);
      }, 100);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [isMobile]);

  // Programmatic smooth scroll to currentIndex using rAF (disables snap during animation)
  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const first = container.querySelector("[data-testimonial-item]");
    const gap = parseFloat(getComputedStyle(container).gap || "0") || 0;
    const itemWidth = first ? first.offsetWidth + gap : container.scrollWidth / extendedTestimonials.length;

    const target = itemWidth * currentIndex;
    const start = container.scrollLeft;
    const distance = target - start;
    const duration = 1000; // increased duration => slower, smoother scroll
    let startTime = null;
    let rafId;

    // temporarily disable snap to prevent snapping jitter
    isScrollingRef.current = true;
    const prevSnap = container.style.scrollSnapType;
    container.style.scrollSnapType = "none";

    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    const step = (ts) => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      container.scrollLeft = start + distance * eased;

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        // boundary-safe reset WITHOUT visible jump:
        const chunkShift = testimonials.length * itemWidth;

        if (currentIndex >= testimonials.length * 2) {
          // landed in the right duplicate chunk — shift left by one full original-length chunk
          // do DOM-only scrollLeft adjustment first (no reflow-triggering state change)
          container.scrollLeft = container.scrollLeft - chunkShift;

          // then update React state (index) on next frame while keeping isScrolling true
          requestAnimationFrame(() => {
            setCurrentIndex((prev) => prev - testimonials.length);
            // restore snap on next frame to avoid snap flicker
            requestAnimationFrame(() => {
              container.style.scrollSnapType = prevSnap || "x mandatory";
              isScrollingRef.current = false;
            });
          });
        } else if (currentIndex < testimonials.length) {
          // landed in the left duplicate chunk — shift right by one chunk
          container.scrollLeft = container.scrollLeft + chunkShift;

          requestAnimationFrame(() => {
            setCurrentIndex((prev) => prev + testimonials.length);
            requestAnimationFrame(() => {
              container.style.scrollSnapType = prevSnap || "x mandatory";
              isScrollingRef.current = false;
            });
          });
        } else {
          // normal case (no boundary crossing)
          container.style.scrollSnapType = prevSnap || "x mandatory";
          isScrollingRef.current = false;
        }
      }
    };

    rafId = requestAnimationFrame(step);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      container.style.scrollSnapType = prevSnap || "x mandatory";
      isScrollingRef.current = false;
    };
  }, [currentIndex, isMobile]);

  const handleDotClick = (index) => {
    setIsPaused(true);
    setCurrentIndex(startOffset + index);
    setTimeout(() => setIsPaused(false), 2000);
  };

  const activeDot = () => currentIndex % testimonials.length;

  return (
    <section className="lg:pt-[74px] lg:px-[106px] pt-[27px] md:px-[39px] px-[20px] bg-white">
      {/* Section Heading */}
      <motion.div
        className="flex items-center gap-4 lg:mb-[70px] md:mb-[37px] mb-[29px] md:mt-[86px] mt-[104px] lg:mt-[198px]"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-[16px] md:text-[22px] lg:text-[28px] font-[500] text-black whitespace-nowrap"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Words from people I've worked with
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
      <div className="relative">
        <motion.div
          ref={scrollContainerRef}
          className={`
            ${isMobile
              ? "flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-[7px] items-stretch"
              : "grid md:gap-[14px] lg:gap-[69px] md:grid-cols-2 lg:grid-cols-3"
            }
          `}
          // keep visible immediately to avoid layout-dependent hiding
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          style={isMobile ? {
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch"
          } : {}}
        >
          {(isMobile ? extendedTestimonials : testimonials).map((testimonial, i) => (
            <motion.div
              key={i}
              data-testimonial-item
              variants={item}
              className={`
                border rounded-[6px] shadow-sm bg-white flex flex-col justify-between border-[#989898] pt-[19.4px] px-[15px] pb-[6px]
                md:pt-[26px] md:px-[21px] md:pb-[17px] h-full
                ${isMobile ? "min-w-[95%] snap-center min-h-[500px] " : "h-full"}
              `}
            >
              {testimonial.img && (
                <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  width={500}
                  height={300}
                  className="rounded-[6px] md:aspect-[480.749/226.563] lg:mb-[24.71px] md:mb-[22.02px] object-cover"
                />
              )}
              <div className="flex flex-col md:gap-y-4 font-[400] ">
                <p className="text-[#6D7876] lg:text-[18px] md:text-[16px] text-[14px] mb-[58.74px] flex-shrink-0 -tracking-[0.7px]">
                  "{testimonial.text}"
                </p>
                {testimonial.text2 && (
                  <p className="text-[#6D7876] -mt-[58.74px] lg:text-[18px] md:text-[16px] text-[14px] mb-4 flex-shrink-0 -tracking-[0.7px]">
                    "{testimonial.text2}"
                  </p>
                )}
              </div>
              <h4 className="font-[600] lg:text-[22.579px] text-black flex flex-col justify-end h-full">
                {testimonial.name} <span className="font-[600]">@{testimonial.company}</span>
              </h4>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Dot Navigation - Mobile Only */}
        {isMobile && (
          <div className="flex justify-center gap-[8px] mt-[41px]">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`
                  transition-all duration-300 rounded-full
                  ${activeDot() === index
                    ? "w-[13px] h-[13px] bg-[#570202]"
                    : "w-[13px] h-[13px] bg-[#D9D9D9]"
                  }
                `}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}