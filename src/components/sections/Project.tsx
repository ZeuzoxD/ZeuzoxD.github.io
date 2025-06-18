import { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/type";
import { projects, categories } from "@/data/projects";
import ProjectDrawer from "../ui/ProjectDrawer";
import ProjectGrid from "./ProjectGrid";
import Search from "../Search.tsx";

export const WorkSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.shortdescription
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesFilter =
      activeFilter === "All" || project.category == activeFilter;
    return matchesSearch && matchesFilter;
  });

  const openProjectDrawer = (project: Project, index: number) => {
    setSelectedProject(project);
    setSelectedProjectIndex(index);
    setIsDrawerOpen(true);
  };

  const closeProjectDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <motion.section
      className="pt-10 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          categories={categories}
          projectCount={filteredProjects.length}
          totalProjects={projects.length}
        />

        <ProjectGrid projects={filteredProjects} onClick={openProjectDrawer} />
      </div>

      <ProjectDrawer
        isOpen={isDrawerOpen}
        project={selectedProject}
        index={selectedProjectIndex}
        onClose={closeProjectDrawer}
      />
    </motion.section>
  );
};
