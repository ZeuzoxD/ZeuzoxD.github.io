"use client";

import { motion } from "framer-motion";
import {
  IconArrowLeft,
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMapPin,
} from "@tabler/icons-react";
import GeometricBackground from "../GeometricBackground";

interface ContactPageProps {
  onBack: () => void;
}

export default function ContactPage({ onBack }: ContactPageProps) {
  const contactMethods = [
    {
      icon: <IconMail size={24} />,
      title: "Email",
      value: "manish.na26@gmail.com",
      href: "mailto:manish.na26@gmail.com",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      hoverBorder: "hover:border-red-400/60",
    },
    {
      icon: <IconBrandLinkedin size={24} />,
      title: "LinkedIn",
      value: "Manish N",
      href: "https://www.linkedin.com/in/manish-n-zeuzo/",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      hoverBorder: "hover:border-blue-400/60",
    },
    {
      icon: <IconBrandGithub size={24} />,
      title: "GitHub",
      value: "ZeuzoxD",
      href: "https://github.com/ZeuzoxD",
      color: "from-indigo-400 to-violet-600",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/30",
      hoverBorder: "hover:border-violet-400/60",
    },
    {
      icon: <IconMapPin size={24} />,
      title: "Location",
      value: "Bengaluru, India",
      href: "#",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      hoverBorder: "hover:border-emerald-400/60",
    },
  ];

  return (
    <div className="min-h-screen min-w-screen bg-black text-white relative overflow-x-hidden">
      <GeometricBackground />

      {/* Header */}
      <motion.header
        className="relative p-6 z-20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.button
            onClick={onBack}
            className="flex items-center space-x-3 text-gray-400 text-lg
            hover:text-white bg-transparent transition-colors duration-300 group"
            style={{ backgroundColor: "transparent", border: "none" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconArrowLeft
              size={20}
              stroke={1.5}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
            <span className="font-light tracking-wide">Back to Home</span>
          </motion.button>

          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            MN
          </motion.div>
        </div>
      </motion.header>

      {/* Content */}
      <section className="relative z-10 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"
            />

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-medium
              mb-6 bg-gradient-to-r from-[#bfd7fd] to-[#d4acc2] bg-clip-text text-transparent"
            >
              Let's Connect
            </h1>

            <p className="text-lg md:text-xl max-w-2xl leading-relaxed mx-auto tracking-wide">
              Ready to collaborate or just say hello? Reach out through any of
              these channels.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : "_self"}
                rel={
                  method.href.startsWith("http") ? "noopener noreferrer" : ""
                }
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className={`group relative p-6 rounded-2xl border-2 backdrop-blur-xl
                          bg-white/[0.02] ${method.bgColor} ${method.borderColor} ${method.hoverBorder}
                          transition-all duration-300 hover:bg-white/[0.05] cursor-pointer`}
              >
                {/* Subtle gradient orb */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 rounded-full 
                               bg-gradient-to-r ${method.color} opacity-20 blur-3xl 
                               group-hover:opacity-30 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex items-center space-x-4">
                  {/* Icon */}
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${method.color} 
                                 bg-opacity-20 backdrop-blur-sm border border-white/10
                                 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{method.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 text-white">
                      {method.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {method.value}
                    </p>
                  </div>

                  <div className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </div>
                </div>

                {/* Glass reflection effect */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
