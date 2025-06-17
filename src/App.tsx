"use client";

import { useState } from "react";
import GeometricBackground from "./components/GeometricBackground";
import Hero from "./components/sections/Hero";
import WorksPage from "./components/sections/Work";
import ContactPage from "./components/sections/ContactPage";
import Navigation from "./components/Navigation";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("home");

  if (currentPage === "contact") {
    return <ContactPage onBack={() => setCurrentPage("home")} />;
  }

  if (currentPage === "works") {
    return <WorksPage onBack={() => setCurrentPage("home")} />;
  }
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden font-sf">
      <GeometricBackground />

      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="space-y-5">
        {" "}
        <Hero />
      </main>
    </div>
  );
}
