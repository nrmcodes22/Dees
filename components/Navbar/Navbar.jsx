"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const isContact = pathname === "/contact";
  const [menuOpen, setMenuOpen] = useState(false);
  // Container for stagger effect
  const menuContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);
  // Each menu item animation
  const menuItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // "Contact" now renders as its own pill button, not a plain link —
  // pulled out of this list so it doesn't get the underline-on-hover
  // treatment the rest of the items get.
  const menuItems = [
    { label: "Projects", href: "/project" },
    { label: "Logos", href: "/logos" },
    { label: "Process", href: "/process" },
    { label: "Packages", href: "/package" },
    { label: "About", href: "/about" },
  ];

  // Magnetic pull for the Contact pill — mirrors the prototype's
  // mousemove-driven translate, smoothed with a spring so it trails
  // the cursor instead of snapping to it.
  const contactX = useMotionValue(0);
  const contactY = useMotionValue(0);
  const contactSpringX = useSpring(contactX, { stiffness: 300, damping: 20, mass: 0.4 });
  const contactSpringY = useSpring(contactY, { stiffness: 300, damping: 20, mass: 0.4 });

  const handleContactMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    contactX.set(relX * 0.25);
    contactY.set(relY * 0.35);
  };

  const handleContactMouseLeave = () => {
    contactX.set(0);
    contactY.set(0);
  };

  return (
    <nav
      className={`  text-white flex items-center justify-between relative
  px-[clamp(1.25rem,6vw,9rem)]
  py-[clamp(1.25rem,3vw,3rem)] ${
    isContact ? "bg-white" : "bg-[#570202] "
  } md:bg-[#570202]`}
    >
      {/* Logo with animation */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className={` md:hidden flex items-center`}
      >
        <Link href="/" className="inline-block">
          <Image
            src={isContact ? "/images/Dees2.png" : "/images/Dees.png"}
            alt="Dees Logo"
            width={100}
            height={100}
            className="w-22 h-8 mt-6 md:mt-0"
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className={` hidden md:flex items-center`}
      >
        <Link href="/" className="inline-block">
          <Image
            src="/images/Dees.png"
            alt="Dees Logo"
            width={100}
            height={100}
            className="w-22 h-8 mt-6 md:mt-0"
          />
        </Link>
      </motion.div>
      {/* Desktop Menu */}
      <motion.div
        className="hidden md:flex flex-grow justify-end items-center gap-x-[clamp(16px,3vw,72px)] 
"
        variants={menuContainer}
        initial="hidden"
        animate="visible"
      >
        {menuItems.map((item) => (
          <motion.a
            key={item.href}
            href={item.href}
            className={`relative ${
              pathname === item.href
                ? "text-[#FFE7E7]" // ACTIVE
                : "text-white"
            }  text-[clamp(18px,2vw,24px)] leading-normal tracking-[-0.03em] font-[300] font-worksans lg:p-2 p-1`}
            variants={menuItem}
            whileHover={{ y: -3, transition: { type: "spring", stiffness: 300 } }}
          >
            {item.label}

            <motion.span
              className="absolute left-0 -bottom-1 w-full h-0.5 bg-white origin-left scale-x-0"
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.a>
        ))}

        {/* Contact — animated pill CTA, vibrant yellow with a sliding fill
            and a magnetic pull toward the cursor on hover */}
        <motion.a
          href="/contact"
          variants={menuItem}
          style={{ x: contactSpringX, y: contactSpringY }}
          onMouseMove={handleContactMouseMove}
          onMouseLeave={handleContactMouseLeave}
          className={`
    group
    relative
    inline-flex
    items-center
    gap-2
    overflow-hidden
    rounded-full
    border-[1.5px]
    px-5
    py-2.5
    text-[clamp(16px,1.4vw,18px)]
    font-worksans
    font-medium
    transition-colors
    duration-300
    ${isContact ? "border-[#570202] text-[#570202]" : "border-[#ffde59] text-[#ffde59]"}
  `}
          whileHover={{
            scale: 1.05,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 15,
            },
          }}
        >
          {/* Sliding background — single computed class so the translate-y
              state can't be fought over by two conflicting utility strings */}
          <span
            className={`
      absolute
      inset-0
      z-0
      transition-transform
      duration-[350ms]
      ease-out
      ${
        isContact
          ? "translate-y-0 bg-[#570202]"
          : "translate-y-[101%] group-hover:translate-y-0 bg-[#ffde59]"
      }
    `}
          />

          {/* Dot */}
          <span
            className={`
      relative
      z-10
      h-1.5
      w-1.5
      rounded-full
      transition-colors
      duration-300
      ${isContact ? "bg-white" : "bg-[#ffde59] group-hover:bg-[#570202]"}
    `}
          />

          {/* Text */}
          <span
            className={`
      relative
      z-10
      transition-colors
      duration-300
      ${isContact ? "text-white" : "text-[#ffde59] group-hover:text-[#570202]"}
    `}
          >
            Contact
          </span>
        </motion.a>
      </motion.div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center mt-6 md:mt-0 ">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Image
            src={isContact ? "/images/pumclose.png" : "/images/pumpkin.png"}
            alt="Menu"
            width={40}
            height={40}
            className="w-9 h-9"
          />
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            className="
              absolute top-0 right-0 
              w-[80%] sm:w-[70%] min-h-screen 
              bg-white text-[#570202] 
              flex flex-col 
              items-start 
              gap-8 sm:gap-10 
              md:hidden 
              z-50 
              p-6 sm:p-8
            "
          >
            <button onClick={() => setMenuOpen(false)} className="self-end">
              <Image
                src="/images/pumclose.png"
                alt="Close Menu"
                width={35}
                height={35}
                className="w-9 h-9 mt-4 mr-2 sm:mr-4"
              />
            </button>

            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`  text-[#570202]
                  font-worksans font-[400]
                  text-[1.6rem] sm:text-[1.9rem]
                  leading-normal tracking-tight
                  px-3 sm:px-4 py-2
                  rounded-lg
                  w-[80%] sm:w-[70%]
                  ml-4 sm:ml-6
                  transition-colors
                  ${pathname === item.href ? "bg-[#FFE7E7]" : "bg-white"}
                  `}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Contact — same yellow pill + dot + sliding-fill treatment as
                desktop, on a group so hover/press states line up, sized for
                the mobile sheet's white background */}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={`
                group
                relative
                inline-flex
                items-center
                gap-2
                self-start
                overflow-hidden
                rounded-full
                border-[1.5px]
                px-5
                py-2.5
                ml-4
                sm:ml-6
                text-[1.4rem]
                font-worksans
                font-medium
                transition-colors
                duration-300
                ${isContact ? "border-[#570202] text-white" : "border-[#570202] text-[#570202]"}
              `}
            >
              <span
                className={`
                  absolute
                  inset-0
                  z-0
                  transition-transform
                  duration-[350ms]
                  ease-out
                  ${isContact ? "translate-y-0 bg-[#570202]" : "translate-y-[101%] group-hover:translate-y-0 bg-[#570202]"}
                `}
              />
              <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-current" />
              <span className="relative z-10">Contact</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}