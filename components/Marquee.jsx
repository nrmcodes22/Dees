"use client";
import React from "react";
import Image from "next/image";

export default function Marquee({ text }) {
  return (
    <div className="w-full overflow-hidden bg-white text-[#570202] max-w-screen ">
      <div className="animate-infinite-scroll whitespace-nowrap  lg:pb-[14px]  md:pb-[10px]  flex items-center pb-[8.13px] ">
  {Array(1000)
    .fill(text)
    .map((t, i) => (
      <React.Fragment key={i}>
        <span className="font-[300] text-[17.993px] leading-[32.13px] md:text-[22px] md:leading-[37.5px] lg:text-[28px] lg:leading-[50px]  ">{t}</span>
        <Image
          src="/images/star.png"
          alt="star"
          width={40}
          height={40}
          className="inline-block lg:w-[26px] lg:h-[26px] md:w-[19.5px] md:h-[19.5px] w-[16.707px] h-[16.707px] lg:mx-[18px] md:mx-[13.5px] mx-[11.57px]"
        />
      </React.Fragment>
    ))}
</div>
    </div>
  );
}
