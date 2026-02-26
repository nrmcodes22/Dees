"use client"
import React, { useEffect, useRef, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { companies } from '@/project/project2';

export default function ProjectDetail() {
    const router = useRouter();
    const { slug } = useParams();
    const company = companies.find((c) => c.slug === slug);

    const [visible, setVisible] = useState(new Set());
    const refs = useRef([]);

    useEffect(() => {
        if (!company) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = parseInt(entry.target.dataset.idx);
                        setVisible((prev) => new Set([...prev, idx]));
                    }
                });
            },
            { threshold: 0.15 }
        );
        refs.current.forEach((ref) => { if (ref) observer.observe(ref); });
        return () => observer.disconnect();
    }, [company]);

    if (!company) {
        return (
            <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
                <div className="text-center">
                    <p className="text-white text-2xl font-bold uppercase tracking-widest mb-4">Project not found</p>
                    <button
                        onClick={() => router.push('/project')}
                        className="text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-sm"
                    >
                        ← Back to Projects
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0f0f0f]">
            {/* Hero Image */}
            <div className="w-full" style={{ aspectRatio: '16/9', maxHeight: '75vh' }}>
                <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Title + Description (two-column like reference) */}
            <div className="px-6 md:px-16 lg:px-32 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {/* Left — Title */}
                    <div>
                        <p
                            className="text-gray-500 uppercase tracking-[0.3em] mb-4"
                            style={{ fontSize: 'clamp(10px, 1.2vw, 13px)' }}
                        >
                            {company.industry}
                        </p>
                        <h1
                            className="text-white font-bold uppercase tracking-widest leading-tight"
                            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
                        >
                            {company.name}
                        </h1>
                    </div>

                    {/* Right — Description */}
                    <div className="flex items-end">
                        <p
                            className="text-gray-400 leading-relaxed"
                            style={{ fontSize: 'clamp(14px, 1.4vw, 18px)' }}
                        >
                            {company.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className="px-6 md:px-16 lg:px-32 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {company.gallery.map((img, i) => (
                        <div
                            key={i}
                            ref={(el) => (refs.current[i] = el)}
                            data-idx={i}
                            className={`overflow-hidden ${i === 0 ? 'md:col-span-2' : ''}`}
                            style={{
                                aspectRatio: i === 0 ? '16/9' : '1/1',
                                opacity: visible.has(i) ? 1 : 0,
                                transform: visible.has(i) ? 'translateY(0)' : 'translateY(30px)',
                                transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                transitionDelay: `${i * 100}ms`,
                            }}
                        >
                            <img
                                src={img}
                                alt={`${company.name} — ${i + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Back button */}
            <div className="px-6 md:px-16 lg:px-32 pb-20">
                <button
                    onClick={() => router.push('/project')}
                    className="text-gray-500 hover:text-white transition-colors uppercase tracking-[0.25em] text-sm flex items-center gap-3"
                >
                    <span className="text-lg">←</span> Back to Projects
                </button>
            </div>
        </div>
    );
}
