"use client";

import { useEffect, useRef, useState } from "react";

function VideoCard({ src, poster }) {
  const videoRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mt-20 mb-20">
      <div className="flex lg:flex-row flex-col justify-center items-center gap-10">
        <video
          src="/coding.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="object-cover w-[300px] sm:w-[500px] border border-orange-500 rounded-[5px]"
        />

        <video
          src="/vr.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="object-cover w-[300px] sm:w-[500px] border border-orange-500 rounded-[5px]"
        />
      </div>
    </section>
  );
}

export default VideoCard;
