"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
    const handleScroll = (id) => {
    const section = document.getElementById(id);
    if(section)
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    else console.warn("Skills section not found!");
  };
  return (
    <>
    <div className="z-10 flex flex-col items-center md:items-start gap-y-4 mt-10 mb-auto left-1/2 top-1/2 transform " id="home">

      <header >
        <div className="flex flex-col items-center md:items-start gap-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left leading-snug">
            <span className="text-[#FFAA33] block text-center">Build the</span>
            <span className="block text-center">Future of Learning in VR</span>
          </h1>
          <h2 className="text-white/70 text-md sm:text-lg md:text-xl  max-w-md text-center m-auto ">
            Create interactive classrooms, simulations, and learning worlds in
            virtual reality
          </h2>
        </div>
      </header>

       <main className="relative z-10 flex justify-center items-center mt-6 m-auto">
        <div className="flex gap-4">
          <button className="p-3 rounded-lg bg-[#ee800c] cursor-pointer active:scale-90 transition-all duration-100" onClick={()=>{handleScroll('pricing')}}>
            Get Started
          </button>
          <button className="p-3 rounded-lg border border-white bg-transparent cursor-pointer active:scale-90 transition-all duration-100">
            Learn More
          </button>
        </div>
      </main>
      
       </div>

     
    </>
  );
};

export default Hero;
