"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  IconX,
  IconTopologyStarRing3,
  IconCalendarMonth,
} from "@tabler/icons-react";
import { Badge } from "./badge";
import { Project } from "@/data/type";
import ContentBlockRenderer from "../ContentBlockRenderer";
import { colorVariants } from "../constants/colorVarients";

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  index?: number;
  onClose: () => void;
}

export default function ProjectDrawer({
  project,
  isOpen,
  index = 0,
  onClose,
}: ProjectDrawerProps) {
  if (!project) return null;

  const colors = colorVariants[index % colorVariants.length];

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
            className={`fixed top-0 right-0 h-full w-screen md:w-full max-w-2xl backdrop-blur-xl border-l
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
                      className={`text-lg text-purple-200 tracking-wide font-semibold font-sf`}
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
                      <IconCalendarMonth size={16} stroke={1.5} />
                      <span className="font-medium">{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <IconTopologyStarRing3 size={16} stroke={1.5} />
                      <span className="font-medium">{project.type}</span>
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
                      Error Loading the Project Details.
                    </h3>
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
