"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  IconX,
  IconBrandGithub,
  IconCalendar,
  IconUsers,
} from "@tabler/icons-react";
import { Badge } from "./badge";
import { Project } from "@/data/type";

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  index?: number;
  onClose: () => void;
}

const colorVarients = [
  //Purple varient
  {
    bg: "bg-gradient-to-br from-[#87439a]/15 to-[#3c1e27]/20",
    border: "border-[#a186be]/35",
    hover: "hover:bg-[#cfadee]/5",
    accent: "#a186be",
  },
  //Red
  {
    bg: "bg-gradient-to-br from-[#8f2323]/15 to-[#ee5684]/20",
    border: "border-[#ee5684]/35",
    hover: "hover:bg-[#ee5684]/5",
    accent: "#ee5684",
  },
  //Yellow
  {
    bg: "bg-gradient-to-br from-[#8f4c23]/15 to-[#ee9356]/20",
    border: "border-[#ee9356]/35",
    hover: "hover:bg-[#ee9356]/5",
    accent: "#ee9356",
  },
];

export default function ProjectDrawer({
  project,
  isOpen,
  index = 0,
  onClose,
}: ProjectDrawerProps) {
  if (!project) return null;

  const colors = colorVarients[index % colorVarients.length];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed top-0 right-0 h-full w-full max-w-2xl backdrop-blur-xl border-l
            bg-black/20 ${colors.border} z-50 overflow-hidden`}
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex-shrink-0 p-6 border-b border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex-col items-center space-y-2">
                    <h2 className="text-2xl lg:text-3xl tracking-wide font-bold text-white font-sf">
                      {project.title}
                    </h2>
                    <p
                      className={`text-lg text-purple-200 tracking-wide font-medium font-sf`}
                      style={{ color: colors.accent }}
                    >
                      {project.subtitle}
                    </p>
                  </div>

                  <motion.button
                    onClick={onClose}
                    className="p-3 hover:bg-white/10 rounded-xl transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconX
                      size={24}
                      stroke={1.5}
                      className="text-gray-400 hover:text-white"
                    />
                  </motion.button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                      {project.status}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <IconCalendar size={16} stroke={1.5} />
                      <span className="font-sf">{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <IconUsers size={16} stroke={1.5} />
                      <span className="font-sf">{project.team}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                    Project Overview
                  </h3>
                  <p className="leading-tight font-medium">
                    {project.longdescription}
                  </p>
                </motion.div>
              </div>

              {/* Images */}
              {project.image && project.image.length > 0 && (
                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                      Project Images
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {project.image.map((i, it) => (
                        <motion.img
                          key={it}
                          src={i}
                          alt={project.title}
                          className="w-full h-auto rounded-xl"
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
              {/* Footer Actions */}
              <div className="flex-shrink-0 p-6 border-t border-white/10">
                <div className="flex space-x-3">
                  <motion.a
                    href={project.codeLink}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 
                    px-4 bg-white/5 backdrop-blur-sm hover:bg-white/5 rounded-xl 
                    transition-all duration-300 border hover:border-white/20 
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <IconBrandGithub
                      size={20}
                      stroke={1.5}
                      className="text-purple-600"
                    />
                    <span className={`text-purple-400`}>View Code</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
