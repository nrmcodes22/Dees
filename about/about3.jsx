"use client"
import React from 'react'
export default function About3(){
    return (
        <section className="lg:pt-[74px] px-[clamp(20px,4vw,120px)]  pt-[44px]  pb-[34px] bg-white">
         <div
        className="flex items-center gap-4 lg:mb-[70px] md:mb-[37px]"
        
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
        <div className="hidden md:flex gap-2  justify-center   w-full h-[50vw] max-h-[1000px]  ">
                <div className=" w-[35%] rounded-[6px] relative overflow-hidden ">
                    <img
                        src="/images/about/read.jpg"
                        alt="Read"
                        className=" h-full object-cover"
                        />
                <p className="absolute bottom-2 left-2 text-white text-sm">
                    I read!
                </p>
                </div>
                <div className="flex flex-1 flex-col gap-[2%]  w-[65%] h-full">
                    <div className="flex gap-2 Top  h-[49%] w-full">
                        <div className="Left rounded-[6px] relative overflow-hidden  h-full w-[39%]">
                            <img
                                src="/images/about/frame4.jpg"
                                alt="Chess"
                                className="h-full object-cover"
                            />
                            <p className="absolute bottom-2 left-2 text-white text-sm">
                                    Chess..
                            </p>
                        </div>
                        <div className="Right rounded-[6px] relative overflow-hidden  h-full w-[60%]">
                            <img
                                src="/images/about/write.jpg"
                                alt="Write"
                                className="h-full w-full object-cover object-right-top"
                                />
                            <p className="absolute bottom-2 left-2 text-white text-sm">
                            I write!
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 Bottom h-[49%] w-full">
                        <div className="Left rounded-[6px] relative overflow-hidden bg-blue-700 w-[60%]">
                            <img
                                src="/images/about/content.jpg"
                                alt="Content"
                                className="w-full h-full object-cover"
                                />
                            <p className="absolute bottom-2 left-2 text-white text-sm">
                                Content Creation..
                            </p>
                        </div>
                        <div className="Right bg-blue-400 rounded-[6px] relative overflow-hidden   w-[39%]">
                            <img
                                src="/images/about/cycling.jpg"
                                alt="Cycling"
                                className="w-full h-full object-cover"
                                />
                            <p className="absolute bottom-2 left-2 text-white text-sm">
                                Cycling..
                            </p>
                        </div>
                    </div>
                </div>
          </div>



        </section>
    )
}