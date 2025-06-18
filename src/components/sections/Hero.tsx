"use client";
import { motion, useInView } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconDownload,
  IconSparkles,
  IconBrain,
  IconBolt,
  IconChevronRight,
  IconChevronLeft,
  IconSettings,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Card } from "../ui/card";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const bentoRef = useRef(null);
  const isBentoInView = useInView(bentoRef, { once: true, margin: "-50px" });

  const letterVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const name = "MANISH N";

  const interestData = [
    "Digital System Design",
    "High Performance Computing",
    "Computer and Accelerator Architecture",
    "Hardware-Software Co-Design",
  ];

  const slides = [
    {
      title: "RTL Design & Verification",
      text: "Designing, verifying and synthesizing digital systems using Verilog, SystemVerilog, and Bluespec.",
    },
    {
      title: "LLM-Centric Machine Learning",
      text: "Exploring the intersection of transformers and hardware-optimizstions, for efficient deployment.",
    },
    {
      title: "Hardware-Accelerated System Design",
      text: "FPGAs and low level optimizations to push limits of performance and efficiency.",
    },
    {
      title: "Professional UI/UX & Web Development",
      text: "Crafting full-stack or web apps with refined UI/UX with 7 years of design experience.",
    },
    {
      title: "Game Development",
      text: "Developing a stylized 2.5D role playing game in Unreal Engine that blends cinematic visuals with interactive storytelling.",
    },
  ];

  const toolDescriptions: Record<string, string> = {
    "Xilinx Vivado":
      "Used extensively for synthesis and implementation of digital systems.",
    Cadence:
      "Experience with simulating digital circuits with NC-Verilog and Synthesizing them with Genus.",
    "Tanner EDA":
      "Experice through University coursework for analog circuits design.",
    CST: "Exposure to modeling and simulating different types of antenna with detailed analysis report.",
    QUCS: "Open-source analog circuit simulation experience.",
    MATLAB: "Utilized for prototyping and algorithm modeling and simulations.",
    "Unreal Engine":
      "Used in cinematic environments and vfx projects and now building a 2.5D game.",
    Blender: "3D asset creation, VFX integration and animation work.",
    Photoshop: "7 years of design experience with creating UIs, Posters, etc.",
  };

  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const [hoveredInterest, setHoveredInterest] = useState<number | null>(null);

  const gridItem = (icon: string, name: string, index: number) => (
    <motion.div
      key={name}
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={isBentoInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.8 + index * 0.1,
        ease: "easeOut",
      }}
      onMouseEnter={() => setHoveredTool(name)}
      onMouseLeave={() => setHoveredTool(null)}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      className="relative flex flex-col
      items-center justify-center p-4
      bg-gradient-to-t from-[#eb8f34]/5 to-[#2E1115]/60
      backdrop-blur-lg rounded-xl 
      hover:border-pink-400/40
      transition duration-300 cursor-pointer group"
    >
      <motion.img
        src={`/images/logos/${icon}`}
        alt={name}
        className="h-12 w-auto object-contain"
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
      />
      <motion.span
        className="text-white text-sm mt-3 font-sf tracking-wide text-center"
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
      >
        {name}
      </motion.span>

      {hoveredTool === name && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="absolute font-sf bg-black/80
          bottom-full mb-3 w-56 text-xs text-left
          text-white rounded-lg p-3 border-violet-300/50 border-2"
        >
          <div className="font-semibold text-pink-300 mb-1">{name}</div>
          <p>{toolDescriptions[name]}</p>
        </motion.div>
      )}
    </motion.div>
  );

  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const containerVarients = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVarients = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section className="relative min-h-screen min-w-screen flex justify-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-8">
        <div className="grid xl:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-5">
            {/* Animated Name */}
            <div className="overflow-hidden">
              <motion.h1 className="text-5xl md:text-6xl font-semibold tracking-normal bg-gradient-to-r from-[#BFD7FD] to-[#D4ACC2] bg-clip-text text-transparent leading-none font-sf">
                {name.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    transition={{
                      duration: 0.8,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.h1>
              <div className="text-lg md:text-xl font-medium font-sf">
                Zeuzo
              </div>
            </div>

            {/* Animated Title */}
            <div className="space-y-2">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="space-y-2"
                >
                  <div className="flex-col xl:hidden tracking-wide">
                    <div
                      className="text-md 
                       font-semibold"
                    >
                      Electronics & Communication UG
                    </div>
                    <div
                      className="text-md
                      font-semibold"
                    >
                      PES University, Bengaluru
                    </div>
                  </div>

                  <div className="hidden xl:flex space-x-1 tracking-wider">
                    <div
                      className="text-md lg:text-lg 
                       font-semibold"
                    >
                      Electronics & Communication UG
                    </div>
                    <div
                      className="text-md lg:text-lg 
                      font-semibold bg-gradient-to-b from-purple-500 
                      to-pink-500 bg-clip-text text-transparent"
                    >
                      |
                    </div>
                    <div
                      className="text-md lg:text-lg
                      font-semibold font-sf"
                    >
                      PES University, Bengaluru
                    </div>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="h-[2px] bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                </motion.div>
              </div>

              {/* Description */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <p className="text-md md:text-lg leading-6 tracking-wide font-medium font-sf">
                  Focused on Digital Design and Computer Architecture, with
                  interest in low-level systems and the principles that drive
                  efficient hardware design. Outside of tech, I enjoy gaming,
                  trading, VFX and cinematic video creation.
                </p>
              </motion.div>
            </div>
            {/* Social Links */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex items-center space-x-6"
            >
              {[
                {
                  icon: <IconBrandGithub size={30} stroke={1.5} />,
                  href: "https://github.com/ZeuzoxD",
                  label: "GitHub",
                },
                {
                  icon: <IconBrandLinkedin size={30} stroke={1.5} />,
                  href: "https://www.linkedin.com/in/manish-n-zeuzo/",
                  label: "LinkedIn",
                },
                {
                  icon: <IconMail size={30} stroke={1.5} />,
                  href: "mailto:manish.na26@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="group relative p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <motion.div
                    className="text-gray-400 group-hover:text-purple-300 transition-colors duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.8 }}
                  >
                    {social.icon}
                  </motion.div>
                </motion.a>
              ))}

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  style={{ borderRadius: "15px", borderWidth: "0px" }}
                  className="
                  text-sm md:text-base font-semibold
                  text-white
                  bg-gradient-to-r from-violet-500 to-pink-500
                  transition-all duration-300
                  shadow-lg
                  hover:from-violet-500 hover:to-pink-500 hover:border-0 
                  hover:shadow-violet-300/25 font-sf"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconDownload size={16} stroke={1.5} className="" />
                  </motion.div>
                  Resume
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              className="relative w-full max-w-md mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/40 
                to-pink-600/40 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20
                to-purple-600/20 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              <img
                src="/images/zoro.jpg"
                alt="Profile"
                className="relative z-10 w-full h-auto rounded-3xl border border-white/10 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bento Grid */}
        {/* Research Interest */}
        <motion.div
          ref={bentoRef}
          variants={containerVarients}
          initial="hidden"
          animate={isBentoInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-8  xl:grid-cols-12 gap-4 mb-6">
            <motion.div
              className="lg:col-span-5 xl:col-span-8"
              variants={cardVarients}
            >
              <Card
                className=" 
              bg-gradient-to-br from-[#87439a]/15 to-[#3c1e27]/20 
              mix-blend-screen backdrop-blur-xl border-[2px] border-[#a186be]/35
              rounded-lg p-5 
              hover:bg-[#CFADEE]/5 transition-all duration-500"
              >
                <div className="mb-3">
                  <motion.div
                    className="flex items-center mb-8"
                    whileHover={{ x: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="p-2 text-[#CFADEE] bg-[#382149] rounded-md mr-4"
                      whileHover={{ rotate: 180, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconBrain size={28} />
                    </motion.div>
                    <div
                      className="text-xl font-semibold uppercase tracking-wide
                    bg-gradient-to-r from-[#BD8FE5] to-[#F4B9F6] bg-clip-text text-transparent
                    "
                    >
                      RESEARCH INTERESTS
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {interestData.map((interest, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isBentoInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          delay: 0.5 + index * 0.1,
                          duration: 0.6,
                        }}
                        onMouseEnter={() => setHoveredInterest(index)}
                        onMouseLeave={() => setHoveredInterest(null)}
                        whileHover={{
                          scale: 1.05,
                          x: 5,
                          transition: { duration: 0.2 },
                        }}
                        className="bg-white/3 mix-blend-screen p-4 xl:p-5  rounded-xl 
                      text-white text-md text-left font-medium font-sf flex items-center gap-2"
                      >
                        <motion.div
                          animate={
                            hoveredInterest === index
                              ? { rotate: 360 }
                              : { rotate: 0 }
                          }
                          transition={{ duration: 0.5 }}
                        >
                          <IconSparkles
                            size={28}
                            className="text-[#D491FF] mr-2"
                          />
                        </motion.div>
                        {interest}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* What i do best */}
            <motion.div
              className="lg:col-span-3 xl:col-span-4"
              variants={cardVarients}
            >
              <Card
                className="
              bg-gradient-to-tr from-[#3c1r27]/50 to-[#65117c]/20 
              mix-blend-screen backdrop-blur-xl border-[2px] border-[#EEADB5]/35
              rounded-lg p-5 z-20
              hover:bg-[#EEADB5]/5 transition-all duration-500"
              >
                <div>
                  <motion.div
                    className="flex items-center mb-4"
                    whileHover={{ x: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="p-2 text-[#EEADB5] bg-[#3D1A2E] rounded-md mr-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconBolt size={28} />
                    </motion.div>
                    <div
                      className="text-xl font-semibold uppercase tracking-wide
                    bg-gradient-to-r from-[#E58FA7] to-[#F4B9F6] bg-clip-text text-transparent
                    "
                    >
                      WHAT I DO BEST
                    </div>
                  </motion.div>

                  <motion.div
                    className="
                  bg-gradient-to-tr from-white/3 to-[#3D1A2E]/60
                  mix-blend-overlay backdrop-blur-lg rounded-lg
                  p-4 text-left font-sf text-white min-h-[140px]
                  items-center"
                  >
                    <motion.div
                      className="mb-2 font-semibold text-lg leading-tight"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {slides[activeSlide].title}
                    </motion.div>
                    <motion.p
                      className="text-base font-medium leading-normal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {slides[activeSlide].text}
                    </motion.p>
                  </motion.div>

                  <div className="mt-3 flex items-center justify-center gap-5">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() =>
                          setActiveSlide(
                            (activeSlide - 1 + slides.length) % slides.length,
                          )
                        }
                        style={{
                          borderRadius: "15px",
                          borderWidth: "0px",
                          padding: "10px",
                          backgroundColor: "#3D1A2E",
                        }}
                        className="text-[#EEADB5] 
                    text-sm md:text-base font-semibold
                    hover:border-0"
                      >
                        <motion.div
                          whileHover={{ x: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconChevronLeft size={18} />
                        </motion.div>
                      </Button>
                    </motion.div>

                    <div className="gap-2 flex items-center justify-center">
                      {[...Array(slides.length)].map((_, index) => (
                        <motion.div
                          key={index}
                          className={`h-1.5 w-1.5 rounded-full cursor-pointer
                        ${index === activeSlide ? "bg-[#EEADB5]" : "bg-[#3D1A2E]"}`}
                          whileHover={{ scale: 1.5 }}
                          onClick={() => setActiveSlide(index)}
                          animate={
                            index === activeSlide
                              ? { scale: 1.2 }
                              : { scale: 1 }
                          }
                        />
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        onClick={() =>
                          setActiveSlide((activeSlide + 1) % slides.length)
                        }
                        style={{
                          borderRadius: "15px",
                          borderWidth: "0px",
                          padding: "10px",
                          backgroundColor: "#3D1A2E",
                        }}
                        className="text-[#EEADB5] 
                    text-sm md:text-base font-semibold
                    hover:text-white hover:border-0 
                  "
                      >
                        <motion.div
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconChevronRight size={18} />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Tools */}
            <motion.div
              className="lg:col-span-8 xl:col-span-12"
              variants={cardVarients}
            >
              <Card
                className="
              bg-gradient-to-tr from-[#794436]/15 to-[#654224]/20 
              mix-blend-screen backdrop-blur-xl border-[2px] border-[#F9AD81]/35
              rounded-lg p-5 
              hover:bg-[#CFADEE]/5 transition-all duration-500"
              >
                <div>
                  <motion.div
                    className="flex items-center mb-2"
                    whileHover={{ x: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="p-2 text-[#EEC7AD] bg-[#493A21] rounded-md mr-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconSettings size={28} />
                    </motion.div>
                    <div
                      className="text-xl font-semibold uppercase tracking-wide
                    bg-gradient-to-r from-[#E5918F] to-[#F4B9F6] bg-clip-text text-transparent
                    "
                    >
                      SOFTWARE & TOOLS
                    </div>
                  </motion.div>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-9 gap-4">
                  {[
                    { name: "Xilinx Vivado", icon: "Vivado.png" },
                    { name: "Cadence", icon: "cadence.png" },
                    { name: "Tanner EDA", icon: "TannerEDA.png" },
                    { name: "CST", icon: "cst.png" },
                    { name: "QUCS", icon: "qucs.png" },
                    { name: "MATLAB", icon: "Matlab.png" },
                    { name: "Unreal Engine", icon: "UE.png" },
                    { name: "Blender", icon: "blender.png" },
                    { name: "Photoshop", icon: "ps.png" },
                  ].map((tool, index) => gridItem(tool.icon, tool.name, index))}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
