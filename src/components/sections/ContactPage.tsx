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
      icon: <IconMail size={30} />,
      title: "Email",
      value: "manish.na26@gmail.com",
      href: "mailto:manish.na26@gmail.com",
      bg: "bg-gradient-to-br from-[#8f2323]/15 to-[#ee5684]/20",
      ibg: "bg-[#3d1a2e]",
      accent: "text-[#ee5684]",
    },
    {
      icon: <IconBrandLinkedin size={30} />,
      title: "LinkedIn",
      value: "Manish N",
      href: "https://www.linkedin.com/in/manish-n-zeuzo/",
      bg: "bg-gradient-to-br from-[#0b162b]/15 to-[#5689ee]/20",
      ibg: "bg-[#1a2c3d]",
      accent: "text-[#5689ee]",
    },
    {
      icon: <IconBrandGithub size={30} />,
      title: "GitHub",
      value: "ZeuzoxD",
      href: "https://github.com/ZeuzoxD",
      bg: "bg-gradient-to-br from-[#4a005f]/15 to-[#7f56ee]/20",
      ibg: "bg-[#2e1a3d]",
      accent: "text-[#7f56ee]",
    },
    {
      icon: <IconMapPin size={30} />,
      title: "Location",
      value: "Bengaluru, India",
      href: "#",
      bg: "bg-gradient-to-br from-[#8d6e00]/15 to-[#ee9a56]/20",
      ibg: "bg-[#3d331a]",
      accent: "text-[#ee9a56]",
    },
  ];

  return (
    <div className="min-h-screen min-w-screen bg-black text-white relative overflow-x-hidden">
      <GeometricBackground />

      {/* Header */}
      <motion.header
        className="relative p-6"
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
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-sf"
            whileHover={{ scale: 1.05 }}
          >
            MN
          </motion.div>
        </div>
      </motion.header>

      {/* Content */}
      <section className="relative z-10 py-8 px-6">
        <div className="text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "250px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
            />

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-medium
              bg-gradient-to-r from-[#bfd7fd] to-[#d4acc2] bg-clip-text 
              text-transparent mb-6 tracking-wide"
            >
              LET'S CONNECT
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed tracking-wide">
              These are the different channels through which you can reach out
              to me. Simply click on the card.
            </p>
          </motion.div>

          <div className="flex items-center justify-center">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 pt-8 mt-8 gap-6 mb-16"
            >
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`group  flex-col p-4 space-y-4 backdrop-blur-xl
                border border-white/10 rounded-xl ${method.bg} text-left 
                hover:bg-white/5 transition-all duration-300`}
                >
                  <h3 className="text-lg font-medium tracking-wider text-gray-400 mb-4">
                    {method.title}
                  </h3>
                  <div
                    className={`p-4 mb-4 items-center flex gap-4 rounded-xl ${method.ibg} ${method.accent} 
                      group-hover:scale-102 transition-transform duration-300`}
                  >
                    {method.icon}
                    <p className="text-white tracking-wide group-hover:text-purple-200 transition-colors duration-300">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
