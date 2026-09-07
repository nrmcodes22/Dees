"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { companies } from "@/project/projectdata";

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

        refs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [company]);

    if (!company) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <p className="text-black text-2xl font-bold uppercase tracking-widest mb-4">
                        Project not found
                    </p>
                </div>
            </div>
        );
    }

    // Gallery entries can be plain strings or
    // { src, caption, quote, layout } objects.
    const fadeStyle = (i) => ({
        opacity: visible.has(i) ? 1 : 0,
        transform: visible.has(i)
            ? "translateY(0)"
            : "translateY(30px)",
        transition:
            "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionDelay: `${i * 100}ms`,
    });

    return (
        <div>
            <div className="hidden md:block min-h-screen bg-white">

            {/* =====================================================
                HERO IMAGE
            ====================================================== */}
            <div
                className="w-full"
                style={{
                    aspectRatio: "16/9",
                    maxHeight: "75vh",
                }}
            >
                <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-full object-cover"
                />
            </div>


            {/* =====================================================
                META ROW
            ====================================================== */}
            <div className="px-6 md:px-12 lg:px-16 pt-14 pb-8 border-b border-black/10">
                <div className="hidden md:flex flex-row justify-between items-center">

                    <div>
                        <p className="text-black tracking-tighter text-sm md:text-2xl lg:text-3xl font-semibold">
                            {company.name}
                        </p>
                    </div>

                    {company.year && (
                        <div>
                            <p className="text-black tracking-tight text-sm md:text-xl lg:text-2xl font-light">
                                Year: {company.year}
                            </p>
                        </div>
                    )}

                    {company.industry && (
                        <div>
                            <p className="text-black tracking-tighter text-sm md:text-xl lg:text-2xl font-light">
                                Industry: {company.industry}
                            </p>
                        </div>
                    )}

                    {company.service && (
                        <div>
                            <p className="text-black tracking-tight text-sm md:text-xl lg:text-2xl font-light">
                                Service: {company.service}
                            </p>
                        </div>
                    )}

                </div>
            </div>


            {/* =====================================================
                TITLE + INTRO DESCRIPTION
            ====================================================== */}
            <div className="px-6 md:px-12 lg:px-16 py-8 mb-8">

                <div className="flex justify-between gap-12 lg:gap-20 items-start w-full">

                    {/* First column */}
                    <div className="flex flex-col gap-4 justify-start">
                        {(Array.isArray(company.description)
                            ? company.description
                            : [company.description]
                        ).map(
                            (para, i) =>
                                para && (
                                    <p
                                        key={i}
                                        className="text-gray-500 tracking-tight font-light leading-[1.3]"
                                        style={{
                                            fontSize:
                                                "clamp(14px, 1.5vw, 20px)",
                                        }}
                                    >
                                        {para}
                                    </p>
                                )
                        )}
                    </div>


                    {/* Second column */}
                    <div>
                        <div className="flex flex-col justify-start">
                            {(Array.isArray(company.description2)
                                ? company.description2
                                : [company.description2]
                            ).map(
                                (para, i) =>
                                    para && (
                                        <p
                                            key={i}
                                            className="text-gray-500 tracking-tight font-light leading-[1.3]"
                                            style={{
                                                fontSize:
                                                    "clamp(14px, 1.5vw, 20px)",
                                            }}
                                        >
                                            {para}
                                        </p>
                                    )
                            )}
                        </div>
                    </div>

                </div>
            </div>


            {/* =====================================================
                IMAGE STASH 1 — 2 IMAGES
            ====================================================== */}
            <div className="px-6 md:px-12 lg:px-16 mb-12">

                <div className="grid grid-cols-2 gap-6 md:gap-8">

                    {(company.imgstash1 || []).map((item, i) => (
                        <img
                            key={i}
                            src={item.src}
                            alt={`${company.name} visual ${i + 1}`}
                            className="w-full h-auto object-contain"
                        />
                    ))}

                </div>

            </div>


            {/* =====================================================
                TEXT STASH 1
            ====================================================== */}
            <div className="px-6 md:px-12 lg:px-16 mb-16">

                <div className="flex gap-6 md:gap-8">

                    {/* Left column */}
                    <div className="w-5/12 mt-14">
                        {(company.textstash1b || []).map((line, i) => (
                            <p
                                key={i}
                                className="text-gray-700 font-semibold tracking-tight leading-snug"
                                style={{
                                    fontSize:
                                        "clamp(18px, 2.5vw, 24px)",
                                }}
                            >
                                {line}
                            </p>
                        ))}
                    </div>


                    {/* Right column */}
                    <div className="w-7/12">
                        {(company.textstash1 || []).map((para, i) => (
                            <p
                                key={i}
                                className="text-gray-500 font-light leading-[1.5] last:mb-0"
                                style={{
                                    fontSize:
                                        "clamp(14px, 1.3vw, 17px)",
                                }}
                            >
                                {para}
                            </p>
                        ))}
                    </div>

                </div>
            </div>


            {/* =====================================================
                IMAGE STASH 2 + 3 — 2 / 1
            ====================================================== */}
            <div className="px-6 md:px-12 lg:px-16 flex flex-col gap-6 md:gap-8 mb-12">

                {/* 2 images */}
                {company.imgstash2?.length > 0 && (
                    <div className="grid grid-cols-2 gap-6 md:gap-8">

                        {company.imgstash2.slice(0, 2).map((item, i) => (
                            <img
                                key={i}
                                src={item.src}
                                alt={`${company.name} visual ${i + 1}`}
                                className="w-full h-auto object-contain"
                            />
                        ))}

                    </div>
                )}


                {/* 1 full-width image */}
                {company.imgstash3?.[0] && (
                    <img
                        src={company.imgstash3[0].src}
                        alt={`${company.name} visual`}
                        className="w-full h-auto object-contain"
                    />
                )}

            </div>


            {/* =====================================================
                TEXT STASH 2
            ====================================================== */}
            <div className="px-6 md:px-12 lg:px-16 mb-16">

                <div className="flex gap-6 md:gap-8">

                    {/* Left column */}
                    <div className="w-5/12 mt-14">
                        {(company.textstash2b || []).map((line, i) => (
                            <p
                                key={i}
                                className="text-gray-700 font-semibold tracking-tight leading-snug"
                                style={{
                                    fontSize:
                                        "clamp(18px, 2.5vw, 24px)",
                                }}
                            >
                                {line}
                            </p>
                        ))}
                    </div>


                    {/* Right column */}
                    <div className="w-7/12">
                        {(company.textstash2 || []).map((para, i) => (
                            <p
                                key={i}
                                className="text-gray-500 font-light leading-[1.5] last:mb-0"
                                style={{
                                    fontSize:
                                        "clamp(14px, 1.3vw, 17px)",
                                }}
                            >
                                {para}
                            </p>
                        ))}
                    </div>

                </div>
            </div>


            {/* =====================================================
                IMAGE STASH 4 / 5 / 6 — 1 / 2 / 1
            ====================================================== */}
            <div className="px-6 md:px-12 lg:px-16 flex flex-col gap-6 md:gap-8 mb-12">

                {/* 1 image — palette */}
                {company.imgstash4?.[0] && (
                    <img
                        src={company.imgstash4[0].src}
                        alt={`${company.name} color palette`}
                        className="w-full h-auto object-contain"
                    />
                )}


                {/* 2 images — patterns */}
                {company.imgstash5?.length > 0 && (
                    <div className="grid grid-cols-2 gap-6 md:gap-8">

                        {company.imgstash5.slice(0, 2).map((item, i) => (
                            <img
                                key={i}
                                src={item.src}
                                alt={`${company.name} pattern ${i + 1}`}
                                className="w-full h-auto object-contain"
                            />
                        ))}

                    </div>
                )}


                {/* 1 image — wide pattern */}
                {company.imgstash6?.[0] && (
                    <img
                        src={company.imgstash6[0].src}
                        alt={`${company.name} wide pattern`}
                        className="w-full h-auto object-contain"
                    />
                )}

            </div>


            {/* =====================================================
                TEXT STASH 3
            ====================================================== */}
            <div className="px-6 md:px-12 lg:px-16 mb-16">

                <div className="flex gap-6 md:gap-8">

                    {/* Left column */}
                    <div className="w-5/12 mt-14">
                        {(company.textstash3b || []).map((line, i) => (
                            <p
                                key={i}
                                className="text-gray-700 font-semibold tracking-tight leading-snug"
                                style={{
                                    fontSize:
                                        "clamp(18px, 2.5vw, 24px)",
                                }}
                            >
                                {line}
                            </p>
                        ))}
                    </div>


                    {/* Right column */}
                    <div className="w-7/12">
                        {(company.textstash3 || []).map((para, i) => (
                            <p
                                key={i}
                                className="text-gray-500 font-light leading-[1.5] last:mb-0"
                                style={{
                                    fontSize:
                                        "clamp(14px, 1.3vw, 17px)",
                                }}
                            >
                                {para}
                            </p>
                        ))}
                    </div>

                </div>
            </div>


            {/* =====================================================
                IMAGE STASH 7 / 8 / 9 — 2 / 1 / 2
            ====================================================== */}
            <div className="px-6 md:px-12 lg:px-16 flex flex-col gap-6 md:gap-8 mb-12">

                {/* 2 images */}
                {company.imgstash7?.length > 0 && (
                    <div className="grid grid-cols-2 gap-6 md:gap-8">

                        {company.imgstash7.slice(0, 2).map((item, i) => (
                            <img
                                key={i}
                                src={item.src}
                                alt={`${company.name} image ${i + 1}`}
                                className="w-full h-auto object-contain"
                            />
                        ))}

                    </div>
                )}


                {/* 1 image — full width */}
                {company.imgstash8?.[0] && (
                    <img
                        src={company.imgstash8[0].src}
                        alt={`${company.name} featured image`}
                        className="w-full h-auto object-contain"
                    />
                )}


                {/* 2 images */}
                {company.imgstash9?.length > 0 && (
                    <div className="grid grid-cols-2 gap-6 md:gap-8">

                        {company.imgstash9.slice(0, 2).map((item, i) => (
                            <img
                                key={i}
                                src={item.src}
                                alt={`${company.name} image ${i + 1}`}
                                className="w-full h-auto object-contain"
                            />
                        ))}

                    </div>
                )}

            </div>


            {/* =====================================================
                TEXT STASH 4
            ====================================================== */}
            <div className="px-6 md:px-12 lg:px-16 mb-16">

                <div className="flex gap-6 md:gap-8">

                    {/* Left column */}
                    <div className="w-5/12 mt-14">
                        {(company.textstash4b || []).map((line, i) => (
                            <p
                                key={i}
                                className="text-gray-700 font-semibold tracking-tight leading-snug"
                                style={{
                                    fontSize:
                                        "clamp(18px, 2.5vw, 24px)",
                                }}
                            >
                                {line}
                            </p>
                        ))}
                    </div>


                    {/* Right column */}
                    <div className="w-7/12">
                        {(company.textstash4 || []).map((para, i) => (
                            <p
                                key={i}
                                className="text-gray-500 font-light leading-[1.5] last:mb-0"
                                style={{
                                    fontSize:
                                        "clamp(14px, 1.3vw, 17px)",
                                }}
                            >
                                {para}
                            </p>
                        ))}
                    </div>

                </div>
            </div>


            {/* =====================================================
                IMAGE STASH 10 — SINGLE IMAGE
            ====================================================== */}
            <div className="px-6 md:px-12 lg:px-16 flex flex-col gap-6 md:gap-8 mb-100">

                {company.imgstash10?.[0] && (
                    <img
                        src={company.imgstash10[0].src}
                        alt={`${company.name} final visual`}
                        className="w-full h-auto object-contain"
                    />
                )}

            </div>

        </div>
        <div className="block md:hidden min-h-screen">
    <div className="px-5 py-8">

        {/* Project Header */}
        <div className="space-y-8">

            {/* Main Image */}
            <img
                src={company.image}
                alt={company.name}
                className="w-full h-auto object-contain"
            />

            {/* Project Details */}
            

            {/* Project Name */}
            

            {/* Description */}
            <div className="space-y-6 text-[15px] leading-7">
                {company.description?.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>

        </div>


        {/* Description 2 */}
        <div className="mt-16 space-y-6 text-[15px] leading-7">
            {company.description2?.map((text, index) => (
                <p key={index}>{text}</p>
            ))}
        </div>


        {/* Image Stash 1 */}
        {company.imgstash1?.length > 0 && (
            <div className="mt-16 space-y-6">
                {company.imgstash1.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={img.caption || ""}
                        className="w-full h-auto object-contain"
                    />
                ))}
            </div>
        )}


        {/* Text Stash 1 */}
        {company.textstash1b?.length > 0 && (
            <div className="mt-16">
                {company.textstash1b.map((text, index) => (
                    <h2
                        key={index}
                        className="text-2xl leading-tight font-medium"
                    >
                        {text}
                    </h2>
                ))}
            </div>
        )}

        {company.textstash1?.length > 0 && (
            <div className="mt-6 space-y-6 text-[15px] leading-7">
                {company.textstash1.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
        )}


        {/* Image Stash 2 */}
        {company.imgstash2?.length > 0 && (
            <div className="mt-16 space-y-6">
                {company.imgstash2.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={img.caption || ""}
                        className="w-full h-auto object-contain"
                    />
                ))}
            </div>
        )}


        {/* Image Stash 3 */}
        {company.imgstash3?.length > 0 && (
            <div className="mt-16">
                {company.imgstash3.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={img.caption || ""}
                        className="w-full h-auto object-contain"
                    />
                ))}
            </div>
        )}


        {/* Text Stash 2 */}
        {company.textstash2b?.length > 0 && (
            <div className="mt-16">
                {company.textstash2b.map((text, index) => (
                    <h2
                        key={index}
                        className="text-2xl leading-tight font-medium"
                    >
                        {text}
                    </h2>
                ))}
            </div>
        )}

        {company.textstash2?.length > 0 && (
            <div className="mt-6 space-y-6 text-[15px] leading-7">
                {company.textstash2.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
        )}


        {/* Image Stash 4 */}
        {company.imgstash4?.length > 0 && (
            <div className="mt-16 space-y-6">
                {company.imgstash4.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={img.caption || ""}
                        className="w-full h-auto object-contain"
                    />
                ))}
            </div>
        )}


        {/* Image Stash 5 */}
        {company.imgstash5?.length > 0 && (
            <div className="mt-16 space-y-6">
                {company.imgstash5.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={img.caption || ""}
                        className="w-full h-auto object-contain"
                    />
                ))}
            </div>
        )}


        {/* Image Stash 6 */}
        {company.imgstash6?.length > 0 && (
            <div className="mt-16">
                {company.imgstash6.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={img.caption || ""}
                        className="w-full h-auto object-contain"
                    />
                ))}
            </div>
        )}


        {/* Text Stash 3 */}
        {company.textstash3b?.length > 0 && (
            <div className="mt-16">
                {company.textstash3b.map((text, index) => (
                    <h2
                        key={index}
                        className="text-2xl leading-tight font-medium"
                    >
                        {text}
                    </h2>
                ))}
            </div>
        )}

        {company.textstash3?.length > 0 && (
            <div className="mt-6 space-y-6 text-[15px] leading-7">
                {company.textstash3.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
        )}


        {/* Image Stash 7 */}
        {company.imgstash7?.length > 0 && (
            <div className="mt-16 space-y-6">
                {company.imgstash7.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={img.caption || ""}
                        className="w-full h-auto object-contain"
                    />
                ))}
            </div>
        )}


        {/* Image Stash 8 */}
        {company.imgstash8?.length > 0 && (
            <div className="mt-16">
                {company.imgstash8.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={img.caption || ""}
                        className="w-full h-auto object-contain"
                    />
                ))}
            </div>
        )}


        {/* Image Stash 9 */}
        {company.imgstash9?.length > 0 && (
            <div className="mt-16 space-y-6">
                {company.imgstash9.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={img.caption || ""}
                        className="w-full h-auto object-contain"
                    />
                ))}
            </div>
        )}


        {/* Image Stash 10 */}
        {company.imgstash10?.length > 0 && (
            <div className="mt-16">
                {company.imgstash10.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={img.caption || ""}
                        className="w-full h-auto object-contain"
                    />
                ))}
            </div>
        )}


        {/* Text Stash 4 */}
        {company.textstash4b?.length > 0 && (
            <div className="mt-16">
                {company.textstash4b.map((text, index) => (
                    <h2
                        key={index}
                        className="text-2xl leading-tight font-medium"
                    >
                        {text}
                    </h2>
                ))}
            </div>
        )}

        {company.textstash4?.length > 0 && (
            <div className="mt-6 pb-12 space-y-6 text-[15px] leading-7">
                {company.textstash4.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
        )}

    </div>
</div>
        </div>
    
        
    );
}