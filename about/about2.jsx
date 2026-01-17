"use client"
import React from 'react'
export default function About2() {
    return (
        <section className="lg:pt-[40px] pt-[20px]  pb-[34px] px-[clamp(20px,4vw,120px)]  bg-white">
           <div className="flex gap-[clamp(4px,1vw,8px)] ">
                <div className="flex-1 md:flex h-full md:h-[clamp(500px,60vw,4000px)] md:w-[40%]">
                    <img
                        src="/images/about/frame15.png" className="w-full object-cover rounded-[6px]"
                    />
                </div>

                <div className="flex-1 flex flex-col md:flex-row gap-[clamp(4px,1vw,8px)]">
                    <img
                        src="/images/about/frame18.png"
                        className="flex-1 w-full md:w-[50%] object-cover rounded-[6px] "
                    />
                    <img
                        src="/images/about/frame17.png"
                        className="flex-1 w-full md:w-[50%] object-cover rounded-[6px]"
                    />
                </div>
            </div>

           
           <div className="flex gap-[clamp(10px,3vw,40px)]">
            <div className=" w-1/2 text-[#6D7876] mt-6">
                <div className=" mb-6">
                    <h2 className="text-black text-[clamp(12px,2vw,28px)] font-[400] mb-1/3 md:mb-2" >Hey, I am</h2>
                    <h1 className="text-black text-[clamp(14px,3vw,84px)] font-[500]" >Dollamani Behera,</h1>
                </div>
                <div className="text-[clamp(12px,1.8vw,26px)] space-y-4 tracking-tight">
                    <p>By day, I'm a designer who helps businesses with logos, visuals, and collateral designs. </p>
                    <p>I love what I do, and I'm all about creating things that's both pretty and effective. When I'm not designing, you can find me reading a book, scribbling in my journal, or taking a cycle ride. I'm stoked you're here, and I'm excited to work with you to create something amazing</p>
                    <p>I'm a creative enthusiast and I'm always looking for new challenges and opportunities to grow as a designer. Let's get creative and bring your vision to life!</p>
                    <div className="hidden md:block space-y-4">
                        <p>By day, I'm a designer who helps businesses with logos, visuals, and collateral designs. </p>
                    <p>I love what I do, and I'm all about creating things that's both pretty and effective. When I'm not designing, you can find me reading a book, scribbling in my journal, or taking a cycle ride. I'm stoked you're here, and I'm excited to work with you to create something amazing. </p>
                    <p>I'm a creative enthusiast and I'm always looking for new challenges and opportunities to grow as a designer. Let's get creative and bring your vision to life!</p>
                    </div>
                </div>
                

            </div>
            <div className="w-1/2 text-[#6D7876] mt-6  flex flex-col  ">
            <div className="text-[clamp(12px,1.8vw,26px)] space-y-4 tracking-tight md:mb-10 order-2 md:order-1 mt-6 ">
                <p>By day, I'm a designer who helps businesses with logos, visuals, and collateral designs. </p>
                <p  >I love what I do, and I'm all about creating things that's both pretty and effective. When I'm not designing, you can find me reading a book, scribbling in my journal, or taking a cycle ride. I'm stoked you're here, and I'm excited to work with you to create something amazing</p>
                <p>I'm a creative enthusiast and I'm always looking for new challenges and opportunities to grow as a designer. Let's get creative and bring your vision to life!</p>
            </div>
            <div className="flex justify-end md:justify-start order-1 md:order-2  py-[0.8px]">
                    <a href="#" className="bg-[#570202] text-white text-[clamp(12px,1vw,20px)] py-[clamp(10px,1.5vw,16px)] px-8 rounded-full hover:bg-[#6d0d0d] transition text-center">
                    Say hello!
                    </a>
            </div>
            </div>
           </div>
        </section>
    )
}