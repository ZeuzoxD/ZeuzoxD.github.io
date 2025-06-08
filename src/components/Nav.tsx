"use client";
import { motion } from "framer-motion";
import Work from "./sections/Work";

interface NavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Nav({ activeSection, setActiveSection }: NavProps) {
  if (activeSection === "works") {
    return <Work onBack={() => setActiveSection("about")} />;
  }

  return (
    <div>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 p-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-sf"
            whileHover={{ scale: 1.05 }}
          >
            MN
          </motion.div>

          <div className="flex space-x-8">
            {["ABOUT", "WORKS", "CONTACT"].map((item) => (
              <motion.button
                key={item}
                style={{ border: "none" }}
                className={`relative px-4 py-2 text-sm font-medium bg-clip-text transition-colors font-sf ${
                  activeSection === item.toLowerCase()
                    ? "text-purple-400"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveSection(item.toLowerCase())}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
