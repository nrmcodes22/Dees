"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

// ── Logo Loop (first card) ──────────────────────────────────────────────────

const logoLoop = [
  { title: 'Machlee ROV', year: 2024, image: '/images/logos/random1.png' },
  { title: 'Evolvix IQ', year: 2024, image: '/images/logos/random2.png' },
  { title: 'E-Cell NIT Rourkela', year: 2024, image: '/images/logos/random3.png' },
  { title: 'Ask Haily', year: 2025, image: '/images/logos/random4.png' },
];

// ── 8 Company Projects ──────────────────────────────────────────────────────

export const companies = [
  {
    name: 'Evolvix IQ',
    slug: 'evolvix-iq',
    industry: 'Technology',
    description: 'Evolvix IQ is an AI-powered analytics platform built to transform raw data into actionable business intelligence. The brand needed a visual identity that felt cutting-edge yet approachable, blending precision with innovation.',
    image: '/images/project/evolvix.png',
    gallery: [
      '/images/project/evolvix.png',
      '/images/project/machlee.png',
      '/images/project/preston.png',
      '/images/project/uvxyz.png',
    ],
  },
  {
    name: 'Culture Concept',
    slug: 'culture-concept',
    industry: 'Interior Design',
    description: 'Culture Concept Interior Solutions transforms spaces into experiences. Their brand identity needed to reflect the harmony between modern aesthetics and cultural heritage that defines their design philosophy.',
    image: '/images/project/culture.png',
    gallery: [
      '/images/project/culture.png',
      '/images/project/veyora.png',
      '/images/project/ecobloom.png',
      '/images/project/housepetals.png',
    ],
  },
  {
    name: 'Veyora',
    slug: 'veyora',
    industry: 'Fashion & Lifestyle',
    description: 'Veyora is a contemporary fashion label redefining luxury through sustainability. The brand demanded a visual language that balanced elegance with environmental consciousness.',
    image: '/images/project/veyora.png',
    gallery: [
      '/images/project/veyora.png',
      '/images/project/vastra.png',
      '/images/project/lushkart.png',
      '/images/project/klairnet.png',
    ],
  },
  {
    name: 'Sweet Hat Dough Co.',
    slug: 'sweet-hat-dough',
    industry: 'Food & Beverage',
    description: 'Sweet Hat Dough Co. is an artisanal bakery brand with a playful spirit. From packaging to social media, every touchpoint needed to feel handcrafted, warm, and irresistibly inviting.',
    image: '/images/project/sweethat.png',
    gallery: [
      '/images/project/sweethat.png',
      '/images/project/flrno.png',
      '/images/project/fridgefriend.png',
      '/images/project/comingsoon.png',
    ],
  },
  {
    name: 'Preston',
    slug: 'preston',
    industry: 'Real Estate',
    description: 'Preston is a premium real estate development firm. Their identity needed to communicate trust, sophistication, and the promise of exceptional living spaces.',
    image: '/images/project/preston.png',
    gallery: [
      '/images/project/preston.png',
      '/images/project/culture.png',
      '/images/project/machlee.png',
      '/images/project/evolvix.png',
    ],
  },
  {
    name: 'Eco Bloom',
    slug: 'eco-bloom',
    industry: 'Sustainability',
    description: 'Eco Bloom is an environmental initiative focused on urban greening and sustainable living. The brand identity captures growth, nature, and the optimism of a greener future.',
    image: '/images/project/ecobloom.png',
    gallery: [
      '/images/project/ecobloom.png',
      '/images/project/housepetals.png',
      '/images/project/vastra.png',
      '/images/project/uvxyz.png',
    ],
  },
  {
    name: 'Fridge Friend',
    slug: 'fridge-friend',
    industry: 'Consumer Tech',
    description: 'Fridge Friend is a smart kitchen companion app that reduces food waste. The brand needed to feel approachable and tech-savvy, making sustainability feel effortless and fun.',
    image: '/images/project/fridgefriend.png',
    gallery: [
      '/images/project/fridgefriend.png',
      '/images/project/askhally.png',
      '/images/project/ztrady.png',
      '/images/project/qubesolve.png',
    ],
  },
  {
    name: 'Machlee ROV',
    slug: 'machlee-rov',
    industry: 'Marine Engineering',
    description: 'Machlee ROV develops underwater remotely operated vehicles for deep-sea exploration. The brand identity needed to convey precision engineering, adventure, and the mystery of the deep ocean.',
    image: '/images/project/machlee.png',
    gallery: [
      '/images/project/machlee.png',
      '/images/project/evolvix.png',
      '/images/project/flrno.png',
      '/images/project/sweethat.png',
    ],
  },
];

// ── Combined entries (logo loop first, then companies) ──────────────────────

const entries = [
  { name: 'Logos', items: logoLoop, loop: true },
  ...companies.map((c) => ({ ...c, loop: false })),
];

// ── Looping Card (first card only) ───────────────────────────────────────────

function LoopingCard({ category }) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const items = category.items;
  const touchTimer = useRef(null);
  const isTouchHold = useRef(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(hover: none)').matches);
  }, []);

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
      onMouseEnter={() => { if (!isTouchDevice) setHovered(true); }}
      onMouseLeave={() => { if (!isTouchDevice) setHovered(false); }}
      onTouchStart={() => { if (isTouchDevice) handleTouchStart(); }}
      onTouchEnd={() => { if (isTouchDevice) handleTouchEnd(); }}
      onTouchCancel={() => { if (isTouchDevice) handleTouchEnd(); }}
      onClick={() => router.push('/logos')}
    >
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

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300"
        style={{ background: 'rgba(0,0,0,0.72)', opacity: hovered ? 1 : 0, zIndex: 2 }}
      >
        <p
          className="text-white font-bold uppercase tracking-widest text-center px-4"
          style={{ fontSize: 'clamp(20px, 3vw, 25px)', letterSpacing: '0.10em' }}
        >
          {category.name}
        </p>
        <p
          className="text-gray-400 mt-2 tracking-wider uppercase"
          style={{ fontSize: 'clamp(9px, 1.5vw, 15px)' }}
        >
          Logo Design
        </p>
      </div>
    </div>
  );
}

// ── Company Card ─────────────────────────────────────────────────────────────

function CompanyCard({ company }) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const touchTimer = useRef(null);
  const isTouchHold = useRef(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(hover: none)').matches);
  }, []);

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
      onMouseEnter={() => { if (!isTouchDevice) setHovered(true); }}
      onMouseLeave={() => { if (!isTouchDevice) setHovered(false); }}
      onTouchStart={() => { if (isTouchDevice) handleTouchStart(); }}
      onTouchEnd={() => { if (isTouchDevice) handleTouchEnd(); }}
      onTouchCancel={() => { if (isTouchDevice) handleTouchEnd(); }}
      onClick={() => router.push(`/project/${company.slug}`)}
    >
      {/* Background image: subtle zoom on hover */}
      <img
        src={company.image}
        alt={company.name}
        className="w-full h-full object-cover transition-transform duration-500"
        style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
      />

      {/* Hover: black overlay + centered text */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300"
        style={{ background: 'rgba(0,0,0,0.72)', opacity: hovered ? 1 : 0 }}
      >
        <p
          className="text-white font-bold uppercase tracking-widest leading-5 text-center px-4"
          style={{ fontSize: 'clamp(20px, 3vw, 25px)' }}
        >
          {company.name}
        </p>
        <p
          className="text-gray-400 mt-2 tracking-widest uppercase"
          style={{ fontSize: 'clamp(9px, 1.5vw, 15px)' }}
        >
          {company.industry}
        </p>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function Project2() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-12 md:py-24 px-[clamp(20px,4vw,120px)] bg-[#0f0f0f]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {entries.map((entry, i) => {
          const isLast = i === entries.length - 1;
          const card = entry.loop ? (
            <LoopingCard key={i} category={entry} />
          ) : (
            <CompanyCard key={i} company={entry} />
          );
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

      {/* See More button — tablet only */}
      <div className="hidden md:flex lg:hidden justify-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-10 py-3 border border-[#444] text-[#aaa] text-sm tracking-widest uppercase transition-all duration-300 hover:border-white hover:text-white"
        >
          {showAll ? 'See Less' : 'See More'}
        </button>
      </div>
    </section>
  );
}