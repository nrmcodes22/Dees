"use client";
import React , { useState , useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation"
import { motion ,AnimatePresence} from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
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
  className="bg-[#570202]  text-white flex items-center justify-between relative
  px-[clamp(1.25rem,6vw,9rem)]
  py-[clamp(1.25rem,3vw,3rem)]"
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
  className="w-22 h-8 mt-6 md:mt-0"
/>
    </Link>
  </motion.div>

  {/* Desktop Menu */}
  <motion.div
  className="hidden md:flex flex-grow justify-end gap-x-[clamp(16px,2vw,72px)]
"
  variants={menuContainer}
  initial="hidden"
  animate="visible"
>
  {menuItems.map((item) => (
    <motion.a
      key={item.href}
      href={item.href}
      className={`relative ${pathname === item.href 
              ? "text-[#FFE7E7]"      // ACTIVE
              : "text-white"}  text-[clamp(18px,2vw,24px)] leading-normal tracking-[-0.03em] font-[300] font-worksans lg:p-2 p-1`}
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
  <div className="md:hidden flex items-center mt-6 md:mt-0">
  <button onClick={() => setMenuOpen(!menuOpen)}>
    <Image
      src="/images/pumpkin.png"
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

                className=
                 {`  text-[#570202]
                  font-worksans font-[400]
                  text-[1.6rem] sm:text-[1.9rem]
                  leading-normal tracking-tight
                  
                  px-3 sm:px-4 py-2
                  rounded-lg
                  w-[80%] sm:w-[70%]
                  ml-4 sm:ml-6
                  transition-colors
                  ${pathname === item.href 
              ? "bg-[#FFE7E7]"      // ACTIVE
              : "bg-white"}  // INACTIVE
                  
                  `}
                  
                
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
