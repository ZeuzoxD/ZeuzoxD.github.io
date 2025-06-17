import { Project } from "@/data/type";
import { IconArrowUpRight, IconCalendar, IconUser } from "@tabler/icons-react";
import { motion } from "framer-motion";

type Props = {
  project: Project;
  index?: number;
  onClick?: (project: Project) => void;
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

export default function ProjectCard({ project, index = 0, onClick }: Props) {
  const colors = colorVarients[index % colorVarients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={() => onClick?.(project)}
      className={`mix-blend-screen z-10 backdrop-blur-xl border-[2px] h-full
                rounded-2xl p-6 transition duration-500 group cursor-pointer
                flex flex-col justify-evenly ${colors.bg} ${colors.border} ${colors.hover}`}
    >
      <div className="flex items-start justify-between mb-2 pb-4 border-b border-white/10">
        <div className="flex items-start flex-col gap-4">
          <div
            className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(project.status)}`}
          >
            {project.status}
          </div>
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
            className="w-16 h-16 rounded-full border flex items-center justify-center
          group-hover:scale-110 transition-transform duration-300"
            style={{ borderColor: colors.accent }}
          >
            <IconArrowUpRight size={30} style={{ color: colors.accent }} />
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="flex-col items-start justify-between">
        <h3 className="text-xl md:text-2xl text-white font-medium mb-3">
          {project.title}
        </h3>
        <p
          className={`text-base font-semibold`}
          style={{ color: colors.accent }}
        >
          {project.subtitle}
        </p>
        {/* Description */}
        <p className="text-base text-gray-300 font-medium leading-relaxed mb-2 line-clamp-3">
          {project.shortdescription}
        </p>
      </div>
    </motion.div>
  );
}
