"use client"
import React, { useState } from 'react';

const portfolioData = {
  'Visual identity': [
    { id: 1, title: 'Preston', category: 'Visual Identity', year: '2025', image: "/images/project/preston.png" },
    { id: 2, title: 'Vastrajana', category: 'Visual Identity', year: '2025', image: "/images/project/vastra.png" },
    { id: 6, title: 'Eco Bloom', category: 'Visual Identity', year: '2023', image: "/images/project/ecobloom.png" },
    { id: 7, title: 'UVXYZ', category: 'Visual Identity', year: '2025', image: "/images/project/uvxyz.png" },
    { id: 10, title: 'Veyora', category: 'Visual Identity', year: '2024', image: "/images/project/veyora.png" },
    { id: 13, title: 'Furno Express', category: 'Visual Identity', year: '2025', image: "/images/project/flrno.png" },
  ],
  'Brand identity': [
    { id: 8, title: 'Culture Concept Interior Solution', category: 'Brand Identity', year: '2025', image: "/images/project/culture.png" },
    { id: 12, title: 'Vayu Tech', category: 'Brand Identity', year: '2024', image: "/images/project/evolvix.png" },
    { id: 19, title: 'Fridge Friend', category: 'Brand Identity', year: '2025', image: "/images/project/fridgefriend.png" },
  ],
  'Logo design': [
    { id: 3, title: 'MachLee ROV', category: 'Logo Design', year: '2024', image: "/images/project/machlee.png" },
    { id: 4, title: 'Evolvix IQ', category: 'Logo Design', year: '2024', image: "/images/project/evolvix.png" },
    { id: 5, title: 'E-Cell NIT Rourkela', category: 'Logo Design', year: '2024', image: "/images/project/ecell.png" },
    { id: 9, title: 'Ask Haily', category: 'Logo Design', year: '2025', image: "/images/project/askhally.png" },
    { id: 11, title: 'Z Trady', category: 'Logo Design', year: '2025', image: "/images/project/machlee.png" },
    { id: 14, title: 'Lushkart', category: 'Logo Design', year: '2024', image: "/images/project/vastra.png" },
  ],
};

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="mb-8">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="min-w-full px-1">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="mt-4 mb-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">{item.category}</span>
                  <span className="text-gray-400">{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${index === currentIndex
                ? 'bg-red-900 scale-125'
                : 'bg-gray-300 hover:scale-110'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Project3() {
  return (
    <div className="md:hidden min-h-screen bg-white">
      <div className="px-4 py-8">
        {/* Header */}
        <h1 className="text-xl font-[500] text-gray-900 mb-8">Projects</h1>

        {/* Visual Identity Section */}
        <div className="mb-10">
          <div
            className="flex items-center gap-4 lg:mb-[70px] md:mb-[37px] mb-[29px]"

          >
            <h2
              className="text-[clamp(16px,2.3vw,28px)] font-[500] text-black whitespace-nowrap"

            >
              Visual identity
            </h2>
            <div
              className="flex-1 h-px bg-[#989898]"

            />
          </div>
          <Carousel items={portfolioData['Visual identity']} />
        </div>

        {/* Brand Identity Section */}
        <div className="mb-10">
          <div
            className="flex items-center gap-4 lg:mb-[70px] md:mb-[37px] mb-[29px]"

          >
            <h2
              className="text-[clamp(16px,2.3vw,28px)] font-[500] text-black whitespace-nowrap"

            >
              Brand identity
            </h2>
            <div
              className="flex-1 h-px bg-[#989898]"

            />
          </div>
          <Carousel items={portfolioData['Brand identity']} />
        </div>

        {/* Logo Design Section */}
        <div className="mb-10">
          <div
            className="flex items-center gap-4 lg:mb-[70px] md:mb-[37px] mb-[29px]"

          >
            <h2
              className="text-[clamp(16px,2.3vw,28px)] font-[500] text-black whitespace-nowrap"

            >
              Logo Design
            </h2>
            <div
              className="flex-1 h-px bg-[#989898]"

            />
          </div>
          <Carousel items={portfolioData['Logo design']} />
        </div>
      </div>
    </div>
  );
}