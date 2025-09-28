"use client";
import React from "react";

export default function Marquee({ text }) {
  return (
    <div className="w-full overflow-hidden bg-white text-[#570202] max-w-screen">
      <div className="animate-infinite-scroll whitespace-nowrap py-2 text-lg font-medium flex">
        {Array(100).fill(text).map((t, i) => (
          <span key={i} className="mx-8">{t}</span>
        ))}
      </div>
    </div>
  );
}