"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Marquee from "../components/Marquee";
import { Instrument_Serif, Work_Sans } from "next/font/google";
import Mascot from "../components/mascot/mascot"
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});


/* =========================================
   GRAIN OVERLAY
========================================= */




/* =========================================
   HAND DRAWN CIRCLE
========================================= */

function HandDrawnCircle({ delay = 700 }) {
  const wrapperRef = useRef(null);
  const pathRef = useRef(null);
 
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
 
  useEffect(() => {
    const wrapper = wrapperRef.current;
 
    if (!wrapper) return;
 
    // Use offsetWidth/offsetHeight rather than getBoundingClientRect().
    // getBoundingClientRect() returns the *painted* box, which includes
    // the parent <h1>'s rotateX flip-in transform — so if this fires
    // while that animation is still mid-flight, it measures a rotated,
    // compressed rectangle instead of the word's real resting size, and
    // the circle never recovers because layout size never changes again
    // afterwards. offsetWidth/offsetHeight are layout-based and ignore
    // CSS transforms entirely, so they stay accurate throughout the flip.
    const updateSize = () => {
      setDimensions({
        width: wrapper.offsetWidth,
        height: wrapper.offsetHeight,
      });
    };
 
    updateSize();
 
    const observer = new ResizeObserver(updateSize);
    observer.observe(wrapper);
 
    return () => observer.disconnect();
  }, []);
 
 
  const buildPath = (width, height) => {
    if (!width || !height) return "";
 
    const paddingX = Math.max(14, width * 0.2);
    const paddingY = Math.max(6, height * 0.16);
 
    const svgWidth = width + paddingX * 2;
    const svgHeight = height + paddingY * 2;
 
    const cx = svgWidth / 2;
    const cy = svgHeight / 2;
 
    const rx = svgWidth / 2 - 3;
    const ry = (svgHeight / 2 - 3) * 0.82;
 
    const startAngle = (-100 * Math.PI) / 180;
    const totalSweep = (380 * Math.PI) / 180;
 
    const steps = 16;
 
    const jitterSeq = [
      0.018,
      -0.03,
      0.014,
      -0.022,
      0.026,
      -0.016,
      0.024,
      -0.028,
      0.02,
      -0.019,
      0.027,
      -0.015,
      0.021,
      -0.024,
      0.016,
      -0.02,
    ];
 
    const points = [];
 
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const angle = startAngle + t * totalSweep;
 
      const jitter = 1 + jitterSeq[i % jitterSeq.length];
 
      points.push({
        x: cx + Math.cos(angle) * rx * jitter,
        y: cy + Math.sin(angle) * ry * jitter,
      });
    }
 
    let d = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)} `;
 
    for (let i = 1; i < points.length - 1; i++) {
      const mx =
        (points[i].x + points[i + 1].x) / 2;
 
      const my =
        (points[i].y + points[i + 1].y) / 2;
 
      d += `Q ${points[i].x.toFixed(2)} ${points[i].y.toFixed(
        2
      )} ${mx.toFixed(2)} ${my.toFixed(2)} `;
    }
 
    const last = points[points.length - 1];
 
    d += `T ${last.x.toFixed(2)} ${last.y.toFixed(2)}`;
 
    return {
      path: d,
      svgWidth,
      svgHeight,
      paddingX,
      paddingY,
    };
  };
 
 
  useEffect(() => {
    if (!pathRef.current) return;
 
    const path = pathRef.current;
 
    let length;
 
    try {
      length = path.getTotalLength();
    } catch {
      return;
    }
 
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.transformBox = "fill-box";
    path.style.transformOrigin = "center";
 
    // Stage 1 — draw the circle on, same as before.
    const drawAnim = path.animate(
      [
        {
          strokeDashoffset: length,
        },
        {
          strokeDashoffset: 0,
        },
      ],
      {
        duration: 850,
        delay,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "forwards",
      }
    );
 
    let wobbleAnim;
    let pulseAnim;
 
    // Stage 2 — a small overshoot/settle once the line is fully drawn,
    // like a marker easing off the page.
    drawAnim.finished
      .then(() => {
        wobbleAnim = path.animate(
          [
            { transform: "scale(1) rotate(0deg)" },
            { transform: "scale(1.04) rotate(-1.2deg)", offset: 0.35 },
            { transform: "scale(0.985) rotate(0.8deg)", offset: 0.65 },
            { transform: "scale(1) rotate(0deg)" },
          ],
          {
            duration: 600,
            easing: "ease-out",
            fill: "forwards",
          }
        );
 
        // Stage 3 — a slow, gentle opacity pulse so the circle stays
        // alive on the page instead of sitting static once drawn.
        return wobbleAnim.finished;
      })
      .then(() => {
        pulseAnim = path.animate(
          [
            { opacity: 1 },
            { opacity: 0.55 },
            { opacity: 1 },
          ],
          {
            duration: 2600,
            easing: "ease-in-out",
            iterations: Infinity,
          }
        );
      })
      .catch(() => {
        // Animation was cancelled (unmount) — nothing to do.
      });
 
    return () => {
      drawAnim.cancel();
      wobbleAnim?.cancel();
      pulseAnim?.cancel();
    };
  }, [dimensions, delay]);
 
 
  const circle = buildPath(
    dimensions.width,
    dimensions.height
  );
 
  return (
    <span
      ref={wrapperRef}
      className="absolute inset-0 pointer-events-none"
    >
      {circle && (
        <svg
          className="absolute pointer-events-none overflow-visible"
          width={circle.svgWidth}
          height={circle.svgHeight}
          viewBox={`0 0 ${circle.svgWidth} ${circle.svgHeight}`}
          style={{
            left: `${-circle.paddingX}px`,
            top: `${-circle.paddingY}px`,
          }}
        >
          <path
            ref={pathRef}
            d={circle.path}
            fill="none"
            stroke="#ffde59"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}
    </span>
  );
}


/* =========================================
   CUSTOM CURSOR
========================================= */

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const ring = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.left =
          `${event.clientX}px`;

        dotRef.current.style.top =
          `${event.clientY}px`;
      }
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    let animationFrame;

    const animate = () => {
      ring.current.x +=
        (mouse.current.x - ring.current.x) * 0.18;

      ring.current.y +=
        (mouse.current.y - ring.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.left =
          `${ring.current.x}px`;

        ringRef.current.style.top =
          `${ring.current.y}px`;
      }

      animationFrame =
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);


  useEffect(() => {
    const elements =
      document.querySelectorAll(
        "[data-cursor-hover]"
      );

    const enter = () => {
      ringRef.current?.classList.add(
        "cursor-hover"
      );
    };

    const leave = () => {
      ringRef.current?.classList.remove(
        "cursor-hover"
      );
    };

    elements.forEach((element) => {
      element.addEventListener(
        "mouseenter",
        enter
      );

      element.addEventListener(
        "mouseleave",
        leave
      );
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener(
          "mouseenter",
          enter
        );

        element.removeEventListener(
          "mouseleave",
          leave
        );
      });
    };
  }, []);


  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot"
      />

      <div
        ref={ringRef}
        className="custom-cursor-ring"
      />
    </>
  );
}


/* =========================================
   MASCOT (eyes track the cursor)
========================================= */

/* =========================================
   DOODLE MASCOT
========================================= */




/* =========================================
   MARQUEE
========================================= */




/* =========================================
   HERO
========================================= */

export default function Hero1() {
  return (
    <section className="relative flex min-h-screen flex-col bg-[#570202] text-white overflow-hidden">

      {/* Grain */}
      

      {/* Cursor */}
      <CustomCursor />

      {/* Mascot */}
      


      {/* Heading */}

      <motion.h1
        initial={{
          opacity: 0,
          rotateX: -90,
        }}
        animate={{
          opacity: 1,
          rotateX: 0,
        }}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 1.1,
        }}
        style={{
          transformOrigin: "left top",
          transformStyle: "preserve-3d",
        }}
        className="
          relative
          z-10
          mx-6
          mt-[clamp(120px,12vw,170px)]
          max-w-[1200px]
          text-left
          text-[clamp(40px,7.5vw,108px)]
          font-medium
          leading-[1.02]
          tracking-[-0.035em]
          md:mx-14
          lg:mx-20
        "
      >

        <span className="block">
          An{" "}
          <span
            className=""
          >
            <span className="relative inline-block">
              identity
              <HandDrawnCircle delay={900} />
            </span>
          </span>{" "}
          that
        </span>

        <span className="block">
          defines your vision,
        </span>

        <span className="block">
          carries your{" "}
          <span
            className=""
          >
            <span className="relative inline-block">
              story
              <HandDrawnCircle delay={1200} />
            </span>
          </span>
          .
        </span>

      </motion.h1>


      {/* Subline */}

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        className={`${workSans.className} relative z-10 mx-6 mt-8 max-w-[430px] text-[15.5px] leading-relaxed text-white/70 md:mx-14
          lg:mx-20`}
      >
        Logic gives a brand its structure; feeling gives it a pulse. Dees
        works at the point where the two meet — building marks that are as
        considered as they are memorable.
      </motion.p>

      <Mascot />
      {/* spacer so the marquee sits below the fold content nicely */}
      <div className="flex-1" />

      {/* Marquee */}
      <div className="w-full mb-[clamp(158px,10vw,254px)]"> <Marquee text="I’ve got a thing for great brands, so I design them" /> </div>

      {/* Footer note */}
      

    </section>
  );
}