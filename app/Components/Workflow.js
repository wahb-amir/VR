"use client ";
import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
const Workflow = () => {
  
  const features = [
    {
      heading: "Code merge made easy",
      desc: "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      heading: "Review code without worry",
      desc: "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      heading: "AI Assistance to reduce time",
      desc: "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      heading: "Share work in minutes",
      desc: "Track the performance of your VR apps and gain insights into user behavior.",
    },
  ];

  return (
    <div id="workflow" className="z-10">
      <p className="text-white border bg-[#ff9500] p-0.5 rounded-full font-mono font-medium w-fit m-auto mb-5 pl-2 pr-2">
        Workflow
      </p>
      <h1 className="flex space-x-2 text-center w-fit m-auto">
        <p className="text-[#be8029] text-6xl font-bold font-serif mt-5 mb-5">
          Accelerate Your
        </p>
        <p className="text-white font-bold font-serif  mt-5 mb-5 text-6xl ">Coding flow</p>
      </h1>
      <main className="flex w-screen ">
        <div className="m-auto">
          <Image
            src={"/workflow.png"}
            alt="workflow image"
            width={500}
            height={500}
            className="rounded-2xl shadow-xl  shadow-[#942cf0]"
          />
        </div>
       <ul className="max-w-xl mx-auto p-6 rounded-3xl border border-gray-500 bg-black/40 backdrop-blur-lg shadow-2xl z-50 relative">
  {features.map((feature) => (
    <li key={feature.heading} className="mb-6 last:mb-0">
      <h2 className="text-2xl font-semibold font-sans flex items-center gap-3">
        <CheckCircle2 className="text-green-400" size={24} />
        {feature.heading}
      </h2>
      <p className="text-sm md:text-md text-white/90 mt-1">
        {feature.desc}
      </p>
    </li>
  ))}
</ul>

      </main>
    </div>
  );
};

export default Workflow;
