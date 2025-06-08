import { Project } from "@/data/type";
import {
  IconArrowUpRight,
  IconCalendar,
  IconCode,
  IconExternalLink,
  IconUser,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

type Props = {
  project: Project;
  index?: number;
};

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

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-500/20 text-green-300 border-green-500/30";
    case "In Progress":
      return "bg-amber-500/20 text-orange-300 border-amber-500/30";
    case "Ongoing":
      return "bg-pink-500/20 text-pink-300 border-pink-500/30";
    default:
      return "bg-gray-500/20 text-gray-300 border-gray-500/30";
  }
};

export default function ProjectCard({ project, index = 0 }: Props) {
  const colors = colorVarients[index % colorVarients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`mix-blend-screen backdrop-blur-xl border-[2px] h-full
                rounded-2xl p-6 transition duration-500 group cursor-pointer
                flex flex-col justify-between ${colors.bg} ${colors.border} ${colors.hover}`}
    >
      {/* Title */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-col space-y-2">
                <h3 className="text-xl md:text-2xl text-white font-medium mb-3">
                  {project.title}
                </h3>
                <p
                  className={`text-base font-semibold`}
                  style={{ color: colors.accent }}
                >
                  {project.subtitle}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <div className="flex items-center font-medium text-sm gap-2">
                    <IconCalendar size={18} />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center font-medium text-sm gap-2">
                    {project.team == "Solo Project" ? (
                      <IconUser size={18} />
                    ) : (
                      <IconUser size={18} />
                    )}
                    <span>{project.team}</span>
                  </div>
                </div>
              </div>

              {/* Link icon */}
              <div className="ml-auto">
                <div
                  className="w-20 h-20 rounded-full border flex items-center justify-center
          group-hover:scale-110 transition-transform duration-300"
                  style={{ borderColor: colors.accent }}
                >
                  <IconArrowUpRight
                    size={30}
                    style={{ color: colors.accent }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-base text-gray-300 font-medium leading-relaxed line-clamp-3">
          {project.shortdescription}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="text-xs px-3 py-2  font-semibold 
            rounded-full text-white border-2"
            style={{ borderColor: colors.accent }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
        <div
          className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(project.status)}`}
        >
          {project.status}
        </div>

        <div className="flex items-center gap-2">
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <IconCode
                size={20}
                style={{
                  color: colors.accent,
                }}
              />
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <IconExternalLink
                size={20}
                style={{
                  color: colors.accent,
                }}
              />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
