import { projects } from "@/data/projects";
import ProjectCard from "../ProjectCard";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function FWork() {
  const featuredProjects = projects.filter((p) => p.featured);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = featuredProjects.length;

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      if (api) {
        const current = api.selectedScrollSnap();
        const next = (current + 1) % totalSlides;
        api.scrollTo(next);
      }
    }, 8000);
  }, [totalSlides, api]);

  const goToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
      // Reset the timer when user manually clicks a dot
      resetTimer();
    }
  };

  useEffect(() => {
    if (api && totalSlides > 0) {
      resetTimer();
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resetTimer, api, totalSlides]);

  // Sync with carousel API
  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    // Set initial state
    setCurrentSlide(api.selectedScrollSnap());

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 relative z-10"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated line above title */}
      <motion.div
        className="flex items-center justify-center mb-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="h-[1px] bg-gradient-to-r from-purple-400 to-pink-400"
          initial={{ width: 0 }}
          animate={isInView ? { width: "200px" } : { width: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </motion.div>

      {/* Title with stagger animation */}
      <motion.div
        className="text-center mb-8 relative z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-white text-5xl capitalize">
          {"Featured Works".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                delay: 0.5 + index * 0.03,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>
      </motion.div>

      {/* Carousel Container */}
      <motion.div
        className="relative max-w-7xl mx-auto h-full px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Improved gradient fade edges */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black via-black/60 to-transparent z-20" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black via-black/60 to-transparent z-20" />

        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            dragFree: true,
            skipSnaps: false,
          }}
          className="w-full"
        >
          <CarouselContent className="ml-0 py-4">
            {featuredProjects.map((project, index) => (
              <CarouselItem
                key={project.id}
                className="pl-4 basis-full sm:basis-1/2"
              >
                <motion.div
                  className="h-[380px] w-full max-w-[400px] md:max-w-[550px] mx-auto p-2"
                  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.02,
                    rotateY: 2,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{ overflow: "visible" }}
                >
                  <div className="h-full w-full">
                    <ProjectCard project={project} index={index} />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Active pagination dots*/}
        <motion.div
          className="flex justify-center mt-2 gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          {featuredProjects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 group ${
                index === currentSlide
                  ? "w-8 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50"
                  : "w-2 h-2 bg-white/20  hover:bg-white/40 backdrop-blur-sm rounded-full"
              }`}
              whileHover={{
                scale: index === currentSlide ? 1.1 : 1.2,
                border: "0px",
              }}
              transition={{ duration: 0.2 }}
            >
              {index === currentSlide && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
            </motion.button>
          ))}
        </motion.div>

        {/* View All Works Button */}
        <motion.div
          className="flex justify-center mt-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            className="flex items-center justify-center gap-2 
                  text-lg font-semibold text-white shadow-none
                  bg-gradient-to-r from-violet-500 to-pink-500
                  transition-all duration-300 min-w-[150px]
                  hover:shadow-lg rounded-xl px-6 py-2 
                  hover:from-violet-500 hover:to-pink-500 hover:border-0 
                  hover:shadow-violet-300/25 font-sf"
          >
            View All Works
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <IconArrowUpRight size={20} stroke={1.5} className="" />
            </motion.div>
          </button>
        </motion.div>
      </motion.div>

      {/* Background ambient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </motion.section>
  );
}
