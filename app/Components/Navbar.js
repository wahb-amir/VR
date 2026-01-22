"use client";
import React from "react";
import { useState } from "react";
import { Menu, X, Info, ListCheck, Briefcase, Folder } from "lucide-react";

const Navbar = () => {
  const [isActive, setIsActive] = useState("home");
  const navItems = ["home", "about", "feature", "product"];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Desktop navbar */}
      <nav className="bg-transparent md:flex items-center gap-6 m-2 hidden ">
        <h1
          className="text-2xl p-2 pb-0 m-1 ml-2 flex cursor-pointer items-center 
               border-b border-transparent 
               hover:border-gray-200
               hover:animate-pulse
               transition-all duration-300 active:scale-95"
        >
          <p className="font-semibold text-gray-200">N</p>
          <p>euro</p>
          <p className="font-semibold pl-1 text-gray-300">VR</p>
        </h1>

        <ul
          className="flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2
             bg-white/20 backdrop-blur-3xl border border-white/30 rounded-full pt-0.5 pb-0.5 pl-1 pr-1"
        >
          {navItems.map((items) => {
            return (
              <li
                className={`px-4 py-2 hover:bg-[#FFAA33] rounded-full transition cursor-pointer font-mono ${isActive === items ? "bg-[#be8029] text-white font-semibold" : ""}`}
                onClick={() => setIsActive(items)}
                key={items}
              >
                {items}
              </li>
            );
          })}
        </ul>

        <button className="text-black bg-white rounded-full p-2 cursor-pointer pl-4 pr-4 hover:bg-gray-200 transition-all duration-100 active:scale-95 absolute right-1 transform -translate-x-1/2">
          Contact us
        </button>
      </nav>
      {/* Mobile navbar */}
      <nav className="bg-transparent flex items-center gap-6 m-2 md:hidden ">
        <h1
          className="text-2xl p-2 pb-0 m-1 ml-2 flex cursor-pointer items-center 
               border-b border-transparent 
               hover:border-gray-200
               hover:animate-pulse
               transition-all duration-300 active:scale-95"
        >
          <p className="font-semibold text-gray-200">N</p>
          <p>euro</p>
          <p className="font-semibold pl-1 text-gray-300">VR</p>
        </h1>

        <Menu
          className={`cursor-pointer transition-all duration-100 active:scale-95 absolute right-1 transform -translate-x-1/2 ${
            isOpen ? "hidden" : ""
          }`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        {isOpen && (
          <>
            <div
              className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            />

            <ul
              className={`absolute top-4 left-1/2 transform -translate-x-1/2
                flex flex-col space-y-4 bg-white/20 backdrop-blur-3xl border border-white/30
                rounded-2xl p-6 w-full max-w-full
                transition-all duration-300 ease-in-out
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"}`}
            >
              <h1
                className="text-2xl p-2 pb-0 m-1 ml-2 flex cursor-pointer items-center 
               border-b border-transparent 
               hover:border-gray-200
               hover:animate-pulse
               transition-all duration-300 active:scale-95 absolute top-1"
              >
                <p className="font-semibold text-gray-200">N</p>
                <p>euro</p>
                <p className="font-semibold pl-1 text-gray-300">VR</p>
              </h1>

              <div className="flex items-center ">
                <span className="flex-1"></span>
                <X
                  size={24}
                  className={`cursor-pointer relative z-50 transition-all duration-100 active:scale-95 ${
                    isOpen ? "" : "hidden"
                  }`}
                  onClick={() => setIsOpen(false)}
                />
              </div>

              {navItems.map((item) => (
                <li
                  key={item}
                  className={`px-6 py-2 rounded-full cursor-pointer font-mono transition-all border-t-white border mt-1
              ${isActive === item ? "bg-[#be8029] text-white font-semibold" : "hover:bg-[#FFAA33]"}`}
                  onClick={() => {
                    setIsActive(item);
                    setIsOpen(false);
                  }}
                >
                  {item}
                </li>
              ))}

              {/* Contact Button */}
              <button className="mt-4 bg-white text-black rounded-full px-6 py-2 hover:bg-gray-200 transition-all duration-150 active:scale-95">
                Contact Us
              </button>
            </ul>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
