"use client";
import React , { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion ,AnimatePresence} from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Container for stagger effect
  const menuContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  // Each menu item animation
  const menuItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const menuItems = [
    { label: "Projects", href: "/project" },
    { label: "Logos", href: "/logos" },
    { label: "Process", href: "/process" },
    { label: "Packages", href: "/package" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-[#570202] text-white flex items-center justify-between shadow-md  lg:py-[52px] lg:pl-[143.047px] lg:pr-[107px] md:px-[40px] md:pt-[22px] md:pb-[21px] pt-[40px] px-[20px] pb-[156.001px] "
    >
      {/* Logo with animation */}
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      className="flex items-center"
    >
      <Link href="/" className="inline-block">
        <Image
          src="/images/Dees.png"
          alt="Dees Logo"
          width={100}
          height={100}
          className="w-[87.51px] h-[29.51px] "
        />
      </Link>
    </motion.div>

      {/* Desktop Menu */}
      <motion.div
        className="hidden md:flex space-x-[32px] lg:space-x-[64px]"
        variants={menuContainer}
        initial="hidden"
        animate="visible"
      >
        {menuItems.map((item) => (
          <motion.a
            key={item.href}
            href={item.href}
            className="relative text-[22px] lg:text-[28px] font-[400] font-worksans lg:p-[8px] p-[4px] "
            variants={menuItem}
            whileHover={{ y: -3, transition: { type: "spring", stiffness: 300 } }}
          >
            {item.label}
            {/* underline hover effect */}
            <motion.span
              className="absolute left-0 -bottom-1 w-full h-[2px] bg-white origin-left scale-x-0"
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.a>
        ))}
      </motion.div>
       {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Image
            src="/images/pumpkin.png"
            alt="Menu"
            width={50}
            height={50}
            className="w-[40px] h-[40px]"
          />
        </button>
      </div>
       <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="absolute top-0 right-0 w-[305px] h-screen bg-[white] text-[#570202]  flex flex-col items-start gap-[57px] md:hidden z-50 "
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end"
            >
              <Image
                src="/images/pumclose.png"
                alt="Close Menu"
                width={40}
                height={40}
                className="w-[40px] h-[40px] mt-[38px] mr-[45px] mb-[38px] p-0"
              />
            </button>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-[white] text-[#570202]   font-[400] font-worksans text-[33.736px] leading-normal tracking-[-1.012px] hover:bg-[#FFE7E7] p-[9.64px] rounded-[6px] ml-[34px] "
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
