"use client";
import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
    name: "John Doe",
    company: "Stellar Solutions",
  },
  {
    quote:
      "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
    name: "Jane Smith",
    company: "Blue Horizon Technologies",
  },
  {
    quote:
      "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
    name: "David Johnson",
    company: "Quantum Innovations",
  },
  {
    quote:
      "Working with the team was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible.",
    name: "Ronee Brown",
    company: "Fusion Dynamics",
  },
  {
    quote:
      "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
    name: "Michael Wilson",
    company: "Visionary Creations",
  },
  {
    quote:
      "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
    name: "Emily Davis",
    company: "Synergy Systems",
  },
];

const Testimonial = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const container = containerRef.current;
    if (!container) return;
    const cards = Array.from(container.querySelectorAll("[data-observe]"));

    if (prefersReducedMotion) {
      cards.forEach((c) => {
        c.classList.remove("opacity-0", "translate-y-6", "scale-[0.995]");
        c.classList.add("opacity-100", "translate-y-0", "scale-100");
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.remove("opacity-0", "translate-y-6", "scale-[0.995]");
            el.classList.add("opacity-100", "translate-y-0", "scale-100");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  const initials = (name) =>
    name
      .split(" ")
      .map((n) => n[0] ?? "")
      .slice(0, 2)
      .join("")
      .toUpperCase();

  return (
    <section id="testimonial" className="max-w-7xl mx-auto px-4 py-12">
      <header className="mb-8 text-center">
        <h2 className="md:text-4xl text-2xl font-bold font-serif">
          What people are saying
        </h2>
        <p className="text-sm text-gray-400 mt-2 max-w-2xl mx-auto">
          Real feedback from clients who trusted us — concise, honest, and
          glowing.
        </p>
      </header>

      <main
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
      >
        {testimonials.map((review, idx) => (
          <article
            key={`${review.name}-${idx}`}
            data-observe
            aria-label={`Testimonial from ${review.name}`}
            className={
              [
               
                "flex flex-col justify-between p-6 rounded-xl h-full",
                "bg-black/50", 
                "backdrop-blur-sm", 
                "border border-white/8", 
                "shadow-md", 
             
                "opacity-0 translate-y-6 scale-[0.995] transition-all duration-700 ease-out",
              ].join(" ")
            }
            style={{
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            <div className="mb-4">
             
              <div className="rounded-md px-1 py-0.5">
                <p
                  className="text-sm md:text-base text-gray-100 leading-relaxed"
                  style={{
                   
                    textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                  }}
                >
                  <span className="text-[#FFAA33] text-3xl align-top mr-2">“</span>
                  {review.quote}
                  <span className="text-[#FFAA33] text-3xl align-bottom ml-2">”</span>
                </p>
              </div>
            </div>

            <footer className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-100">
                  {review.name}
                </p>
                <p className="text-xs text-gray-300">{review.company}</p>
              </div>

              <div
                className="flex items-center justify-center w-10 h-10 rounded-full font-medium text-white"
                style={{
                  background: `linear-gradient(135deg, hsl(${(idx * 73) % 360} 70% 45%), hsl(${(idx *
                    137) %
                    360} 65% 55%))`,
                  boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
                }}
                aria-hidden
              >
                {initials(review.name)}
              </div>
            </footer>
          </article>
        ))}
      </main>
    </section>
  );
};

export default Testimonial;