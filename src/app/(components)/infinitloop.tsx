"use client";
import React from "react";

export default function InfinitLoop() {
  return (
    <div className="w-full p-2 border border-gray-300 overflow-hidden">
      <div
        className="flex cursor-pointer justify-end"
        style={{
          animation: "scroll 10s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        Your scrolling text here
      </div>
      <style jsx>{`
        @keyframes scroll {
          to {
            transform: translateX(-100%); /* Move completely outside on the left */
          }
        }

      `}</style>
    </div>
  );
}