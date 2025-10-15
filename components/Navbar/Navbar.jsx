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
    <nav
  className="bg-[#570202] text-white flex items-center justify-between
  xl:py-12 xl:pl-[9rem] xl:pr-[6.75rem]
  md:px-10 md:pt-[1.375rem] md:pb-[1.3125rem]
  pt-10 px-5 pb-[9.75rem] relative min-gap-x-12"
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
  className="w-22 h-7"
/>
    </Link>
  </motion.div>

  {/* Desktop Menu */}
  <motion.div
  className="hidden md:flex flex-grow justify-end md:gap-4 lg:gap-6"
  variants={menuContainer}
  initial="hidden"
  animate="visible"
>
  {menuItems.map((item) => (
    <motion.a
      key={item.href}
      href={item.href}
      className="relative text-xl lg:text-2xl font-normal font-worksans lg:p-2 p-1"
      variants={menuItem}
      whileHover={{ y: -3, transition: { type: 'spring', stiffness: 300 } }}
    >
      {item.label}

      <motion.span
        className="absolute left-0 -bottom-1 w-full h-0.5 bg-white origin-left scale-x-0"
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
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

  {/* Mobile Slide Menu */}
  <AnimatePresence>
    {menuOpen && (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        className="absolute top-0 right-0 w-[305px] min-h-screen bg-white text-[#570202] flex flex-col items-start gap-[57px] md:hidden z-50"
      >
        <button onClick={() => setMenuOpen(false)} className="self-end">
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
            className="bg-white text-[#570202] font-[400] font-worksans text-[33.736px] leading-normal tracking-[-1.012px] hover:bg-[#FFE7E7] p-[9.64px] rounded-[6px] ml-[34px]"
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
