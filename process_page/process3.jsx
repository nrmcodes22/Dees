"use client";
import React from "react";

const steps = [
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
  return (
    <div className="bg-white px-6 md:px-20 py-16">
     <div className="flex items-center gap-4 mt-[131px] mb-8">
          <h2 
            className="text-2xl font-normal text-black whitespace-nowrap">
            Design Process
          </h2>
          <div className="flex-1 h-px bg-[#989898]">
            </div>
        </div>
      <div className="grid sm:grid-cols-2 gap-y-16 gap-x-20 mt-20">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-4">
            {/* Number circle */}
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#570202] text-white text-2xl font-light">
              {step.number}
            </div>
            {/* Text */}
            <div>
              <h3 className="font-semibold text-2xl text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-[#6D7876] text-xl leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
       <div className="border border-[#570202] rounded-md px-10 py-4 mt-64">
      <p className="text-[#570202] font-semibold mb-1 text-2xl">Note</p>
      <p className="text-[#570202] text-xl font-light leading-relaxed">
        Each project is unique, and so is its design process. I adapt my approach to fit the specific needs and goals of every brand and client.
      </p>
    </div>
    </div>
  );
}
