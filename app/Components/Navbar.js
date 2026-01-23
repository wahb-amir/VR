"use client";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isActive, setIsActive] = useState("home");
  const navItems = ["home", "products", "feature",  "testimonial"];
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    // close on Escape
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // close if clicking overlay
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
      {/* Desktop */}
      <nav
        className="hidden tablet:flex md:flex items-center gap-6 p-4 z-50 sticky top-4  bg-gradient-to-t"
        aria-label="Primary"
      >
        <h1
          className="text-2xl p-2 pb-0 m-1 ml-2 flex cursor-pointer items-center
                     border-b border-transparent hover:animate-pulse transition-all duration-300 active:scale-95"
          onClick={() => handleScroll("home")}
        >
          <span className="font-semibold text-white">N</span>
          <span className="ml-1 text-white/90">euro</span>
          <span className="font-semibold pl-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-400">
            VR
          </span>
        </h1>

        <ul
          className="absolute left-1/2 transform -translate-x-1/2
                     flex items-center space-x-3
                     bg-white/8 backdrop-blur-sm border border-white/10
                     rounded-full px-2 py-1 max-w-[80%] md:max-w-[60%] lg:max-w-[50%] overflow-x-auto"
          role="menubar"
        >
          {navItems.map((items) => (
            <li
              key={items}
              role="menuitem"
              className={`px-4 py-2 whitespace-nowrap rounded-full cursor-pointer font-mono text-sm transition-all duration-150 ${
                isActive === items
                  ? "bg-gradient-to-r from-blue-500 to-blue-400 text-white font-semibold shadow-md"
                  : "text-white/90 hover:bg-white/10"
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

        <div className="ml-auto pr-3">
          <button
            className="bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full px-4 py-2 hover:scale-95 transition active:scale-95 text-sm shadow-sm"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact us
          </button>
        </div>
      </nav>

      {/* Mobile */}
      <nav
        className="flex tablet:hidden md:hidden items-center m-2 z-[100] fixed top-4 left-1/2 transform -translate-x-1/2 w-[94%] max-w-xl"
        aria-label="Mobile primary"
      >
        <div
          className="w-full bg-white/6 backdrop-blur-sm border border-white/10 rounded-full px-3 py-2 flex items-center justify-between"
          style={{ backdropFilter: "blur(6px)" }}
        >
          <h1
            className="text-2xl p-2 pb-0 m-1 ml-2 flex cursor-pointer items-center transition-all duration-300 active:scale-95"
            onClick={() => handleScroll("home")}
          >
            <span className="font-semibold text-white">N</span>
            <span className="ml-1 text-white/90">euro</span>
            <span className="font-semibold pl-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">
              VR
            </span>
          </h1>

          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((s) => !s)}
            className="p-2 rounded-full hover:bg-white/10 transition active:scale-95"
          >
            <Menu className={`${isOpen ? "hidden" : "block"} text-white`} />
            <X className={`${isOpen ? "block" : "hidden"} text-white`} />
          </button>
        </div>

        {isOpen && (
          <div
            ref={overlayRef}
            onClick={handleOverlayClick}
            className="fixed inset-0 z-[90] flex items-start justify-center"
            aria-hidden={!isOpen}
          >
            {/* dim background (clickable to close) */}
            <div className="absolute inset-0 bg-black/50" />

            {/* menu panel */}
            <div
              className="relative mt-20 w-[92%] max-w-lg bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl p-5 z-50 shadow-xl"
              style={{
                transform: "translateY(0)",
                transition: "transform 220ms ease, opacity 220ms ease",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h1
                  className="text-2xl p-2 pb-0 m-1 ml-2 flex cursor-pointer items-center transition-all duration-300 active:scale-95"
                  onClick={() => {
                    setIsOpen(false);
                    handleScroll("home");
                  }}
                >
                  <span className="font-semibold text-white">N</span>
                  <span className="ml-1 text-white/90">euro</span>
                  <span className="font-semibold pl-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">
                    VR
                  </span>
                </h1>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-full hover:bg-white/10 transition active:scale-95"
                >
                  <X />
                </button>
              </div>

              <ul className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <li
                    key={item}
                    className={`px-4 py-3 rounded-full cursor-pointer text-center font-mono transition ${
                      isActive === item
                        ? "bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold shadow-md"
                        : "text-white/90 hover:bg-white/10"
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
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full px-6 py-2 hover:scale-95 transition active:scale-95 shadow-sm"
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
