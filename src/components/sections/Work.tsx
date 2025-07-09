"use client";

import { motion } from "framer-motion";
import { IconArrowLeft } from "@tabler/icons-react";
import GeometricBackground from "../GeometricBackground";
import { WorkSection } from "./Project";

interface WorksPageProps {
  onBack: () => void;
}

export default function WorksPage({ onBack }: WorksPageProps) {
  return (
    <div className="min-h-screen min-w-screen bg-black text-white relative overflow-x-hidden font-sf">
      <GeometricBackground />

      {/* Header */}
      <motion.header
        className="relative p-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.button
            onClick={onBack}
            className="flex items-center space-x-3 text-gray-400 text-lg
            hover:text-white bg-transparent transition-colors duration-300 group"
            style={{ backgroundColor: "transparent", border: "none" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconArrowLeft
              size={20}
              stroke={1.5}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
            <span className="font-light tracking-wide">Back to Home</span>
          </motion.button>

          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-sf"
            whileHover={{ scale: 1.05 }}
          >
            MN
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative py-8 px-6">
        <div className="mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
            />
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-medium 
                bg-gradient-to-r from-[#bfd7fd] to-[#d4acc2] bg-clip-text text-transparent 
                tracking-wide "
            >
              ALL WORKS
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed tracking-wide ">
              A comprehensive showcase of projects that reflect my interests
              across hardware, software and design.
            </p>
          </motion.div>
        </div>
      </section>

      <WorkSection />
      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "150px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
            />

            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-medium tracking-wide 
              bg-gradient-to-l from-purple-400 via-pink-400 to-purple-600 
              bg-clip-text text-transparent "
            >
              INTERESTED IN COLLABORATION?
            </motion.h2>
            <p className="text-lg max-w-2xl mx-auto tracking-wide">
              I'm always open to meaningful collaborations-whether it's
              building, designing, optimizing systems or exploring research
              opportunities. If you have an idea or opportunity in mind, feel
              free to get in touch.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
