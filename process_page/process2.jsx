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

export default function Process() {
  return (
    <section className="py-6 px-20 bg-white">
      {/* Heading */}
      <div className="flex items-center gap-4 mt-[131px] mb-8">
          <h2 
            className="text-2xl font-normal text-black whitespace-nowrap">
            Client Process
          </h2>
          <div className="flex-1 h-px bg-[#989898]">
            </div>
        </div>

      {/* Timeline */}
      <div className="relative flex justify-center items-start ">
        {steps.map((step, i) => (
          <div key={i} className="flex-1 text-center  px-4 ">
            {/* Circle + Connector */}
            <div className="relative flex justify-start  mb-6 ml-10">
              
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#570202] text-white text-3xl font-light z-3 ">
                {step.number}
              </div>

              {/* Line (except last step) */}
              {i !== steps.length - 1 && (
                <div className="absolute top-1/2  left-20 right-0 w-full h-[1px] bg-black  "></div>
              )}
            </div>

            {/* Title + Description */}
            <h3 className="font-semibold text-gray-900 mb-2 text-left text-xl">{step.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed text-left lg:w-3/5 w-full">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
