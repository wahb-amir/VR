"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Main = () => {
  const imageRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const textRef = useRef(null)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    let animationFrame;

    const animate = () => {
      if (imageRef.current) {
        const maxMove = 300;
        const targetX = Math.min(scrollY, maxMove) - 20;
        //180 offset for the image width
        if (targetX > window.innerWidth - 180) {
          return;
        }
        setCurrentX((prev) => {
          const nextX = prev + (targetX - prev) * 0.1;
          imageRef.current.style.transform = `translateX(${nextX}px)`;
          return nextX;
        });
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [scrollY]);
  return (
    <div className="z-10 text-white p-4 relative w-[90%]">
      <div
        ref={imageRef}
        className="relative flex justify-center items-center top-1/2"
        style={{ transform: "translateX(0px)" }}
      >
        <Image
          src="/vr.png"
          alt="vr image"
          width={300}
          height={100}
          sizes="(max-width: 640px) 150px, (max-width: 1024px) 220px, 300px"
          className="w-[150px] sm:w-[200px] lg:w-[300px] h-auto"
        />
      </div>
    </div>
  );
};

export default Main;
