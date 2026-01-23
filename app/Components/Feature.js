"use client";
import React, { useEffect, useRef, useState } from "react";
import { User } from "lucide-react";

export default function Features() {
  const chat = [
    { from: "student", text: "Why pick your VR for class? 🤔" },
    { from: "system", text: "Immersive labs — walk right into a cell. 🔬" },
    {
      from: "system",
      text: "Also planets, history streets... vibe checks. 🌍",
    },
    { from: "student", text: "Wait, so it's actually fun? 😅" },
    {
      from: "system",
      text: "Low-key fun. Hands-on stuff = way less snooze. 😄",
    },
    { from: "system", text: "Quick micro-tasks keep attention locked. 🎯" },
    { from: "student", text: "Is experimenting safe tho? 🔥" },
    { from: "system", text: "You can blow up a lab in VR zero risk. Boom. 💥" },
    {
      from: "system",
      text: "Then learn what NOT to do IRL — instant lesson. 👍",
    },
    { from: "student", text: "Teachers get analytics? 👀" },
    {
      from: "system",
      text: "Yup — quick metrics so you actually know who's learning. 📊",
    },
    { from: "system", text: "And easy controls; no PhD required. 🧑‍🏫" },
    { from: "student", text: "Aight, I'm sold. Show me a demo pls 😎" },
  ];

  const features = [
    {
      title: "Immersive Labs",
      desc: "Step into cells, planets, and history streets.",
      icon: "🔬",
    },
    {
      title: "Safe Experiments",
      desc: "Learn by doing without real-world risk.",
      icon: "💥",
    },
    {
      title: "Analytics Dashboard",
      desc: "Track progress and performance easily.",
      icon: "📊",
    },
    {
      title: "Quick Setup",
      desc: "Teachers onboard in minutes, zero PhD required.",
      icon: "🧑‍🏫",
    },
  ];

  const [displayed, setDisplayed] = useState([]);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef(null);
  const outerRef = useRef(null);
  const timersRef = useRef([]);
  const startedRef = useRef(false);
  const cancelledRef = useRef(false);

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

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
      { threshold: 0.45 },
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

  useEffect(() => {
    return () => {
      cancelledRef.current = true;
      timersRef.current.forEach((t) => clearTimeout(t));
      timersRef.current = [];
    };
  }, []);

  return (
    <section className="py-16" ref={outerRef} id="feature">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Why Choose VR for Education?
        </h1>

        {/* chat box */}
        <div className="mb-12 relative rounded-2xl overflow-hidden shadow-xl border border-white/6 bg-gradient-to-b from-gray-900/80 to-gray-800/70 p-5">
          <div
            ref={containerRef}
            className="max-h-[380px] overflow-auto space-y-3 rounded-xl p-3 bg-gray-900/20 backdrop-blur-sm"
          >
            {displayed.map((m, i) => {
              const isStudent = m.from === "student";
              return (
                <div
                  key={i}
                  className={`flex gap-3 items-end ${isStudent ? "justify-end" : "justify-start"}`}
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
                    }}
                  >
                    <div>{m.text}</div>
                    <div className="text-xs text-white/40 mt-1 text-right">
                      {isStudent ? "" : "bot"}
                    </div>
                  </div>
                  {isStudent && (
                    <div className="w-9 h-9 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center text-white shrink-0">
                      <span className="text-xs font-medium">S</span>
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div className="flex gap-3 items-end justify-start">
                <div className="w-9 h-9 rounded-full bg-gray-700/60 flex items-center justify-center text-white/90 shrink-0 animate-pulse">
                  <User className="w-4 h-4 opacity-90" />
                </div>
                <div className="px-4 py-2 rounded-2xl bg-gray-700/60 text-white/70 text-sm">
                  <span>
                    {typingText}
                    <span className="inline-block ml-1 w-2 h-3 align-middle">
                      <span className="animate-blink inline-block">|</span>
                    </span>
                  </span>
                  <div className="text-xs text-white/40 mt-1 text-right">
                    bot
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gray-800/50 backdrop-blur-md rounded-xl p-5 flex flex-col items-start hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-white/60 text-sm">{f.desc}</p>
            </div>
          ))}
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
