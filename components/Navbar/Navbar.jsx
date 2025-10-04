"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
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
    { label: "Projects", href: "#projects" },
    { label: "Logos", href: "#logos" },
    { label: "Process", href: "/process" },
    { label: "Packages", href: "/package" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-[#570202] text-white px-20 py-8 flex items-center justify-between shadow-md"
    >
      {/* Logo with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="flex items-center"
      >
        <Image src="/images/Logo.png" alt="Dees Logo" width={100} height={100} />
      </motion.div>

      {/* Desktop Menu */}
      <motion.div
        className="hidden md:flex space-x-8"
        variants={menuContainer}
        initial="hidden"
        animate="visible"
      >
        {menuItems.map((item) => (
          <motion.a
            key={item.href}
            href={item.href}
            className="relative text-xl lg:text-2xl font-light"
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
    </nav>
  );
}
