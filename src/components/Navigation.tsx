"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  IconMenu2,
  IconX,
  IconHome,
  IconBriefcase,
  IconMail,
} from "@tabler/icons-react";

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navigation({
  currentPage,
  setCurrentPage,
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "HOME", icon: <IconHome size={20} /> },
    { id: "works", label: "WORKS", icon: <IconBriefcase size={20} /> },
    { id: "contact", label: "CONTACT", icon: <IconMail size={20} /> },
  ];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop & Mobile Header */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 p-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
            onClick={() => handleNavClick("home")}
            whileHover={{ scale: 1.05 }}
          >
            MN
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                style={{ border: "none" }}
                className={`relative px-4 py-2 text-sm font-medium tracking-wider bg-clip-text transition-colors  ${
                  currentPage === item.id
                    ? "text-purple-400"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => handleNavClick(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-3 backdrop-blur-md border text-[#BFD7FD] 
            border-white/10 rounded-full transition-all duration-300"
            style={{ background: "transparent", border: "none" }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}>
              {isMobileMenuOpen ? <IconX size={30} /> : <IconMenu2 size={30} />}
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 bg-black/30 backdrop-blur-xl border-l border-white/10 z-50 md:hidden"
            >
              <div className="p-6 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    MN
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ background: "transparent", border: "none" }}
                    className="p-2 bg-white/10 rounded-lg  transition-colors"
                  >
                    <IconX size={20} className="text-red-400" />
                  </button>
                </div>

                <div className="space-y-4 items-center">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      onClick={() => handleNavClick(item.id)}
                      style={{ background: "transparent", border: "none" }}
                      className={`w-full flex-col items-end justify-center space-x-4 space-y-4 p-4 rounded-xl transition-all duration-300 ${
                        currentPage === item.id
                          ? "text-purple-400 border-purple-500/30"
                          : "text-gray-400 hover:text-violet-300 hover:bg-white/5"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="font-medium">{item.label}</span>
                      {currentPage === item.id && (
                        <motion.div className="h-[2px] mt-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
