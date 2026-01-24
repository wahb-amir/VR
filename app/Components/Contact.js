"use client";
import React, { useState } from "react";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const inter = Inter({ subsets: ["latin"] });

const safariTextFixStyle = {
  // Force Safari to paint text correctly when backdrop-filters / blurs are present
  WebkitTextFillColor: "currentColor",
  WebkitTextStroke: "0.01px transparent",
  WebkitFontSmoothing: "antialiased",
  transform: "translateZ(0)",
  backfaceVisibility: "hidden",
  mixBlendMode: "normal",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "VR Development",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <section
      className={`min-h-screen text-white flex items-center justify-center overflow-hidden relative z-10 antialiased ${inter.className}`}
      id="contact"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10 w-full max-w-7xl">
        <div
          // big decorative heading — Safari text fix applied
          className={`hidden lg:block text-[12rem] leading-none text-white italic tracking-tighter ${playfair.className}`}
          style={safariTextFixStyle}
        >
          Let's
        </div>

        {/* Form card */}
        <div className="w-full max-w-xl mx-4">
          <div
            className="backdrop-blur-sm bg-white/5 border border-blue-400/30 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group transition-all duration-500 hover:border-blue-300 hover:shadow-blue-500/20"
            // apply safari text fix to the card as well (backdrop-blur often causes the issue)
            style={safariTextFixStyle}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-blue-700/5 pointer-events-none" />

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 to-white p-[2px]">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-xs font-bold">
                  NVR
                </div>
              </div>
              <div>
                <p className="text-blue-400 text-sm">We are NeuroVR</p>
                <p className="text-white font-medium">
                  Ready to build the future?
                </p>
              </div>
            </div>

            {!isSent ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 text-xl md:text-2xl leading-relaxed text-gray-300"
              >
                <p>
                  Hi there! My name is
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mx-2 bg-transparent border-b-2 border-blue-600 focus:border-blue-400 outline-none text-white placeholder-blue-300 w-40 transition-colors"
                    // ensure inputs also respect text-fill on problematic Safari builds:
                    style={{ WebkitTextFillColor: "currentColor" }}
                  />
                  .
                </p>

                <p>
                  I'm looking for help with 
                  <select 
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="mx-2 bg-transparent border-b-2 border-gray-600 focus:border-blue-400 outline-none text-blue-300 font-medium cursor-pointer transition-colors appearance-none"
                    style={{ WebkitTextFillColor: "currentColor" }}
                  >
                    <option className="bg-neutral-900 text-white" value="VR Software">VR Software</option>
                    <option className="bg-neutral-900 text-white" value="AR Integration">AR Integration</option>
                    <option className="bg-neutral-900 text-white" value="3D Modeling">3D Modeling</option>
                    <option className="bg-neutral-900 text-white" value="Consulting">Consulting</option>
                  </select>
                  .
                </p>

                <p>
                  You can reach me at
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="mx-2 bg-transparent border-b-2 border-blue-600 focus:border-blue-400 outline-none text-white placeholder-blue-300 w-full sm:w-64 transition-colors"
                    style={{ WebkitTextFillColor: "currentColor" }}
                  />
                  to discuss details.
                </p>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full py-4 bg-blue-400 text-black font-semibold rounded-xl overflow-hidden transition-all hover:scale-[1.02]"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Received!
                </h3>
                <p className="text-gray-400">
                  Thanks, {formData.name}. We'll be in touch shortly.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-6 text-sm text-blue-400 hover:text-blue-300 underline"
                >
                  Send another?
                </button>
              </div>
            )}
          </div>
        </div>

        <div
          className={`hidden lg:block text-[12rem] leading-none text-white italic tracking-tighter ${playfair.className}`}
          style={safariTextFixStyle}
        >
          Talk
        </div>

        <div
          className={`lg:hidden absolute top-10 left-0 w-full text-center text-6xl text-white/10 font-bold -z-10 ${playfair.className}`}
          style={safariTextFixStyle}
        >
          Let's Talk
        </div>
      </div>
    </section>
  );
};

export default Contact;
