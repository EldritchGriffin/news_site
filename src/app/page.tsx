import React from "react";
import  Hero  from "./components/Hero"; 

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 flex flex-col items-center min-h-screen w-full">
      <Hero />
    </main>
  );
}