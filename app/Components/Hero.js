"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <header className="absolute z-2 flex flex-col md:flex-row mt-10 max-w-screen h-screen overflow-y-hidden md:justify-between md:items-start items-center gap-y-6 md:gap-x-12 top-1/6 px-4 md:px-12">
        <div className="flex flex-col items-center md:items-start gap-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left leading-snug">
            <span className="text-[#FFAA33] block text-center">Build the</span>
            <span className="block text-center">Future of Learning in VR</span>
          </h1>
          <h2 className="text-white/70 text-md sm:text-lg md:text-xl text-center md:text-left max-w-lg text-center">
            Create interactive classrooms, simulations, and learning worlds in
            virtual reality
          </h2>
        </div>
      </header>

      <main className="text-white flex justify-center items-center mt-6">
        <div className="flex gap-4">
          <button className="p-3 rounded-lg bg-[#ee800c] cursor-pointer active:scale-90 transition-all duration-100">
            Get Started
          </button>
          <button className="p-3 rounded-lg border border-white bg-transparent cursor-pointer active:scale-90 transition-all duration-100">
            Learn More
          </button>
        </div>
      </main>

      <main className="text-white flex absolute z-2 justify-center items-center w-full ">
        <div className="flex justify-between">
          <button className="text-white p-3 m-2 rounded-lg bg-[#ee800c] cursor-pointer active:scale-90 duration-100 transition-all  ">
            Get Started
          </button>
          <button className="text-white p-3 m-2 rounded-lg border bg-transparent cursor-pointer active:scale-90 duration-100 transition-all  ">
            Learn more
          </button>
        </div>
      </main>
    </>
  );
};

export default Hero;
