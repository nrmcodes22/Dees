"use client";
import React from "react";
import Image from "next/image";

export default function Marquee({ text }) {
  const REPEAT = 20; // enough to fill widest viewport once
  return (
    <div className="w-full overflow-hidden bg-white text-[#570202] max-w-screen">
      <div className="animate-infinite-scroll whitespace-nowrap flex items-center pb-[clamp(10px,4vw,12px)] pt-[clamp(1.5px,0.6vw,2.5px)]">
        {[0, 1].map((dup) => (
          <React.Fragment key={dup}>
            {Array(REPEAT).fill(text).map((t, i) => (
              <React.Fragment key={i}>
                <span className="font-[300] text-[clamp(18px,1.2vw,28px)]">{t}</span>
                <Image src="/images/star.png" alt="star" width={40} height={40}
                  className="inline-block h-[clamp(18px,2vw,28px)] w-[clamp(18px,2vw,28px)] lg:mx-[18px] md:mx-[13.5px] mx-[11.57px]" />
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
