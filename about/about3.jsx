"use client"
import React from 'react'
export default function About3(){
    return (
        <section className="lg:pt-[74px] px-[clamp(20px,4vw,120px)]  pt-[44px]  pb-[34px] bg-white">
         <div
        className="flex items-center gap-4 lg:mb-[70px] md:mb-[37px] mb-10"
        
      >
        <h2
          className="text-[clamp(16px,2.3vw,28px)] font-[500] text-black whitespace-nowrap"
          
        >
          Outside of design
        </h2>
        <div
          className="flex-1 h-px bg-[#989898]"
         
        />
      </div>
        <div className="grid grid-cols-5 grid-rows-2  gap-2 mb-20 lg:h-[700px] md:h-[400px] font-light">
            {/* Row 1 */}
            <div className="relative rounded-lg overflow-hidden row-span-2 col-span-2">
                <img src="/images/about/read.jpg" alt="Reading" className="w-full h-full object-cover" />
                <p className="absolute bottom-2 left-2 text-white text-lg">I read!</p>
            </div>
            
            <div className="relative rounded-lg overflow-hidden ">
                <img src="/images/about/frame4.jpg" alt="Chess" className="w-full h-full object-cover" />
                <p className="absolute bottom-2 left-2 text-white text-lg">Chess...</p>
            </div>

            <div className="relative rounded-lg overflow-hidden col-span-2">
                <img src="/images/about/write.jpg" alt="Writing" className="w-full h-full object-cover" />
                <p className="absolute bottom-2 left-2 text-white text-lg">I write!</p>
            </div>

            {/* Row 2 */}
            <div className="relative rounded-lg overflow-hidden col-span-2">
                <img src="/images/about/content.jpg" alt="Content Creation" className="w-full h-full object-cover" />
                <p className="absolute bottom-2 left-2 text-white text-lg">Content Creation..</p>
            </div>

            <div className="relative rounded-lg overflow-hidden">
                <img src="/images/about/cycling.jpg" alt="Cycling" className="w-full h-full object-cover" />
                <p className="absolute bottom-2 left-2 text-white text-lg">Cycling..</p>
            </div>
            </div>

        </section>
    )
}