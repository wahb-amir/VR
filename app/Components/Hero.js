"use client";
import Image from "next/image";

function Hero() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section)
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    else console.warn("Skills section not found!");
  };
  return (
    <section className="relative w-screen md:h-[65vh] sm:h-[60vh] h-[85vh] min-h-[400px] overflow-hidden text-white ">
      <Image
        src="/bg.webp"
        alt="background image"
        fill
        className="object-cover"
        priority
        data-ai-hint={"abstract vr"}
      />

      <div className="absolute inset-0 bg-black/50" />

      {/* content container stays centered and constrained */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 flex flex-col items-center gap-6 text-center top-1/2 -translate-y-1/2">
        <h1 className="text-4xl md:text-6xl font-bold font-headline leading-tight tracking-tighter">
          Step into the Future of Learning
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-neutral-200">
          Neuro VR offers immersive educational experiences that captivate
          students and transform classrooms.
        </p>
        <div className="flex flex-row gap-4">
          <button
            className="bg-blue-500 p-3 text-md rounded-md cursor-pointer hover:bg-blue-600 transition-all duration-100 active:scale-[95%] active:bg-blue-700 scale-75 sm:scale-90 md:scale-100"
            onClick={() => {
              handleScroll("product");
            }}
          >
            Explore Our Apps
          </button>
          <button
            className="bg-white/20 backdrop-blur-sm border-2 border-white/10 p-3 text-md rounded-md cursor-pointer hover:bg-white/30 transition-all duration-100 active:scale-[95%] active:bg-white/40"
            onClick={() => {
              handleScroll("product");
            }}
          >
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
