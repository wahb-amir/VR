"use client";
import React, { useEffect, useRef, useState } from "react";
import { User } from "lucide-react";

export default function Workflow() {
  const chat = [
    { from: "student", text: "Why pick your VR for class? 🤔" },

    { from: "system", text: "Immersive labs — walk right into a cell. 🔬" },
    { from: "system", text: "Also planets, history streets... vibe checks. 🌍" },

    { from: "student", text: "Wait, so it's actually fun? 😅" },

    { from: "system", text: "Low-key fun. Hands-on stuff = way less snooze. 😄" },
    { from: "system", text: "Quick micro-tasks keep attention locked. 🎯" },

    { from: "student", text: "Is experimenting safe tho? 🔥" },

    { from: "system", text: "You can blow up a lab in VR zero risk. Boom. 💥" },
    { from: "system", text: "Then learn what NOT to do IRL — instant lesson. 👍" },

    { from: "student", text: "Teachers get analytics? 👀" },

    { from: "system", text: "Yup — quick metrics so you actually know who's learning. 📊" },
    { from: "system", text: "And easy controls; no PhD required. 🧑‍🏫" },

    { from: "student", text: "Aight, I'm sold. Show me a demo pls 😎" },
  ];

  const [displayed, setDisplayed] = useState([]); 
  const [typingText, setTypingText] = useState(""); 
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef(null);
  const outerRef = useRef(null);
  const timersRef = useRef([]);
  const startedRef = useRef(false); 
  const cancelledRef = useRef(false);

  const rand = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const sleep = (ms) =>
    new Promise((res) => {
      const t = setTimeout(res, ms);
      timersRef.current.push(t);
    });

  useEffect(() => {
    const node = outerRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (let e of entries) {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            runSequence();
            break;
          }
        }
      },
      { threshold: 0.45 }
    );
    obs.observe(node);
    return () => {
      obs.disconnect();
    };
  }, []);

  const runSequence = async () => {
    cancelledRef.current = false;
    for (let i = 0; i < chat.length; i++) {
      if (cancelledRef.current) return;
      const msg = chat[i];

      if (msg.from === "system") {
        setIsTyping(true);
        setTypingText("");

        for (let j = 0; j < msg.text.length; j++) {
          if (cancelledRef.current) return;
          await sleep(rand(12, 55));
          setTypingText((s) => s + msg.text[j]);
        }

        await sleep(rand(220, 480));

        setDisplayed((d) => [...d, msg]);
        setTypingText("");
        setIsTyping(false);

        await sleep(rand(120, 300));
      } else {

        await sleep(rand(160, 380));
        setDisplayed((d) => [...d, msg]);
        await sleep(rand(120, 280));
      }
      const el = containerRef.current;
      if (el) {
        const t = setTimeout(() => {
          try {
            el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
          } catch (e) {}
        }, 70);
        timersRef.current.push(t);
      }
    }
  };

  // cleanup on unmount or if rerun
  useEffect(() => {
    return () => {
      cancelledRef.current = true;
      timersRef.current.forEach((t) => clearTimeout(t));
      timersRef.current = [];
    };
  }, []);

  return (
    <section id="workflow" className="py-16  to-gray-800/20 backdrop-blur-3xl rounded-xl " ref={outerRef}>

      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-6">
           <h1 className="text-4xl font-sans font-bold text-white">
            Why Choose VR for Education?
          </h1>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-xl border border-white/6 transition-transform duration-500 border"
          style={{ background: "linear-gradient(180deg,#0f1113,#121214)" }}
        >
          <div className="p-5">
            <div
              ref={containerRef}
              className="bg-gradient-to-b from-gray-900/30 to-gray-900/10 rounded-xl p-3 max-h-[380px] overflow-auto space-y-3 backdrop-blur-sm"
            >
              {/* rendered messages */}
              {displayed.map((m, i) => {
                const isStudent = m.from === "student";
                return (
                  <div
                    key={i}
                    className={`flex gap-3 items-end ${
                      isStudent ? "justify-end" : "justify-start"
                    }`}
                  >
                    {!isStudent && (
                      <div className="w-9 h-9 rounded-full bg-gray-700/60 flex items-center justify-center text-white/90 shrink-0 animate-pulse">
                        <User className="w-4 h-4 opacity-90" />
                      </div>
                    )}

                    <div
                      className={`max-w-[78%] px-4 py-2 rounded-2xl text-sm leading-snug ${
                        isStudent
                          ? "bg-gray-800 text-white/90 rounded-br-none"
                          : "bg-gray-200/6 text-white rounded-bl-none"
                      }`}
                      style={{
                        boxShadow: isStudent
                          ? "0 8px 24px rgba(0,0,0,0.6)"
                          : "0 8px 24px rgba(2,6,23,0.6)",
                        transform: "translateY(0)",
                        transition: "transform 220ms ease, opacity 220ms ease",
                      }}
                    >
                      <div className="break-words">{m.text}</div>
                      <div className="text-xs text-white/40 mt-1 text-right">
                        {isStudent ? "" : "bot"}
                      </div>
                    </div>

                    {isStudent && (
                      <div
                        className="w-9 h-9 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center text-white shrink-0 "
                        style={{ animationDuration: "900ms" }}
                      >
                        <span className="text-xs font-medium">S</span>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* active typing bubble */}
              {isTyping && (
                <div className="flex gap-3 items-end justify-start">
                  <div className="w-9 h-9 rounded-full bg-gray-700/60 flex items-center justify-center text-white/90 shrink-0 animate-pulse">
                    <User className="w-4 h-4 opacity-90" />
                  </div>
                  <div className="px-4 py-2 rounded-2xl bg-gray-700/60 text-white/70 text-sm">
                    <span className="inline-block">
                      {typingText}
                      <span className="inline-block ml-1 w-2 h-3 align-middle">
                        <span className="inline-block animate-blink">|</span>
                      </span>
                    </span>
                    <div className="text-xs text-white/40 mt-1 text-right">bot</div>
                  </div>
                </div>
              )}

              {/* queued indicator */}
              {!isTyping && displayed.length < chat.length && (
                <div className="flex items-center gap-3 justify-start opacity-80">
                  <div className="w-9 h-9 rounded-full bg-gray-700/60 flex items-center justify-center text-white/90 shrink-0">
                    <User className="w-4 h-4 opacity-90" />
                  </div>
                  <div className="px-4 py-2 rounded-2xl bg-gray-700/60 text-white/60 text-sm">
                    <span className="inline-block animate-pulse">...</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="px-5 py-3 border-t border-white/6 text-xs text-white/40 text-right">
            real-time · playful · teacher-friendly
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          50.1%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
