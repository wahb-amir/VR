"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Main = () => {
  const wrapperRef = useRef(null);    
  const imageRef = useRef(null);       
  const parallaxRef = useRef(null);     

  const targetXRef = useRef(0);
  const currentXRef = useRef(0);
  const scrollYRef = useRef(0);
  const maxMoveRef = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const IMAGE_OFFSET = 180; // same as before

    const updateMax = () => {
      maxMoveRef.current = window.innerWidth || 0;
    };

    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      scrollYRef.current = y;

      const maxMove = maxMoveRef.current;
      let target = Math.min(y, maxMove) - 20;
      if (target < 0) target = 0;
      if (target > maxMove - IMAGE_OFFSET) target = maxMove - IMAGE_OFFSET;
      targetXRef.current = target;
    };

    updateMax();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateMax);

    const animate = () => {
      const imgEl = imageRef.current;
      const parEl = parallaxRef.current;
      if (imgEl) {
        const prev = currentXRef.current;
        const target = targetXRef.current;
        const next = prev + (target - prev) * 0.12;
        currentXRef.current = next;
        const maxRange = Math.max(1, maxMoveRef.current - IMAGE_OFFSET);
        const ratio = Math.min(1, Math.max(0, next / maxRange));
        imgEl.style.transform = `translate3d(${next}px, 0, 0)`;
        imgEl.style.willChange = "transform, filter";
        const glowPx = 8 + ratio * 48;
        const glowColor = "0, 200, 255"; 
        imgEl.style.filter = `drop-shadow(0 0 ${glowPx}px rgba(${glowColor}, 0.85)) brightness(${1 + ratio * 0.25})`;
        const scale = 1 + ratio * 0.02;
        imgEl.style.transform = `translate3d(${next}px, 0, 0) scale(${scale})`;
      }

      if (parEl) {
      
        const scrollY = scrollYRef.current;
        const parallaxY = -scrollY * 0.18; 
        parEl.style.transform = `translate3d(0, ${parallaxY}px, 0)`;
        parEl.style.willChange = "transform, opacity";
        
        const parOpacity = 0.45 + Math.min(0.35, (scrollY / window.innerHeight) * 0.15);
        parEl.style.opacity = String(parOpacity);
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateMax);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative z-10 text-white p-4 w-[90%] mx-auto">
      {/* Parallax background layer (pointer-events-none so it doesn't block scroll/hover) */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          
          background:
            "radial-gradient(closest-side, rgba(0,200,255,0.12), rgba(0,0,0,0) 60%)",
          transform: "translate3d(0, 0, 0)",
          opacity: 0.45,
        }}
      />

      <div className="relative w-full h-[30vh] flex justify-center items-start overflow-hidden">
        <div
          ref={imageRef}
          className="absolute flex justify-center items-center top-0 left-0"
          style={{
            transform: "translate3d(0,0,0)",
            
            transition: "none",
          }}
        >
          <Image
            src="/vr.avif"
            alt="vr image"
            width={300}
            height={100}
            
            sizes="(max-width: 640px) 150px, (max-width: 1024px) 220px, 300px"
            className="w-[150px] sm:w-[200px] lg:w-[300px] h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
