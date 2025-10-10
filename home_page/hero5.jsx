"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const feedImages = [
  "/images/projectdivehero/Frame4.png",
  "/images/projectdivehero/Frame41.png",
  "/images/projectdivehero/Frame42.png",
  "/images/projectdivehero/Frame43.png",
  "/images/projectdivehero/Frame44.png",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { y: 40, opacity: 0, filter: "blur(6px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero5() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const desktopScrollRef = useRef(null);
  const isScrollingRef = useRef(false);

  // Create extended array for infinite scroll (mobile)
  const extendedImages = [...feedImages, ...feedImages, ...feedImages];
  const startOffset = feedImages.length;

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile: Initialize scroll position to middle chunk and observe size changes
  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const update = () => {
      const first = container.querySelector("[data-feed-item]");
      const gap = parseFloat(getComputedStyle(container).gap || "0") || 0;
      const itemWidth = first ? first.offsetWidth + gap : container.scrollWidth / extendedImages.length;
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

  // Mobile: Auto-advance (slower)
  useEffect(() => {
    if (!isMobile || isPaused) return;
    const interval = setInterval(() => setCurrentIndex((p) => p + 1), 4500);
    return () => clearInterval(interval);
  }, [isMobile, isPaused]);

  // Mobile: Manual scroll detection (user interaction) — pause and update index
  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    let scrollTimeout;
    let pauseTimeout;

    const onScroll = () => {
      if (isScrollingRef.current) return;
      setIsPaused(true);
      clearTimeout(scrollTimeout);
      clearTimeout(pauseTimeout);

      scrollTimeout = setTimeout(() => {
        const first = container.querySelector("[data-feed-item]");
        const gap = parseFloat(getComputedStyle(container).gap || "0") || 0;
        const itemWidth = first ? first.offsetWidth + gap : container.scrollWidth / extendedImages.length;
        const newIndex = Math.round(container.scrollLeft / itemWidth);
        setCurrentIndex(newIndex);

        pauseTimeout = setTimeout(() => setIsPaused(false), 2000);
      }, 120);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [isMobile]);

  // Mobile: Programmatic smooth scroll to currentIndex using rAF (no CSS scroll-behavior)
  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const first = container.querySelector("[data-feed-item]");
    const gap = parseFloat(getComputedStyle(container).gap || "0") || 0;
    const itemWidth = first ? first.offsetWidth + gap : container.scrollWidth / extendedImages.length;

    const target = itemWidth * currentIndex;
    const start = container.scrollLeft;
    const distance = target - start;
    const duration = 1000; // longer duration => smoother
    let startTime = null;
    let rafId;

    // temporarily disable snap and mark programmatic scroll
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
        // DOM-only boundary shift to avoid flicker, then correct index on next frames
        const chunkShift = feedImages.length * itemWidth;

        if (currentIndex >= feedImages.length * 2) {
          // shifted into right duplicate chunk -> subtract one original-length chunk
          container.scrollLeft = container.scrollLeft - chunkShift;
          requestAnimationFrame(() => {
            setCurrentIndex((prev) => prev - feedImages.length);
            requestAnimationFrame(() => {
              container.style.scrollSnapType = prevSnap || "x mandatory";
              isScrollingRef.current = false;
            });
          });
        } else if (currentIndex < feedImages.length) {
          // shifted into left duplicate chunk -> add one chunk
          container.scrollLeft = container.scrollLeft + chunkShift;
          requestAnimationFrame(() => {
            setCurrentIndex((prev) => prev + feedImages.length);
            requestAnimationFrame(() => {
              container.style.scrollSnapType = prevSnap || "x mandatory";
              isScrollingRef.current = false;
            });
          });
        } else {
          // normal case
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

  // Desktop/Tablet: Infinite scroll animation (unchanged)
  useEffect(() => {
    if (isMobile || !desktopScrollRef.current) return;

    const scrollContainer = desktopScrollRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 0.2;
    let animationId;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) scrollAmount = 0;
      scrollContainer.scrollLeft = scrollAmount;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isMobile]);

  const handleDotClick = (index) => {
    setIsPaused(true);
    setCurrentIndex(startOffset + index);
    setTimeout(() => setIsPaused(false), 2000);
  };

  const getActiveDot = () => currentIndex % feedImages.length;

  return (
    <section className="lg:pt-[74px] lg:px-[106px] pt-[99px] md:px-[39px] px-[20px] bg-white">
      {/* Section Heading */}
      <motion.div
        className="flex items-center gap-4 lg:mb-[85px] md:mb-[52px] mb-[20px]"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.h2 className="text-[16px] md:text-[22px] lg:text-[28px] font-[500] text-black whitespace-nowrap" variants={item}>
          From my feed
        </motion.h2>
        <motion.div className="flex-1 h-px bg-[#989898]" variants={item} />
      </motion.div>

      <div className="flex flex-col-reverse md:flex-col gap-y-20">
        {/* Mobile Slider */}
        <div className="relative md:hidden">
          <motion.div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-[5.5%] mb-10"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {extendedImages.map((src, i) => (
              <motion.div
                key={i}
                data-feed-item
                variants={item}
                className="relative aspect-[208/369] lg:aspect-[324/575] rounded-md overflow-hidden min-w-[65%] snap-center flex-shrink-0 transform-gpu will-change-transform"
              >
                <Image src={src} alt={`Feed image ${(i % feedImages.length) + 1}`} fill className="object-cover rounded-[6px] transition-transform duration-500 hover:scale-105" />
              </motion.div>
            ))}
          </motion.div>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-[8px] ">
            {feedImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 rounded-full ${getActiveDot() === index ? "w-[13px] h-[13px] bg-[#570202]" : "w-[13px] h-[13px] bg-[#D9D9D9]"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop/Tablet Infinite Scroll */}
        <motion.div className="hidden md:block overflow-hidden mb-10" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
          <div ref={desktopScrollRef} className="overflow-x-hidden" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <div className="flex gap-4 w-max">
              {[...feedImages, ...feedImages, ...feedImages, ...feedImages].map((src, i) => (
                <motion.div key={i} variants={item} className="relative rounded-md overflow-hidden flex-shrink-0 w-[280px] h-[480px]">
                  <Image src={src} alt={`Feed image ${(i % feedImages.length) + 1}`} fill className="object-cover rounded-md hover:scale-115 transition-transform duration-800" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Paragraph + Button */}
        <motion.div className="flex flex-col md:flex-row md:items-start lg:items-center gap-4 lg:gap-[131px] md:gap-[201px] " variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
          <motion.p className="text-[#6D7876] text-[16px] lg:text-[28px] md:text-[18px] font-[300] tracking-[-0.54px] lg:tracking-[-1.12px] md:tracking-[-0.72px]" variants={item}>
            For the past few years, I've been sharing my design journey through short videos, I break down projects, share lessons I've learned, and document the process that shapes my work. It's a space where I keep exploring new ways to make design approachable. You can explore more of this journey on Instagram.
          </motion.p>
          <motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[8px] md:gap-[4.8px] bg-[#570202] text-white lg:px-[29.5px] lg:py-[25px] px-[19.29px] py-[16px] md:px-[14px] md:py-[14px] rounded-full hover:bg-[#3d0000] transition w-[160px] lg:w-[248px] md:w-[140px] md:flex-shrink-0 mt-[35px] md:mt-0" variants={item}>
            <FaInstagram className="lg:w-[30px] lg:h-[30px] md:w-[18px] md:h-[18px]" />
            <span className="text-[15.422px] md:text-[14px] lg:text-[24px] font-[500] font-worksans tracking-[-0.463px]  lg:tracking-[-0.72px]  md:tracking-[-0.42px] leading-normal">My Instagram</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div className="hidden md:flex h-px mt-40 bg-[#989898] lg:w-[1320px] md:w-[746px] items-center mx-auto" variants={item} initial="hidden" whileInView="show" viewport={{ once: true }} />

      {/* Closing Line */}
      <motion.h2 className="mt-[84px] lg:mt-[78px] md:mt-[50px] w-[263.787px] lg:w-[821px] md:w-[521px] text-[16px] lg:text-[28px] md:text-[18px] font-[400] text-[#6D7876] text-center mx-auto  leading-[18px] lg:leading-[35px] md:leading-[24px] pb-[86px] lg:pb-[132px] md:pb-[156px]" variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}>
        That's a little of what I do. If it feels like the right fit, I'd love to <br />
        hear about your next project.
      </motion.h2>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
