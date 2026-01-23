'use client'
import { useState, useEffect } from "react";

const GRID_SIZE = 80;

export default function Background() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const resize = () =>
      setSize({ w: window.innerWidth, h: window.innerHeight });

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", e =>
      setMouse({ x: e.clientX, y: e.clientY })
    );

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  const cols = Math.ceil(size.w / GRID_SIZE);
  const rows = Math.ceil(size.h / GRID_SIZE);

  return (
    <div className="fixed inset-0 bg-black z-0 overflow-y-hidden! max-w-screen max-h-full">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size.w} ${size.h}`}
        preserveAspectRatio="none"
      >
        {/* Grid */}
        {Array.from({ length: cols }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * GRID_SIZE}
            y1={0}
            x2={i * GRID_SIZE}
            y2={size.h}
            stroke="rgba(255,255,255,0.2)"
          />
        ))}

        {Array.from({ length: rows }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1={0}
            y1={i * GRID_SIZE}
            x2={size.w}
            y2={i * GRID_SIZE}
            stroke="rgba(255,255,255,0.2)"
          />
        ))}

        {Array.from({ length: cols }).map((_, x) =>
          Array.from({ length: rows }).map((_, y) => {
            const cx = x * GRID_SIZE;
            const cy = y * GRID_SIZE;
            const dist = Math.hypot(cx - mouse.x, cy - mouse.y);
            const near = dist < 185;

            return (
              <circle
                key={`c-${x}-${y}`}
                cx={cx}
                cy={cy}
                r={near ? 4 : 3}
                fill={near ? "#ffaa30" : "rgba(255,255,255,0.5)"}
              />
            );
          })
        )}
      </svg>
    </div>
  );
}
