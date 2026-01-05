"use client";
import React from "react";

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

export default function Process() {
  
  return (
    <section className="hidden md:block pt-[50px] px-[clamp(20px,4vw,120px)] bg-white">
      {/* Heading */}
      <div className=" flex items-center gap-4  mb-8">
          <h2 
            className="text-[clamp(16px,2.3vw,28px)] font-[500] text-black whitespace-nowrap">
            Client Process
          </h2>
          <div className="flex-1 h-px bg-[#989898]">
            </div>
        </div>

      {/* Timeline */}
      <div className="relative flex w-full ">
  {steps.map((step, i) => (
    <div
      key={i}
      className="relative  flex flex-1 flex-col items-center"
    >
      {/* Circle */}
      <div className="relative z-10 mb-6">
        <div
          className="
            w-[clamp(62px,6vw,108px)]
            h-[clamp(62px,6vw,108px)]
            flex items-center justify-center
            rounded-full bg-[#570202] text-white
            text-[clamp(30px,2.5vw,52px)]
            font-[400]
          "
        >
          {step.number}
        </div>
      </div>

      {/* Connector line */}
      {i !== steps.length - 1 && (
        <span
          className="
            absolute
            top-[calc(clamp(62px,6vw,90px)/2)]
            left-1/2
            -right-1/2
            h-px bg-black
          "
        />
      )}

      {/* Title */}
      <div className="text-left max-w-[95%]">
        <h3 className="font-semibold text-black mb-2 text-[clamp(18px,1.5vw,28px)]">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-[#6D7876] text-[clamp(16px,1vw,22px)] leading-[clamp(16px,1.3vw,22px)] max-w-[90%] lg:max-w-[15vw] font-[300]">
        {step.description}
      </p>
      </div>
    </div>
  ))}
      </div>


       <div className=" flex items-center gap-4 mt-[131px] mb-8">
          <h2 
            className="text-[clamp(16px,2.3vw,28px)] font-[500] text-black whitespace-nowrap">
            Design Process
          </h2>
          <div className="flex-1 h-px bg-[#989898]">
            </div>
        </div>
      <div className=" grid md:grid-cols-2 gap-y-16 gap-x-20 mt-20">
        {steps1.map((step, i) => (
          <div key={i} className="flex items-start gap-4">
            {/* Number circle */}
            <div className="flex-shrink-0 w-[clamp(62px,5vw,72px)]
            h-[clamp(62px,5vw,72px)] flex items-center justify-center rounded-full bg-[#570202] text-white  text-[clamp(30px,1.5vw,52px)] font-[400]">
              {step.number}
            </div>
            {/* Text */}
            <div>
              <h3 className="font-semibold text-[clamp(18px,2.2vw,28px)] text-black mb-1">
                {step.title}
              </h3>
              <p className="text-[#6D7876] text-[clamp(18px,1vw,22px)]  tracking-tight leading-[clamp(18px,2vw,22px)] font-[300]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
       
      {/*Mobile version */}
      
      
    </section>
  );
}
