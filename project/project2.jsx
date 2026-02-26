"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

// ── 9 Category Arrays ─────────────────────────────────────────────────────────

const logoLoop = [
  { title: 'Machlee ROV', year: 2024, image: '/images/logos/random1.png' },
  { title: 'Evolvix IQ', year: 2024, image: '/images/logos/random2.png' },
  { title: 'E-Cell NIT Rourkela', year: 2024, image: '/images/logos/random3.png' },
  { title: 'Ask Haily', year: 2025, image: '/images/logos/random4.png' },
];

const brandIdentity = [
  { title: 'Culture Concept Interior Solution', year: 2025, image: '/images/project/culture.png' },
  { title: 'Vayu Tech', year: 2024, image: '/images/project/evolvix.png' },
  { title: 'Fridge Friend', year: 2025, image: '/images/project/fridgefriend.png' },
  { title: 'Veyora', year: 2024, image: '/images/project/veyora.png' },
];

const visualIdentity = [
  { title: 'Preston', year: 2025, image: '/images/project/preston.png' },
  { title: 'Vastrajna', year: 2025, image: '/images/project/vastra.png' },
  { title: 'Eco Bloom', year: 2023, image: '/images/project/ecobloom.png' },
  { title: 'UVXYZ', year: 2025, image: '/images/project/uvxyz.png' },
];

const wordmarkDesign = [
  { title: 'Z Trady', year: 2025, image: '/images/project/machlee.png' },
  { title: 'Lushkart', year: 2024, image: '/images/project/vastra.png' },
  { title: 'Klairlint', year: 2023, image: '/images/project/klairnet.png' },
  { title: 'Pickle Basket', year: 2025, image: '/images/project/evolvix.png' },
];

const packagingDesign = [
  { title: 'Sweet Hat Dough Co.', year: 2025, image: '/images/project/sweethat.png' },
  { title: 'Furno Express', year: 2025, image: '/images/project/flrno.png' },
  { title: 'Eco Bloom', year: 2023, image: '/images/project/ecobloom.png' },
  { title: 'Vastrajna', year: 2025, image: '/images/project/vastra.png' },
];

const motionDesign = [
  { title: 'UVXYZ Motion', year: 2025, image: '/images/project/uvxyz.png' },
  { title: 'Eco Bloom Reel', year: 2023, image: '/images/project/ecobloom.png' },
  { title: 'Veyora Intro', year: 2024, image: '/images/project/veyora.png' },
  { title: 'Culture Concept Film', year: 2025, image: '/images/project/culture.png' },
];

const printDesign = [
  { title: 'House of Petals', year: 2024, image: '/images/project/housepetals.png' },
  { title: 'Coming Soon', year: 2024, image: '/images/project/comingsoon.png' },
  { title: 'Sweet Hat Dough Co.', year: 2025, image: '/images/project/sweethat.png' },
  { title: 'Lushkart', year: 2024, image: '/images/project/vastra.png' },
];

const socialMedia = [
  { title: 'Pickle Basket', year: 2025, image: '/images/project/evolvix.png' },
  { title: 'Ask Haily', year: 2025, image: '/images/project/askhally.png' },
  { title: 'Klairlint', year: 2023, image: '/images/project/klairnet.png' },
  { title: 'Z Trady', year: 2025, image: '/images/project/machlee.png' },
];

const uiuxDesign = [
  { title: 'Evolvix IQ App', year: 2024, image: '/images/project/evolvix.png' },
  { title: 'Machlee Dashboard', year: 2024, image: '/images/project/machlee.png' },
  { title: 'Preston Web', year: 2025, image: '/images/project/preston.png' },
  { title: 'Vayu Tech Platform', year: 2024, image: '/images/project/evolvix.png' },
];

// ── Category registry ─────────────────────────────────────────────────────────

const categories = [
  { name: 'Logos', items: logoLoop, loop: true },
  { name: 'Brand Identity', items: brandIdentity, loop: false },
  { name: 'Visual Identity', items: visualIdentity, loop: false },
  { name: 'Wordmark Design', items: wordmarkDesign, loop: false },
  { name: 'Packaging Design', items: packagingDesign, loop: false },
  { name: 'Motion Design', items: motionDesign, loop: false },
  { name: 'Print Design', items: printDesign, loop: false },
  { name: 'Social Media', items: socialMedia, loop: false },
  { name: 'UI/UX Design', items: uiuxDesign, loop: false },
];

// ── Looping Card (first card only) ───────────────────────────────────────────

function LoopingCard({ category }) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const items = category.items;
  const touchTimer = useRef(null);
  const isTouchHold = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % items.length);
    }, 800);
    return () => clearInterval(interval);
  }, [items.length]);

  const handleTouchStart = useCallback(() => {
    touchTimer.current = setTimeout(() => {
      isTouchHold.current = true;
      setHovered(true);
    }, 200);
  }, []);

  const handleTouchEnd = useCallback(() => {
    clearTimeout(touchTimer.current);
    if (isTouchHold.current) {
      isTouchHold.current = false;
      setHovered(false);
    }
  }, []);

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      style={{ aspectRatio: '1/1' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onClick={() => router.push('/logos')}
    >
      {/* All images stacked — only currentIdx is visible, others stay rendered underneath */}
      {items.map((item, i) => (
        <img
          key={i}
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: i === currentIdx ? 1 : 0,
            zIndex: i === currentIdx ? 1 : 0,
          }}
        />
      ))}

      {/* Hover: black overlay + centered text */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300"
        style={{ background: 'rgba(0,0,0,0.72)', opacity: hovered ? 1 : 0, zIndex: 2 }}
      >
        <p
          className="text-white font-bold uppercase tracking-widest text-center px-4"
          style={{ fontSize: 'clamp(20px, 3vw, 25px)', letterSpacing: '0.18em' }}
        >
          {category.name}
        </p>
        <p
          className="text-gray-400 mt-2 tracking-wider uppercase"
          style={{ fontSize: 'clamp(9px, 1.5vw, 15px)' }}
        >
          {category.items.length} projects
        </p>
      </div>
    </div>
  );
}

// ── Regular Category Card ─────────────────────────────────────────────────────

function CategoryCard({ category, onClick }) {
  const [hovered, setHovered] = useState(false);
  const bgImage = category.items[0].image;
  const touchTimer = useRef(null);
  const isTouchHold = useRef(false);

  const handleTouchStart = useCallback(() => {
    touchTimer.current = setTimeout(() => {
      isTouchHold.current = true;
      setHovered(true);
    }, 200);
  }, []);

  const handleTouchEnd = useCallback(() => {
    clearTimeout(touchTimer.current);
    if (isTouchHold.current) {
      isTouchHold.current = false;
      setHovered(false);
    }
  }, []);

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      style={{ aspectRatio: '1/1' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onClick={() => onClick(category)}
    >
      {/* Background image: subtle zoom on hover */}
      <img
        src={bgImage}
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-500"
        style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
      />

      {/* Hover: black overlay + centered text */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300"
        style={{ background: 'rgba(0,0,0,0.72)', opacity: hovered ? 1 : 0 }}
      >
        <p
          className="text-white font-bold uppercase tracking-widest text-center px-4"
          style={{ fontSize: 'clamp(20px, 3vw, 25px)', letterSpacing: '0.18em' }}
        >
          {category.name}
        </p>
        <p
          className="text-gray-400 mt-2 tracking-wider uppercase"
          style={{ fontSize: 'clamp(9px, 1.5vw, 15px)' }}
        >
          {category.items.length} projects
        </p>
      </div>
    </div>
  );
}

// ── Modal ─────────────────────────────────────────────────────────────────────

function ProjectModal({ category, onClose }) {
  if (!category) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.88)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111] p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2
            className="text-white font-semibold uppercase tracking-widest"
            style={{ fontSize: 'clamp(13px, 1.4vw, 18px)' }}
          >
            {category.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-2xl leading-none"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {category.items.map((item, i) => (
            <div key={i} className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div
                className="absolute inset-0 flex flex-col items-center justify-end p-3"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }}
              >
                <p className="text-white text-xs font-medium uppercase tracking-wider text-center">
                  {item.title}
                </p>
                <p className="text-gray-400 text-[10px] tracking-wider">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function Project2() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <section className=" py-12 md:py-24 px-[clamp(20px,4vw,120px)] bg-[#0f0f0f]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const isLast = i === categories.length - 1;
            const card = cat.loop ? (
              <LoopingCard key={i} category={cat} onClick={setActiveCategory} />
            ) : (
              <CategoryCard key={i} category={cat} onClick={setActiveCategory} />
            );
            // On tablet only: hide the 9th card unless showAll
            if (isLast) {
              return (
                <div key={i} className={showAll ? 'block' : 'block md:hidden lg:block'}>
                  {card}
                </div>
              );
            }
            return card;
          })}
        </div>

        {/* See More button — tablet only (md but not lg) */}
        <div className="hidden md:flex lg:hidden justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-10 py-3 border border-[#444] text-[#aaa] text-sm tracking-widest uppercase transition-all duration-300 hover:border-white hover:text-white"
          >
            {showAll ? 'See Less' : 'See More'}
          </button>
        </div>
      </section>

      <ProjectModal category={activeCategory} onClose={() => setActiveCategory(null)} />
    </>
  );
}