import { motion } from "framer-motion";
import { Project } from "@/data/type";
import ProjectCard from "../ProjectCard";
import { IconGhost3 } from "@tabler/icons-react";

interface Props {
  projects: Project[];
  onClick?: (project: Project, index: number) => void;
}

export default function ProjectGrid({ projects, onClick }: Props) {
  if (projects.length === 0) {
    return (
      <motion.div
        className="relative col-span-full text-center mb-15 py-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative top-1 left-1/2 text-6xl mb-4"
          animate={{
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <IconGhost3 size={60} color="#ffbf00" />
        </motion.div>
        <motion.h3
          className="text-xl font-semibold tracking-wide text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          No Projects Found
        </motion.h3>
        <motion.p
          className="text-gray-400 text-base tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Try adjusting your search or filter criteria
        </motion.p>
      </motion.div>
    );
  }
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 mb-15 lg:grid-cols-3 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          onClick={(project) => onClick?.(project, index)}
        />
      ))}
    </motion.div>
  );
}
