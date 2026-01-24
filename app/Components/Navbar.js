"use client";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isActive, setIsActive] = useState("home");
  const navItems = [
    "home",
    "products",
    "features",
    "why us",
    "impact",
    "testimonials",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ids = [...navItems, "contact"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) setIsOpen(false);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      console.warn(`${id} section not found!`);
    }
  };

  return (
    <>
      <nav
        className="hidden tablet:flex md:flex items-center justify-between px-6 py-4 z-50 fixed top-0 w-full pointer-events-none"
        aria-label="Primary"
      >
        <h1
          className="text-2xl flex cursor-pointer items-center pointer-events-auto hover:animate-pulse transition-all duration-300 active:scale-95"
          onClick={() => {
            setIsActive("home");
            handleScroll("home");
          }}
        >
          <span className="ml-1 text-white/90">Neuro</span>
          <span className="font-semibold pl-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-400">
            VR
          </span>
        </h1>

        <ul
          className="absolute left-1/2 transform -translate-x-1/2 pointer-events-auto flex items-center space-x-2 bg-black/20 backdrop-blur-md border border-white/10 shadow-lg rounded-full px-2 py-1.5 max-w-[80%] overflow-x-auto"
          role="menubar"
        >
          {navItems.map((items) => (
            <li
              key={items}
              role="menuitem"
              className={`px-5 py-2 whitespace-nowrap rounded-full cursor-pointer font-mono text-sm transition-all duration-300 ${
                isActive === items
                  ? "bg-gradient-to-r from-blue-500 to-blue-400 text-white font-semibold shadow-md"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => {
                setIsActive(items);
                handleScroll(items);
              }}
            >
              {items.charAt(0).toUpperCase() + items.slice(1)}
            </li>
          ))}
        </ul>

        <div className="pointer-events-auto">
          <button
            className={`bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-full px-5 py-2 hover:scale-105 transition active:scale-95 text-sm shadow-md font-medium ${
              isActive === "contact" ? " ring-2 ring-blue-400/60 shadow-lg shadow-blue-400 animate-pulse" : ""
            }`}
            onClick={() => {
              setIsActive("contact");
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact us
          </button>
        </div>
      </nav>

      <nav
        className="flex tablet:hidden md:hidden items-center justify-center z-[100] fixed top-4 w-full px-4"
        aria-label="Mobile primary"
      >
        {!isOpen && (
          <div className="w-full max-w-lg bg-black/30 backdrop-blur-md border border-white/10 shadow-xl rounded-full px-4 py-3 flex items-center justify-between transition-all duration-300">
            <h1
              className="text-xl flex cursor-pointer items-center active:scale-95"
              onClick={() => {
                setIsActive("home");
                handleScroll("home");
              }}
            >
              <span className="ml-1 text-white/90">Neuro</span>
              <span className="font-semibold pl-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-400">
                VR
              </span>
            </h1>

            <button
              aria-label="Open menu"
              onClick={() => setIsOpen(true)}
              className="p-1 rounded-full hover:bg-white/10 transition active:scale-95 text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        )}

        {isOpen && (
          <div
            ref={overlayRef}
            onClick={handleOverlayClick}
            className="fixed inset-0 z-[100] flex flex-col items-center pt-4 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          >
            <div className="w-full max-w-lg bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl transform transition-all duration-300 scale-100 opacity-100">
              <div className="flex items-center justify-between mb-8">
                <h1
                  className="text-2xl flex cursor-pointer items-center"
                  onClick={() => {
                    setIsOpen(false);
                    setIsActive("home");
                    handleScroll("home");
                  }}
                >
                  <span className="ml-1 text-white/90">Neuro</span>
                  <span className="font-semibold pl-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">
                    VR
                  </span>
                </h1>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition active:scale-95 text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li
                    key={item}
                    className={`px-6 py-4 rounded-xl cursor-pointer text-center font-mono text-lg transition-all duration-200 border border-transparent ${
                      isActive === item
                        ? "bg-gradient-to-r from-blue-600/50 to-teal-500/50 border-white/10 text-white font-semibold shadow-inner"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                    onClick={() => {
                      setIsActive(item);
                      setIsOpen(false);
                      handleScroll(item);
                    }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </li>
                ))}

                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsActive("contact");
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`mt-4 w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-xl px-6 py-4 hover:opacity-90 transition active:scale-95 font-semibold shadow-lg ${
                    isActive === "contact" ? "animate-pulse ring-2 ring-blue-400/60 shadow-lg" : ""
                  }`}
                >
                  Contact Us
                </button>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
