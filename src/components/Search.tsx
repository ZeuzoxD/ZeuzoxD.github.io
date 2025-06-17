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
      className="mb-12 space-y-6"
    >
      {/* Search Bar */}
      <div className="relative">
        <motion.div
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-violet-200"
          whileHover={{ scale: 1.1 }}
        >
          <IconCommand size={24} />
        </motion.div>
        <motion.input
          type="text"
          placeholder="Search projects by name, description or technology"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-12 py-4 bg-white/5 backdrop-blur-md
           rounded-lg text-white placeholder-gray-300 tracking-wide
          focus:outline-none  focus:bg-white/15"
        />
        {searchTerm && (
          <motion.button
            onClick={() => setSearchTerm("")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <IconX size={20} className="text-red-400 rounded-lg" />
          </motion.button>
        )}
      </div>

      {/* Result Counter */}
      <div className="relative">
        <motion.div
          className="text-center text-base tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Showing {projectCount} of {totalProjects} projects
          {hasActiveFilters && (
            <motion.span
              className="text-purple-300"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {` (filtered)`}
            </motion.span>
          )}
        </motion.div>

        {/* Filter Section */}
        <div className="space-y-4 mt-4">
          {/* Filters Button */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium
              transition-all relative overflow-hidden border-none outline-none 
              ${
                activeFilter === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-white/5 backdrop-blur-md "
              }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.05 }}
              >
                {/* Active Indicator */}
                <span className="relative z-10">{category}</span>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
