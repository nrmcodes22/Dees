"use client";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import {motion} from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { y: 30, opacity: 0, filter: "blur(6px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
export default function Footer() {
  return (
    <footer className="bg-[#570202] text-white py-10 px-6 md:px-12 lg:px-20">
       <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Profile Section */}
        <motion.div variants={item}>
          <div className="flex items-center mb-4">
            <Image
              src="/images/avatar.png"
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full w-16 h-16"
            />
          </div>
          <h3 className="font-semibold">Dollamani Behera</h3>
          <p className="text-sm mt-10 font-light">Email:</p>
          <a
            href="mailto:dollamanibehera857@gmail.com"
            className="text-sm font-light hover:underline"
          >
            dollamanibehera857@gmail.com
          </a>
        </motion.div>

        {/* Links Section */}
        <motion.div
          className="flex flex-col space-y-2"
          variants={item}
        >
          <a href="#projects" className="underline underline-offset-4 hover:text-gray-300 transition">
            Projects
          </a>
          <a href="#process" className="underline underline-offset-4 hover:text-gray-300 transition">
            Process
          </a>
          <a href="#packages" className="underline underline-offset-4 hover:text-gray-300 transition">
            Packages
          </a>
          <a href="#contact" className="underline underline-offset-4 hover:text-gray-300 transition">
            Contact
          </a>
        </motion.div>

        {/* Legal Section */}
        <motion.div
          className="flex flex-col space-y-2"
          variants={item}
        >
          <a href="#privacy" className="underline underline-offset-4 hover:text-gray-300 transition">
            Privacy policy
          </a>
          <a href="#terms" className="underline underline-offset-4 hover:text-gray-300 transition">
            Terms of service
          </a>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="flex flex-col space-y-3"
          variants={item}
        >
          <p className="text-md">
            Interested in working together or have a question?
          </p>
          <a
            href="mailto:dollamanibehera857@gmail.com"
            className="bg-white text-[#570202] px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
          >
            Send me a message!
          </a>
        </motion.div>
      </motion.div>

      {/* Divider + Bottom Section */}
      <motion.div
        className="border-t border-white mt-10 pt-6 flex flex-col md:flex-row items-center justify-between"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.p
          className="text-xs text-gray-300"
          variants={item}
        >
          © DollamaniBehera2025
        </motion.p>

        {/* Socials */}
        <motion.div
          className="flex gap-4 mt-4 md:mt-0"
          variants={item}
        >
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaInstagram className="text-lg hover:text-gray-300" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin className="text-lg hover:text-gray-300" />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub className="text-lg hover:text-gray-300" />
          </motion.a>
        </motion.div>
        </motion.div>
    </footer>
  );
}
