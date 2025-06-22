"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IconX, IconCalendar, IconUsers } from "@tabler/icons-react";
import { Badge } from "./badge";
import { Project } from "@/data/type";
import ContentBlockRenderer from "../ContentBlockRenderer";

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  index?: number;
  onClose: () => void;
}

const colorVarients = [
  // Purple holographic variant - enhanced glassmorphism
  {
    bg: "bg-gradient-to-br from-purple-500/10 via-pink-500/8 to-blue-500/10",
    bgOverlay:
      "bg-gradient-to-br from-purple-400/20 via-pink-400/15 to-blue-400/20",
    glassBg: "bg-white/[0.02]",
    glassBlur: "backdrop-blur-3xl",
    innerGlass:
      "bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-white/[0.06]",
    border: "border-purple-300/25",
    borderHover: "hover:border-purple-300/50",
    accent: "#c084fc",
    textColor: "text-white",
    subtitleColor: "text-purple-100/90",
    shadowColor: "shadow-purple-500/30",
    glowColor: "shadow-purple-400/60",
    orb1: "from-purple-400/70 to-pink-400/70",
    orb2: "from-blue-400/70 to-cyan-400/70",
    statusBg: "bg-purple-500/15",
    statusBorder: "border-purple-400/30",
    metaBg: "bg-white/[0.08]",
    metaBorder: "border-white/20",
  },
  // Pink/Red holographic variant
  {
    bg: "bg-gradient-to-br from-pink-500/10 via-red-500/8 to-orange-500/10",
    bgOverlay:
      "bg-gradient-to-br from-pink-400/20 via-red-400/15 to-orange-400/20",
    glassBg: "bg-white/[0.02]",
    glassBlur: "backdrop-blur-3xl",
    innerGlass:
      "bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-white/[0.06]",
    border: "border-pink-300/25",
    borderHover: "hover:border-pink-300/50",
    accent: "#f472b6",
    textColor: "text-white",
    subtitleColor: "text-pink-100/90",
    shadowColor: "shadow-pink-500/30",
    glowColor: "shadow-pink-400/60",
    orb1: "from-pink-400/70 to-red-400/70",
    orb2: "from-orange-400/70 to-yellow-400/70",
    statusBg: "bg-pink-500/15",
    statusBorder: "border-pink-400/30",
    metaBg: "bg-white/[0.08]",
    metaBorder: "border-white/20",
  },
  // Green/Teal holographic variant
  {
    bg: "bg-gradient-to-br from-emerald-500/10 via-teal-500/8 to-cyan-500/10",
    bgOverlay:
      "bg-gradient-to-br from-emerald-400/20 via-teal-400/15 to-cyan-400/20",
    glassBg: "bg-white/[0.02]",
    glassBlur: "backdrop-blur-3xl",
    innerGlass:
      "bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-white/[0.06]",
    border: "border-emerald-300/25",
    borderHover: "hover:border-emerald-300/50",
    accent: "#34d399",
    textColor: "text-white",
    subtitleColor: "text-emerald-100/90",
    shadowColor: "shadow-emerald-500/30",
    glowColor: "shadow-emerald-400/60",
    orb1: "from-emerald-400/70 to-teal-400/70",
    orb2: "from-cyan-400/70 to-blue-400/70",
    statusBg: "bg-emerald-500/15",
    statusBorder: "border-emerald-400/30",
    metaBg: "bg-white/[0.08]",
    metaBorder: "border-white/20",
  },
  // Blue/Indigo holographic variant
  {
    bg: "bg-gradient-to-br from-blue-500/10 via-indigo-500/8 to-purple-500/10",
    bgOverlay:
      "bg-gradient-to-br from-blue-400/20 via-indigo-400/15 to-purple-400/20",
    glassBg: "bg-white/[0.02]",
    glassBlur: "backdrop-blur-3xl",
    innerGlass:
      "bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-white/[0.06]",
    border: "border-blue-300/25",
    borderHover: "hover:border-blue-300/50",
    accent: "#60a5fa",
    textColor: "text-white",
    subtitleColor: "text-blue-100/90",
    shadowColor: "shadow-blue-500/30",
    glowColor: "shadow-blue-400/60",
    orb1: "from-blue-400/70 to-indigo-400/70",
    orb2: "from-purple-400/70 to-pink-400/70",
    statusBg: "bg-blue-500/15",
    statusBorder: "border-blue-400/30",
    metaBg: "bg-white/[0.08]",
    metaBorder: "border-white/20",
  },
  // Rose/Magenta holographic variant
  {
    bg: "bg-gradient-to-br from-rose-500/10 via-fuchsia-500/8 to-violet-500/10",
    bgOverlay:
      "bg-gradient-to-br from-rose-400/20 via-fuchsia-400/15 to-violet-400/20",
    glassBg: "bg-white/[0.02]",
    glassBlur: "backdrop-blur-3xl",
    innerGlass:
      "bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-white/[0.06]",
    border: "border-rose-300/25",
    borderHover: "hover:border-rose-300/50",
    accent: "#fb7185",
    textColor: "text-white",
    subtitleColor: "text-rose-100/90",
    shadowColor: "shadow-rose-500/30",
    glowColor: "shadow-rose-400/60",
    orb1: "from-rose-400/70 to-fuchsia-400/70",
    orb2: "from-violet-400/70 to-purple-400/70",
    statusBg: "bg-rose-500/15",
    statusBorder: "border-rose-400/30",
    metaBg: "bg-white/[0.08]",
    metaBorder: "border-white/20",
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
                <div className="flex items-start justify-between mb-2">
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
                    className="p-3 backdrop-blur-lg"
                    whileHover={{ scale: 1.05 }}
                    style={{ border: "none", background: "transparent" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconX
                      size={30}
                      stroke={2}
                      className="text-red-400 hover:text-red-300 transition-colors duration-200"
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
                {project.contentBlocks && project.contentBlocks.length > 0 ? (
                  <ContentBlockRenderer blocks={project.contentBlocks} />
                ) : (
                  //Fallback
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
                )}
                {/* Description */}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
