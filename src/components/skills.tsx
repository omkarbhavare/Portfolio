"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/useInView";
import { motion, AnimatePresence } from "framer-motion";
import { BiLogoJava } from "react-icons/bi";
import { MdSignalWifiStatusbarConnectedNoInternet } from "react-icons/md";


import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaAws,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiMongodb,
  SiDocker,
  SiTypescript,
} from "react-icons/si";

const skillIcons = {
  HTML: <FaHtml5 color="orange" size={40} />,
  CSS: <FaCss3Alt color="blue" size={40} />,
  JavaScript: <SiJavascript color="yellow" size={40} />,
  React: <FaReact color="cyan" size={40} />,
  "Next.js": <SiNextdotjs color="black" size={40} />,
  "Node.js": <FaNodeJs color="green" size={40} />,
  Git: <FaGithub color="black" size={40} />,
  Tailwind: <SiTailwindcss color="teal" size={40} />,
  Prisma: <SiPrisma color="purple" size={40} />,
  MongoDB: <SiMongodb color="green" size={40} />,
  Docker: <SiDocker color="blue" size={40} />,
  AWS: <FaAws color="orange" size={40} />,
  TypeScript: <SiTypescript color="yellow" size={40} />

};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * 2,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("#skills");

  // State to track the hovered skill
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleMouseEnter = (skill) => {
    setHoveredSkill(skill);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 relative"
    >
      <SectionHeading>{"My Skills"}
      <AnimatePresence>
        {hoveredSkill && (
          <motion.div
            className="absolute left-1/3 transform -translate-x-1/2 mt-[-2rem]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            {skillIcons[hoveredSkill] || <MdSignalWifiStatusbarConnectedNoInternet color="gray" size={40} />}
          </motion.div>
        )}
      </AnimatePresence>
      </SectionHeading>

      {/* Show hovered skill icon near the "My Skills" heading */}
      

      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            onMouseEnter={() => handleMouseEnter(skill)}
            onMouseLeave={handleMouseLeave}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
