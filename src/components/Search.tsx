import { motion } from "framer-motion";
import { IconCommand, IconX } from "@tabler/icons-react";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  categories: string[];
  projectCount: number;
  totalProjects: number;
}

export default function Search({
  searchTerm,
  setSearchTerm,
  activeFilter,
  setActiveFilter,
  categories,
  projectCount,
  totalProjects,
}: SearchProps) {
  const hasActiveFilters = activeFilter !== "All" || searchTerm !== "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16 space-y-8"
    >
      <div className="relative">
        <motion.div
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-violet-200/80
                     "
          style={{ border: "none" }}
        >
          <IconCommand size={24} />
        </motion.div>

        <motion.input
          type="text"
          placeholder="Search projects by name, description or technology"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-12 py-4 bg-white/[0.03] backdrop-blur-3xl
                   rounded-2xl text-white placeholder-gray-300/70 tracking-wide
                   focus:outline-none focus:bg-white/[0.08] border-2 border-white/10
                   focus:border-purple-400/50 transition-all duration-500 shadow-2xl
                   hover:bg-white/[0.05] hover:border-white/20 group
                   bg-gradient-to-r from-white/[0.02] to-white/[0.04]"
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        />

        {searchTerm && (
          <motion.button
            onClick={() => setSearchTerm("")}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 p-2 rounded-full
                     bg-red-500/20 hover:bg-red-500/30 backdrop-blur-xl border border-red-400/30
                     hover:border-red-400/50 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.15, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <IconX size={20} className="text-red-300" />
          </motion.button>
        )}
      </div>

      {/* Result Counter */}
      <div className="relative">
        <motion.div
          className="text-center text-lg tracking-wide "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="relative z-10">
            Showing{" "}
            <span className="font-bold text-purple-300">{projectCount}</span> of{" "}
            <span className="font-bold text-blue-300">{totalProjects}</span>{" "}
            projects
            {hasActiveFilters && (
              <motion.span
                className="text-pink-300 font-semibold ml-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
              >
                (filtered)
              </motion.span>
            )}
          </span>
        </motion.div>

        <div className="space-y-6 mt-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-8 py-4 rounded-2xl backdrop-blur-3xl border-2 shadow-2xl
                          transition-all duration-500 relative overflow-hidden group
                          ${
                            activeFilter === category
                              ? "bg-gradient-to-br from-purple-300 to-pink-300 text-indigo-900"
                              : "bg-gradient-to-br from-violet-950/20 to-violet-950/20 text-violet-200"
                          }`}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                style={{ border: "none" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.08 }}
              >
                <span className="relative font-semibold tracking-wide z-10 text-lg">
                  {category}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
