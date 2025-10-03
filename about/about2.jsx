"use client"
import React from 'react'
export default function About2() {
    return (
        <section className="py-6 px-24 bg-white">
           <div className='grid grid-cols-2 gap-4'>
                <img src="/images/about/frame15.png" className='h-full'/>
                <div className='grid grid-cols-2 gap-4' >
                    <img src="/images/about/frame18.png" className='h-full'/> <img src="/images/about/frame17.png" className='h-full'/>
                </div>
                
           </div>
           <div className="flex gap-10">
            <div className="Left w-1/2 text-[#6D7876] mt-10">
                <h2 className="text-black text-xl font-medium mb-2" >Hey, I am</h2>
                <h1 className="text-black text-4xl font-semibold mb-14" >Dollamani Behera,</h1>
                <p className="text-lg mb-6">By day, I'm a designer who helps businesses with logos, visuals, and collateral designs. </p>
                <p className="text-lg mb-6" >I love what I do, and I'm all about creating things that's both pretty and effective. When I'm not designing, you can find me reading a book, scribbling in my journal, or taking a cycle ride. I'm stoked you're here, and I'm excited to work with you to create something amazing</p>
                <p className="text-lg mb-6">I'm a creative enthusiast and I'm always looking for new challenges and opportunities to grow as a designer. Let's get creative and bring your vision to life!</p>
                <p className="text-lg mb-6">By day, I'm a designer who helps businesses with logos, visuals, and collateral designs. </p>
                <p className="text-lg mb-6">I love what I do, and I'm all about creating things that's both pretty and effective. When I'm not designing, you can find me reading a book, scribbling in my journal, or taking a cycle ride. I'm stoked you're here, and I'm excited to work with you to create something amazing. </p>
                <p className="text-lg">I'm a creative enthusiast and I'm always looking for new challenges and opportunities to grow as a designer. Let's get creative and bring your vision to life!</p>

            </div>
            <div className="Right w-1/2 text-[#6D7876] mt-14">
                <p className="text-lg mb-6">By day, I'm a designer who helps businesses with logos, visuals, and collateral designs. </p>
                <p className="text-lg mb-6" >I love what I do, and I'm all about creating things that's both pretty and effective. When I'm not designing, you can find me reading a book, scribbling in my journal, or taking a cycle ride. I'm stoked you're here, and I'm excited to work with you to create something amazing</p>
                <p className="text-lg mb-10">I'm a creative enthusiast and I'm always looking for new challenges and opportunities to grow as a designer. Let's get creative and bring your vision to life!</p>
              <a
               href="#"
                 className=" bg-[#570202] text-white text-lg px-12 py-4 rounded-full hover:bg-[#6d0d0d] transition max-w-48 text-center font-light "
>
  Say hello!
</a>  
            </div>
           </div>
        </section>
    )
}