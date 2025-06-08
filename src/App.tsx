"use client";

import GeometricBackground from "./components/GeometricBackground";
import Nav from "./components/Nav";
import FWork from "./components/sections/FWork";
import Hero from "./components/sections/Hero";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden font-sf">
      {/* Background Elements */}
      <GeometricBackground />
      {/* Main Content */}
      <main className="space-y-5">
        <Nav />
        <Hero />
        <FWork />
      </main>
    </div>
  );
}
