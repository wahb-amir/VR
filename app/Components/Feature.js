import React from "react";
import { FingerprintPattern, Shield, Users, Globe } from "lucide-react";
import { Power } from "lucide-react";
const Feature = () => {
  const features = [
    {
      heading: "Drag-and-Drop Interface",
      desc: "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
      icon: Users,
    },
    {
      heading: "Multi-Platform Compatibility",
      desc: "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
      icon: FingerprintPattern,
    },
    {
      heading: "Built-in Templates",
      desc: "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
      icon: Shield,
    },
    {
      heading: "Real-Time Preview",
      desc: "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
      icon: Users,
    },
    {
      heading: "Collaboration Tools",
      desc: "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
      icon: Power,
    },
    {
      heading: "Analytics Dashboard",
      desc: 'Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard."',
      icon: Globe,
    },
  ];
  return (
    <>
      <p className="text-white z-10 border bg-[#ff9500] p-0.5 rounded-full font-mono mb-2">
        feature
      </p>
      <h1 className="flex space-x-2 text-3xl font-semibold font-serif mt-2 mb-2">
        <p className="text-[#be8029]">Easily build</p>
        <p> your code</p>
      </h1>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6  justify-items-center left-1/2 transform ">

  {features.map((feature, index) => {
    const Icon = feature.icon;
    return (
      <div
        key={index}
        className="flex flex-col items-center text-center p-6 border border-gray-700 rounded-2xl bg-gradient-to-br from-black/80 to-black/60 shadow-lg hover:scale-105 transition-transform duration-300"
      >

        <Icon className="w-14 h-14 mb-4 text-orange-500" />

        <h3 className="text-xl font-semibold mb-3">{feature.heading}</h3>

      
        <p className="text-sm text-gray-200 max-w-xs">{feature.desc}</p>
      </div>
    );
  })}
</main>

    </>
  );
};

export default Feature;
