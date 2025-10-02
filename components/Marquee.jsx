"use client";
import React from "react";
import Image from "next/image";

export default function Marquee({ text }) {
  return (
    <div className="w-full overflow-hidden bg-white text-[#570202] max-w-screen">
      <div className="animate-infinite-scroll whitespace-nowrap pb-3 pt-1 text-lg font-light flex">
        {Array(1000)
          .fill(text)
          .map((t, i) => (
            <div key={i} className="flex items-center mx-4">
              <Image
                src="/images/star.png"
                alt="star"
                width={20}
                height={20}
                className="inline-block"
              />
              <span className="ml-4">{t}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
