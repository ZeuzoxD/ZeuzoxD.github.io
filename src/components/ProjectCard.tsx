import { Project } from "@/data/type";
import { IconArrowUpRight, IconCalendar, IconUser } from "@tabler/icons-react";
import { motion } from "framer-motion";

type Props = {
  project: Project;
  index?: number;
  onClick?: (project: Project) => void;
};

const colorVariants = [
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

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-500/20 text-green-100 border-green-400/50 backdrop-blur-3xl shadow-green-400/40";
    case "In Progress":
      return "bg-amber-500/20 text-orange-100 border-amber-400/50 backdrop-blur-3xl shadow-amber-400/40";
    case "Ongoing":
      return "bg-pink-500/20 text-pink-100 border-pink-400/50 backdrop-blur-3xl shadow-pink-400/40";
    default:
      return "bg-gray-500/20 text-gray-100 border-gray-400/50 backdrop-blur-3xl shadow-gray-400/40";
  }
};

export default function ProjectCard({ project, index = 0, onClick }: Props) {
  const colors = colorVariants[index % colorVariants.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -12,
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      onClick={() => onClick?.(project)}
      className={`relative overflow-hidden ${colors.glassBlur} ${colors.glassBg} border-2 h-full
                rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 transition-all duration-700 group cursor-pointer
                flex flex-col justify-between ${colors.bg} ${colors.border} ${colors.borderHover}
                ${colors.shadowColor} hover:${colors.glowColor} hover:shadow-3xl`}
    >
      <div
        className={`absolute inset-0 ${colors.bgOverlay} opacity-0 group-hover:opacity-100 
                   transition-opacity duration-700 rounded-2xl sm:rounded-3xl ${colors.glassBlur}`}
      />

      <div
        className={`absolute inset-[1px] rounded-2xl sm:rounded-3xl ${colors.innerGlass} 
                   opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Mobile-optimized orbs */}
      <div
        className={`absolute -top-16 sm:-top-32 -left-16 sm:-left-32 w-32 sm:w-64 h-32 sm:h-64 rounded-full bg-gradient-to-r ${colors.orb1} 
                   blur-2xl sm:blur-3xl group-hover:scale-150 group-hover:blur-xl sm:group-hover:blur-2xl transition-all duration-1000 
                   opacity-60 group-hover:opacity-90 animate-pulse`}
      />
      <div
        className={`absolute -bottom-16 sm:-bottom-32 -right-16 sm:-right-32 w-32 sm:w-64 h-32 sm:h-64 rounded-full bg-gradient-to-r ${colors.orb2} 
                   blur-2xl sm:blur-3xl group-hover:scale-150 group-hover:blur-xl sm:group-hover:blur-2xl transition-all duration-1000 
                   opacity-60 group-hover:opacity-90 animate-pulse`}
        style={{ animationDelay: "1s" }}
      />

      <div
        className={`absolute top-1/4 right-1/3 w-24 sm:w-48 h-24 sm:h-48 rounded-full bg-gradient-to-r ${colors.orb1} 
                   blur-2xl sm:blur-3xl opacity-20 group-hover:opacity-50 transition-all duration-700 animate-pulse`}
        style={{ animationDelay: "2s" }}
      />
      <div
        className={`absolute bottom-1/4 left-1/3 w-20 sm:w-40 h-20 sm:h-40 rounded-full bg-gradient-to-r ${colors.orb2} 
                   blur-2xl sm:blur-3xl opacity-15 group-hover:opacity-45 transition-all duration-700 animate-pulse`}
        style={{ animationDelay: "0.5s" }}
      />

      {/* Header section */}
      <div className="relative z-10 flex sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
        <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-0">
          <div
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold capitalize border-2 shadow-2xl 
                       ${getStatusColor(project.status)} backdrop-blur-3xl
                       group-hover:scale-105 transition-transform duration-300 w-fit`}
          >
            {project.status}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <div
              className={`flex items-center font-bold gap-1.5 sm:gap-2 ${colors.textColor} 
                           ${colors.metaBg} ${colors.glassBlur} px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border-2 ${colors.metaBorder}
                           shadow-2xl group-hover:${colors.metaBg} group-hover:border-white/30 
                           group-hover:scale-105 transition-all duration-400 w-fit`}
            >
              <IconCalendar size={14} className="sm:w-[18px] sm:h-[18px]" />
              <span>{project.year}</span>
            </div>
            <div
              className={`flex items-center font-bold gap-1.5 sm:gap-2 ${colors.textColor} 
                           ${colors.metaBg} ${colors.glassBlur} px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border-2 ${colors.metaBorder}
                           shadow-2xl group-hover:${colors.metaBg} group-hover:border-white/30 
                           group-hover:scale-105 transition-all duration-400 w-fit`}
            >
              <IconUser size={14} className="sm:w-[18px] sm:h-[18px]" />
              <span>{project.team}</span>
            </div>
          </div>
        </div>

        <div className="ml-auto sm:ml-0">
          <div
            className={`w-14 sm:w-20 h-14 sm:h-20 rounded-full border-3 flex items-center justify-center mix-blend-multiply
                     group-hover:scale-105 group-hover:rotate-12 transition-all duration-500 ${colors.glassBlur}
                     ${colors.metaBg} group-hover:bg-white/15 shadow-2xl border-white/20 group-hover:border-white/40`}
            style={{ borderColor: colors.accent }}
          >
            <IconArrowUpRight
              size={24}
              className="sm:w-8 sm:h-8 group-hover:rotate-45 transition-transform duration-500 drop-shadow-2xl filter brightness-125"
              style={{ color: colors.accent }}
            />
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="relative z-10 flex-1 flex flex-col justify-end">
        <h3
          className={`text-xl sm:text-2xl md:text-3xl ${colors.textColor} font-bold mb-2 sm:mb-4 
                       drop-shadow-2xl leading-tight group-hover:scale-105 transition-transform duration-300`}
        >
          {project.title}
        </h3>
        <p
          className={`text-base sm:text-lg font-bold mb-3 sm:mb-5 drop-shadow-lg ${colors.subtitleColor}
                      group-hover:scale-105 transition-transform duration-300`}
        >
          {project.subtitle}
        </p>
        <p
          className={`text-sm sm:text-base ${colors.textColor} font-semibold leading-relaxed 
                      line-clamp-3 drop-shadow-lg opacity-95 group-hover:opacity-100
                      group-hover:scale-105 transition-all duration-300`}
        >
          {project.shortdescription}
        </p>
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-soft-light pointer-events-none rounded-2xl sm:rounded-3xl
                   group-hover:opacity-15 transition-opacity duration-500"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glass overlay effects */}
      <div
        className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.04] 
                      opacity-80 pointer-events-none ${colors.glassBlur} group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div
        className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/12 via-transparent to-transparent 
                      opacity-50 pointer-events-none group-hover:opacity-70 transition-opacity duration-500"
      />
      <div
        className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-tl from-white/8 via-transparent to-white/12 
                      opacity-40 pointer-events-none group-hover:opacity-60 transition-opacity duration-500"
      />

      <div
        className="absolute inset-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-transparent via-transparent to-white/15 
                      opacity-60 pointer-events-none group-hover:opacity-80 transition-opacity duration-500"
      />

      <div
        className="absolute inset-[2px] rounded-2xl sm:rounded-3xl bg-gradient-to-t from-transparent to-white/8 
                      opacity-30 pointer-events-none group-hover:opacity-50 transition-opacity duration-500"
      />
    </motion.div>
  );
}
