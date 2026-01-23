"use client";
import React, { useState } from "react";

const footerColumns = [
  {
    title: "Resources",
    items: [
      { label: "Getting Started", href: "#getting-started" },
      { label: "Documentation", href: "#documentation" },
      { label: "Tutorials", href: "#tutorials" },
      { label: "API Reference", href: "#api" },
      { label: "Community Forums", href: "#forums" },
    ],
  },
  {
    title: "Platform",
    items: [
      { label: "Features", href: "#features" },
      { label: "Supported Devices", href: "#devices" },
      { label: "System Requirements", href: "#requirements" },
      { label: "Downloads", href: "#downloads" },
      { label: "Release Notes", href: "#releases" },
    ],
  },
  {
    title: "Community",
    items: [
      { label: "Events", href: "#events" },
      { label: "Meetups", href: "#meetups" },
      { label: "Conferences", href: "#conferences" },
      { label: "Hackathons", href: "#hackathons" },
      { label: "Jobs", href: "#jobs" },
    ],
  },
];

export default function Footer() {
  const [open, setOpen] = useState(
    footerColumns.reduce((acc, col) => ({ ...acc, [col.title]: false }), {}),
  );

  const toggle = (title) => setOpen((s) => ({ ...s, [title]: !s[title] }));

  return (
    <footer className="relative z-0 w-full bg-gradient-to-t from-gray-900 via-gray-900 to-gray-800 text-white border-t border-white/6">
      <div
        className="relative z-0 w-full px-6 py-12"
        style={{
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start max-w-[1200px] mx-auto">
          <div className="space-y-3">
            <a
              href="/"
              className="inline-flex items-baseline gap-2 text-lg font-semibold select-none"
            >
              <h1 className="text-2xl p-2 pb-0 m-1 ml-2 flex cursor-pointer items-center border-b border-transparent hover:border-gray-200 hover:animate-pulse transition-all duration-300 active:scale-95">
                {" "}
                <p className="font-semibold text-gray-200">N</p> <p>euro</p>{" "}
                <p className="font-semibold pl-1 text-gray-300">VR</p>{" "}
              </h1>
            </a>
            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              Building immersive experiences for modern platforms. Explore docs,
              downloads and community — everything you need to get started fast.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-800/60 hover:bg-gray-800/70 text-sm transition focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              ↑ Back to top
            </button>
          </div>

          <div className="hidden lg:grid lg:col-span-3 grid-cols-3 gap-6">
            {footerColumns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h4 className="text-sm font-semibold mb-3 text-gray-100">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-300 hover:text-white inline-block transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="lg:hidden col-span-1 sm:col-span-1">
            <div className="space-y-3">
              {footerColumns.map((col) => {
                const isOpen = open[col.title];
                return (
                  <div key={col.title} className="rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggle(col.title)}
                      aria-expanded={isOpen}
                      aria-controls={`panel-${col.title}`}
                      className="w-full flex items-center justify-between px-4 py-3 text-left bg-gray-800/50 hover:bg-gray-800/60 transition focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-lg"
                    >
                      <span className="font-semibold text-gray-100">
                        {col.title}
                      </span>
                      <span
                        className={`text-sm transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                        aria-hidden
                      >
                        ▾
                      </span>
                    </button>

                    <div
                      id={`panel-${col.title}`}
                      role="region"
                      aria-hidden={!isOpen}
                      className={`px-4 pt-2 pb-3 bg-gray-800/40 transition-all duration-200 ${
                        isOpen
                          ? "max-h-[800px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                      style={{ overflow: "hidden" }}
                    >
                      <ul className="space-y-2">
                        {col.items.map((item) => (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              className="block text-sm text-gray-200 hover:text-white transition-colors"
                              onClick={() =>
                                setOpen((s) => ({ ...s, [col.title]: false }))
                              }
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-[1200px] mx-auto">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} NeuroVR — All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#privacy"
              className="text-xs text-gray-300 hover:text-white transition"
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="text-xs text-gray-300 hover:text-white transition"
            >
              Terms
            </a>
            <a
              href="#contact"
              className="text-xs text-gray-300 hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
