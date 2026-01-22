"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Main = () => {
  const imageRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)

    let animationFrame

    const animate = () => {
      if (imageRef.current) {
        const maxMove = 300 
        const targetX = Math.min(scrollY, maxMove) 
        console.log(targetX)
        //180 offset for the image width
        if((targetX)>window.innerWidth-180){
          return

        }
        setCurrentX(prev => {
          const nextX = prev + (targetX - prev) * 0.1 
          imageRef.current.style.transform = `translateX(${nextX}px)`
          return nextX
        })

        // Optional: fade in text after scrolling a bit
    
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationFrame)
    }
  }, [scrollY])
  return (
<div className="z-10 text-white p-4">
  
    
    <div
      ref={imageRef}
      className="relative  flex justify-center items-center"
      style={{ transform: "translateX(-70px)" }} 
    >
      <Image src="/vr.png" alt="vr image" width={300} height={100}  />
    </div>
</div>

  );
};

export default Main;
