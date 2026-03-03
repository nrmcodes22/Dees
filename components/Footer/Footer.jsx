"use client";
import { motion } from "framer-motion";
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
    <footer className="bg-[#570202] text-white py-10 px-2 md:px-12 lg:px-[clamp(48px,2vw,64px)]
  ">
      
      <div 
      className="flex justify-start mb-6  ">
        <Image
          src="/images/avatar.png"
          alt="Profile"
          width={64}
          height={64}
          className="rounded-full w-16 h-16"
        />
      </div>

      {/* Grid Section */}
      <div
        className="flex justify-between  "
        
      >
        {/* Profile Info */}
        <div className="">
          <h3 className="font-semibold text-[clamp(16px,2vw,28px)] tracking-tight">Dollamani Behera</h3>
          <p className="text-[13px] md:text-[14px] lg:text-[clamp(10px,1.5vw,22px)]  mt-6 font-light">Email</p>
          <a
            href="mailto:dollamanibehera857@gmail.com"
            className="text-[clamp(10px,1.5vw,22px)]  font-light hover:underline"
          >
            dollamanibehera857@gmail.com
          </a>
        </div>

        {/* Links Section */}
        <div className="text-[clamp(10px,1.5vw,24px)] font-[300] flex gap-x-[clamp(10px,4vw,40px)]" >
          
          <div className="flex flex-col  space-y-2 md:space-y-6 ">
            <a href="/projects" className="underline underline-offset-6 decoration-1 transition">
            Projects
          </a>
          <a href="/process" className="underline underline-offset-6
          decoration-1  transition">
            Process
          </a>
          <a href="/packages" className="underline underline-offset-6 decoration-1 transition">
            Packages
          </a>
          <a href="/contact" className="underline underline-offset-7
          decoration-1  transition">
            Contact
          </a>
          </div>
          <div className="flex flex-col  space-y-2 md:space-y-6">
            <a href="/privacy" className="underline underline-offset-7
          decoration-1  transition">
            Privacy policy
          </a>
          <a href="/terms" className="underline underline-offset-7
          decoration-1 transition">
            Terms of service
          </a>
          </div>

        </div>

        
        

        {/* CTA Section */}
        <div className="md:flex md:flex-col md:space-y-3 hidden md:max-w-[24vw] ">
          <p className="text-[12px] md:text-[14px] lg:text-[clamp(10px,1.5vw,24px)] tracking-[-5%]  font-light leading-normal">
            Interested in working together or have a question?
          </p>
          
          <a href="/contact" className="w-fit h-fit inline-flex  items-center justify-center gap-2 mt-8 md:mt-0 bg-[#FCDCDC] text-[#570202] px-[clamp(10px,12vw,22px)] py-[clamp(8px,3vw,20px)] rounded-full font-worksans font-[500] text-[12px] md:text-[14px] lg:text-[clamp(14px,1.5vw,24px)] tracking-tight leading-none whitespace-nowrap select-none touch-manipulation">Send me a message!</a>
        </div>
      </div>

      {/* Divider + Bottom Section */}
      <div
        className="border-t   border-white mt-10 pt-6 flex flex-row items-center justify-between">
        <p className="text-[clamp(12px,1.5vw,16px)] text-white flex gap-1 items-center">
          <img src="/images/icons/c.png" className="w-[clamp(15px,2.5vw,22px)] h-[clamp(13px,2vw,20px)] " />DollamaniBehera2025
        </p>

        {/* Socials */}
        <div className="flex gap-[clamp(10px,2vw,20px)] items-center">
          <a
            href="https://instagram.com"
            target="_blank"
            
          >
            <img src="/images/icons/Instagram.png" className="h-[clamp(40px,3vw,50px)] w-[clamp(40px,3vw,50px)]"/>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            
          >
            <img src="/images/icons/Linkedin.png" className="h-[clamp(40px,3vw,50px)] w-[clamp(40px,3vw,50px)]"/>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
           
          >
            <img src="/images/icons/Youtube.png" className="h-[clamp(40px,3vw,50px)] w-[clamp(40px,3vw,50px)]"/>
          </a>
        </div>
      </div>
    </footer>
  );
}
