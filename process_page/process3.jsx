"use client";
import React from "react";
import { useState } from "react";
const steps = [
  {
    number: "01",
    title: "Discovery call",
    description:
      "A quick call to understand your goals, to get to know your brand, and see if we’re the right fit.",
  },
  {
    number: "02",
    title: "Questionnaire & Proposal",
    description:
      "You’ll receive a simple questionnaire, I’ll gather key details through the same and send over a clear proposal.",
  },
  {
    number: "03",
    title: "Proposal Confirmation",
    description:
      "Upon your confirmation of this proposal, we will finalize the project scope and begin working on delivering results.",
  },
  {
    number: "04",
    title: "Project Delivery",
    description:
      "On completion, I’ll deliver the final files in agreed formats, polished and everything else you need to go live.",
  },
];
const steps1 = [
  {
    number: "01",
    title: "Reading & Research",
    description:
      "Here, I go through your company brief, understand your brand, go through your competitors’ profiles, extract relevant words from the brief, and understand your needs before any design work begins. The goal of a designer is to… understand!",
  },
  {
    number: "02",
    title: "Mood boarding",
    description:
      "I collect visuals, colors, and styles to capture the right tone, build a mood board to set the creative direction, and present 2-3 design options for your review. Together, we’ll determine the best fit for your brand.",
  },
  {
    number: "03",
    title: "Sketching",
    description:
      "I sketch 10 to 100s of ideas on paper, exploring multiple logo directions to select the most relevant and effective design that follows all the logo principles, and then jump into the next step. Sketching till the muse strikes!",
  },
  {
    number: "04",
    title: "Vectorization",
    description:
      "I refine selected concepts into precise vector form, transforming rough ideas into polished logos. A logo that looks great in black and white will only get better with color. Does your logo pass the B&W test?",
  },
  {
    number: "05",
    title: "Presentation & Mockups",
    description:
      "Showcasing designs in real-world mockups for clarity. A quick call helps you understand the concept and how it aligns with your brand, giving you a live look at your brand’s identity. Visualize Your Brand!",
  },
  {
    number: "06",
    title: "Final or Feedback",
    description:
      "After reviewing the presentation, you’ll provide your feedback. If approved, we’ll finalize and launch your asset. If revisions are needed, we’ll go back to step 1 and refine accordingly. Perfected and ready to launch!",
  },
];

export default function ProcessSteps() {
  const [active, setActive] = useState('client')
  return (
    <div className="block md:hidden ">
    <div className="flex w-full text-black">
        <button
          onClick={() => setActive('client')}
          className={`px-4.5 py-4.5 w-[50vw] text-[16px] font-[500] transition
            ${active === 'client'
              ? 'bg-[#FFE7E7]'
              : 'bg-white'
            }`}
        >
          Client Process
        </button>

        <button
          onClick={() => setActive('design')}
          className={`px-4.5 py-4.5 w-[50vw] text-[16px] font-[500] transition
            ${active === 'design'
               ? 'bg-[#FFE7E7]'
              : 'bg-white'
            }`}
        >
          Design Process
        </button>
      </div>

      {/* Content */}
      <div className="mt-24">
        {active === 'client' && (
          <div className="relative px-6">
  
  {/* Single vertical line */}
  <div className="absolute left-17 top-7 bottom-9 w-px bg-black"></div>

  {/* Steps */}
  <div className="flex flex-col gap-25">
    {steps.map((step, i) => (
      <div key={i} className="flex gap-4 relative">
        
        {/* Circle */}
        <div className="w-22.5 h-22.5 flex items-center justify-center rounded-full bg-[#570202] text-white text-[38px] font-[400] z-10">
          {step.number}
        </div>

        {/* Content */}
        <div className="flex-1 ml-2">
          <h3 className="font-semibold text-black text-[clamp(22px,4vw,28px)] mb-1">
            {step.title}
          </h3>
          <p className="text-[#6D7876] text-[clamp(16px,3vw,22px)] leading-[clamp(16px,3vw,20px)] font-[300] mt-2">
            {step.description}
          </p>
        </div>

      </div>
    ))}
  </div>
</div>


        )}

        {active === 'design' && (
          <div>
            {/* Design Process content */}
            <div className="relative px-6">
  
  {/* Single vertical line */}
  <div className="absolute left-17 top-7 bottom-20 w-px bg-black"></div>

  {/* Steps */}
  <div className="flex flex-col gap-25">
    {steps1.map((step, i) => (
      <div key={i} className="flex gap-4 relative">
        
        {/* Circle */}
        <div className="w-22.5 h-22.5 flex items-center justify-center rounded-full bg-[#570202] text-white text-[38px] font-[400] z-10">
          {step.number}
        </div>

        {/* Content */}
        <div className="flex-1 ml-2">
          <h3 className="font-semibold text-black text-[clamp(22px,4vw,28px)] mb-1">
            {step.title}
          </h3>
          <p className="text-[#6D7876] text-[clamp(16px,3vw,22px)] leading-[clamp(16px,3vw,20px)]  font-[300] mt-2">
            {step.description}
          </p>
        </div>

      </div>
    ))}
  </div>
</div>
          </div>
        )}
      </div>
    </div>
  );
}
