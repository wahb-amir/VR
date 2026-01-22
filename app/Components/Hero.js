'use client'
import { useState, useEffect } from 'react'
import React from "react";

const Hero = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden overflow-y-hidden">
      <svg className="w-screen h-screen">

        {Array.from({ length: 40 }).map((_, i) => (
            
          <line
            key={`v${i}`}
            x1={(i * 100).toString()}
            y1="0"
            x2={(i * 100).toString()}
            y2="100%"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
        ))}

        {Array.from({ length: 40 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={(i * 100).toString()}
            x2="100%"
            y2={(i * 100).toString()}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
        ))}

       <svg className="w-screen h-screen">
  {Array.from({ length: 40 }).map((_, i) =>
    Array.from({ length: 40 }).map((_, index) => {
     
      const dx = i * 100 - mousePos.x;
      const dy = index * 100 - mousePos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const isNear = distance < 175;
      const fillColor = isNear ? "rgba(255,170,51,1)" : "rgba(255,255,255,0.5)";
      const radius = isNear ? 4 : 3; 

      return (
        <circle
          key={`node-${i}-${index}`}
          cx={i * 100}
          cy={index * 100}
          r={radius}
          fill={fillColor}
          style={{ transition: "all 0.2s ease" }}
        />
      );
    }),
  )}
</svg>

      </svg>
    </div>
  );
};

export default Hero;
