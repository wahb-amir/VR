"use client";
import React, { useEffect, useRef, useState } from "react";
import { Atom, History, Rocket, X } from "lucide-react";
import Image from "next/image";

export default function Products() {
  const data = [
    {
      heading: "Biology Explorer",
      desc: "Journey inside a plant cell or dissect a virtual frog. Biology comes to life in stunning VR.",
      icon: Atom,
      img: "/bio.webp",
    },
    {
      heading: "History Voyager",
      desc: "Walk the streets of ancient Rome or witness pivotal historical events as if you were there.",
      icon: History,
      img: "/history.webp",
    },
    {
      heading: "Space Explorer",
      desc: "Explore the solar system, walk on Mars, and command your own spaceship in this cosmic adventure.",
      icon: Rocket,
      img: "/space.webp",
    },
  ];

  // Modal state
  const [openItem, setOpenItem] = useState(null); // holds the item object when modal is open
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Close modal helper
  const closeModal = () => setOpenItem(null);

  // Handle Escape and focus management + body scroll lock
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (openItem) {
      window.addEventListener("keydown", onKey);
      // lock scroll
      document.body.style.overflow = "hidden";
      // focus close button after a tick
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openItem]);

  // Overlay click: close only when clicking backdrop
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) closeModal();
  };

  return (
    <section id="products" className="py-16 "
    >
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-white font-sans">
            Our Educational VR Applications
          </h2>
          <p className="mt-3 text-lg text-white/70 mx-auto max-w-2xl">
            Explore our suite of applications designed to make learning an
            unforgettable adventure.
          </p>
        </header>

        <div
          role="list"
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          {data.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article
                role="listitem"
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-800 p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={item.img}
                    alt={item.heading}
                    fill
                    priority
                    className="object-cover opacity-80 rounded-lg"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-300 backdrop-blur-2xl text-white shadow-sm">
                      <Icon className="w-6 h-6" aria-hidden />
                    </span>

                    <h3 className="text-xl font-semibold text-white">
                      {item.heading}
                    </h3>
                  </div>

                  <p className="mt-2 text-white/70">{item.desc}</p>

                  {/* push button to bottom */}
                  <div className="mt-auto flex items-center gap-3">
                    <button
                      onClick={() => setOpenItem({ ...item, idx })}
                      className="px-4 py-2 rounded-full bg-gray-700 text-white font-medium shadow-sm hover:scale-105 transition-transform duration-200 w-full"
                      aria-label={`Open ${item.heading} demo`}
                    >
                      View demo
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {openItem && (
        <div
          ref={overlayRef}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          aria-hidden={!openItem}
        >
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* dialog */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${openItem.heading} demo`}
            className="relative z-10 w-full max-w-3xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 shadow-2xl"
          >
            {/* header: image + close */}
            <div className="relative w-full h-64 sm:h-80">
              <Image
                src={openItem.img}
                alt={openItem.heading}
                fill
                className="object-cover"
              />

              <button
                ref={closeBtnRef}
                onClick={closeModal}
                className="absolute right-4 top-4 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Close demo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* body */}
            <div className="p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-sm">
                  {openItem.icon && React.createElement(openItem.icon, {
                    className: "w-6 h-6",
                    "aria-hidden": true
                  })}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{openItem.heading}</h3>
                  <p className="text-white/70 mt-2">{openItem.desc}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-gray-600 px-4 py-2 text-white font-medium shadow-sm">
                  Launch demo
                </button>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white"
                >
                  More info →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
