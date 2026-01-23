"use client";
import React from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "Private board sharing",
        "5 Gb Storage",
        "Web Analytics",
        "Private Mode",
      ],
      buttonText: "Subscribe",
    },
    {
      name: "Pro",
      price: "$10",
      features: [
        "Private board sharing",
        "10 Gb Storage",
        "Web Analytics (Advance)",
        "Private Mode",
      ],
      buttonText: "Subscribe",
    },
    {
      name: "Enterprise",
      price: "$200",
      features: [
        "Private board sharing",
        "Unlimited Storage",
        "High Performance Network",
        "Private Mode",
      ],
      buttonText: "Subscribe",
    },
  ];

  return (
    <section className=" text-white py-20 px-6" id="pricing">
      <h1 className="text-6xl md:text-7xl font-extrabold font-serif text-center mb-16">
        Pricing
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-7xl mx-auto ">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative w-full md:w-1/3 bg-gray-800/60 backdrop-blur-lg rounded-3xl border border-white/10 shadow-lg flex flex-col items-center p-8 transform transition duration-300  ${
              plan.name === "Pro"
                ? "md:scale-110 z-20 -translate-y-4 shadow-xl shadow-gray-800 hover:scale-115"
                : "md:scale-100 z-10 hover:scale-105"
            }`}
          >
            {plan.name === "Pro" && (
              <span className="absolute top-4 right-4 bg-orange-500 text-black font-bold px-3 py-1 rounded-full text-sm uppercase tracking-wide scale-90">
                Most Popular
              </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{plan.name}</h2>
            <div className="flex items-baseline mb-6 gap-2">
              <span className="text-5xl md:text-6xl font-extrabold">
                {plan.price}
              </span>
              <span className="text-xl md:text-2xl text-white/50">/Month</span>
            </div>
            <ul className="space-y-3 mb-6 w-full">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-lg md:text-xl"
                >
                  <Check className="text-orange-500 w-6 h-6 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 rounded-xl transition transform active:scale-95 text-lg">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
