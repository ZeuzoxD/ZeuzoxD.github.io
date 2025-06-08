"use client";

import { useState } from "react";
import GeometricBackground from "./components/GeometricBackground";
import Nav from "./components/Nav";
import Hero from "./components/sections/Hero";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden font-sf">
      {/* Background Elements */}
      <GeometricBackground />
      {/* Main Content */}
      <main className="space-y-5">
        <Nav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        {/* Only render Hero when not on works page */}
        {activeSection !== "works" && <Hero />}
      </main>
    </div>
  );
}
