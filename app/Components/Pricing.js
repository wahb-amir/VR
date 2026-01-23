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
    <div >
      <h1
        className="text-6xl text-center mt-5 mb-5 font-bold font-serif"
        id="pricing"
      >
        Pricing
      </h1>
      <main className="w-screen h-fit pt-5 pb-7 rounded-3xl p-5 flex justify-around items-center md:flex-row flex-col">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="pricing-card border border-gray-500 p-5 rounded-2xl md:w w-90% h-fit bg-black mt-10 mb-10"
          >
            {plan.name === "Pro" ? (
              <h2 className="text-2xl font-semibold text-left gap-2 flex p-4">
                {plan.name}
                <p className="text-orange-600">(Most Popular)</p>
              </h2>
            ) : (
              <h2 className="text-2xl font-semibold text-left p-4">
                {plan.name}
              </h2>
            )}
            <span className="text-4xl text-white flex gap-2 --3">{plan.price}
                <p className="text-2xl text-white/50">/Month</p>
            </span>
            <ul className="p-3 mb-5">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-xl p-2 flex gap-3">
                    <Check/>
                    {feature}
                    </li>
              ))}
            </ul>
            <button className="border border-orange-800 text-center m-auto rounded-xl p-2  cursor-pointer hover:bg-gray-950 transition-all active:scale-90 w-[90%] m-auto">{plan.buttonText}</button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Pricing;
