"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/lib/useInView";

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      className="max-w-5xl mx-auto text-center mt-16 px-6 sm:px-12 leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about"
    >
      <div className="container mx-auto">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
          <SectionHeading>About Me</SectionHeading>
        </Fade>

        <div className="grid gap-10 sm:gap-16 lg:grid-cols-2  items-center text-start">
          {/* Text Content */}
          <div className="flex flex-col justify-center mt-12">
            <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
              <p className="mt-4 text-med leading-loose text-gray-700 dark:text-white/70">
                I'm <span className="font-extrabold text-xl">Omkar Bhavare</span>, a 
                Software Development Engineer
                based in Pune, with a zest for creating 
                impactful digital experiences. With nearly 
                three years of experience in 
                <span className="font-extrabold text-xl"> Full-Stack development</span>, I specialize in 
                React.js, 
                 JavaScript, and 
                AWS. I thrive on transforming 
                 complex challenges into 
                 elegant solutions.
              </p>
            </Fade>

            <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce={true}>
              <p className="mt-4 text-lg leading-loose text-gray-700 dark:text-white/70">
                Outside of work, I'm an avid tech enthusiast
                who loves exploring new trends and tools in 
                 development. Whether it's building a 
                 collaborative real-time code editor or optimizing 
                 performance for gaming applications, I enjoy 
                <span className="font-extrabold text-xl"> pushing the boundaries</span> of what's possible with technology.
              </p>
            </Fade>

            <Fade direction="up" delay={1000} cascade damping={1e-1} triggerOnce={true}>
              <p className="mt-4 text-lg leading-loose text-gray-700 dark:text-white/70">
                I invite you to connect with me if you're interested in 
                collaboration or simply want to 
                 share insights about the ever-evolving 
                 tech landscape!
              </p>
            </Fade>
          </div>

          {/* Image Content */}
          <div className="flex justify-center">
            <Fade direction="right" delay={600} cascade damping={1e-1} triggerOnce={true}>
              <Image
                src="/about.png"
                width="800"
                height="800"
                alt="portrait"
                quality="100"
                priority={true}
                className="rounded-full object-cover"
              />
            </Fade>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
