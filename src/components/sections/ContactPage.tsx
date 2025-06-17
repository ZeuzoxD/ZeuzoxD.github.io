"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  IconArrowLeft,
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMapPin,
  IconSend,
  IconUser,
  IconMessage,
  IconSparkles,
} from "@tabler/icons-react";
import GeometricBackground from "../GeometricBackground";

interface ContactPageProps {
  onBack: () => void;
}

export default function ContactPage({ onBack }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: <IconMail size={30} />,
      title: "Email",
      value: "manish.na26@gmail.com",
      href: "mailto:manish.na26@gmail.com",
    },
    {
      icon: <IconBrandLinkedin size={30} />,
      title: "LinkedIn",
      value: "Manish N",
      href: "https://www.linkedin.com/in/manish-n-zeuzo/",
    },
    {
      icon: <IconBrandGithub size={30} />,
      title: "GitHub",
      value: "ZeuzoxD",
      href: "https://github.com/ZeuzoxD",
    },
    {
      icon: <IconMapPin size={30} />,
      title: "Location",
      value: "Bengaluru, India",
      href: "#",
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
              Ready to collaborate on something amazing? I'm always excited to
              discuss new projects and innovative ideas.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 pt-8 mt-8 gap-12">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex space-x-6 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div
                      className="p-3 rounded-xl bg-purple-500/20 text-purple-300 
                      group-hover:scale-110 transition-transform duration-300"
                    >
                      {method.icon}
                    </div>
                    <div className="text-start">
                      <h3 className="text-lg font-medium tracking-wide text-white mb-1">
                        {method.title}
                      </h3>
                      <p className="text-gray-400 tracking-wider group-hover:text-purple-300 transition-colors duration-300">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <IconSparkles size={24} className="text-purple-300" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Send a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <IconUser
                      size={20}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <IconMail
                      size={20}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="relative">
                  <IconMessage
                    size={20}
                    className="absolute left-3 top-4 text-gray-400"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 transition-all duration-300"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 transition-all duration-300 resize-none"
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl transition-all duration-300 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <IconSparkles size={20} />
                      </motion.div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <IconSend size={20} />
                      <span>Send Message</span>
                    </div>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
