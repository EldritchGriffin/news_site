"use client";
import React, { useEffect, useRef, useState } from "react";

export default function InfiniteLoop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const positionRef = useRef(0);
  const requestRef = useRef<number | undefined>(undefined);

  const newsItems = [
    "Breaking: Market hits all-time high!",
    "Weather update: Sunny week ahead.",
    "Sports: Local team wins championship.",
    "Politics: New reforms announced.",
    "Tech: New iPhone released.",
  ];

  const speed = 0.5; // pixels per frame

  // animation loop
  const animate = () => {
    if (!isPaused && containerRef.current) {
      positionRef.current -= speed;
      const el = containerRef.current;
      const totalWidth = el.scrollWidth / 2;
      if (-positionRef.current >= totalWidth) {
        positionRef.current = 0;
      }
      el.style.transform = `translateX(${positionRef.current}px)`;
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [isPaused]);

  return (
    <div
      className="w-full h-[40px] p-2 border border-gray-300 overflow-hidden flex items-center relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={containerRef}
        className="flex whitespace-nowrap absolute left-0 top-1/2 -translate-y-1/2"
        style={{ willChange: "transform" }}
      >
        {[...newsItems, ...newsItems].map((item, index) => (
          <span
            key={index}
            className="mx-8 text-sm hover:text-red-500 transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
