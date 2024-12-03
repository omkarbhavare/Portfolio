"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaDownload } from "react-icons/fa";
import { useSectionInView } from "@/lib/useInView";
import { useActiveSectionContext } from "@/containers/active-section";
import { Mail } from "lucide-react";

export default function Intro() {
  const { ref } = useSectionInView("#home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadPercentage, setDownloadPercentage] = useState(0);

  // Handle Download Function
  const handleDownload = () => {
    setIsDownloading(true);
    setDownloadPercentage(0);

    const interval = setInterval(() => {
      setDownloadPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Trigger download once the percentage reaches 100%
          downloadResume();
          return 100;
        }
        return prev + 10;
      });
    }, 200); // Update every 200ms for smooth animation
  };

  // Function to simulate the actual download
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Omkar_Bhavare_Resume.pdf"; // Replace with the actual resume file path
    link.download = "Omkar_Bhavare_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset after download is complete
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadPercentage(0);
    }, 1000);
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[75rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            <Image
              src="/boy.png"
              width="480"
              height="480"
              alt="portrait"
              quality="100"
              priority={true}
              className="rounded-full object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-6xl absolute bottom-8 right-12"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
        <h1 className="mb-10 mt-4 px-4 text-2xl sm:text-4xl">
          <span className="font-medium !leading-[1.5] ">
            Transform your ideas into a stunning website.
          </span>{" "}
          <p className="text-[14px]">
            Hi there! I'm a passionate software developer on a mission to bring
            your digital dreams to life with creative solutions and engaging user
            experiences.
          </p>
        </h1>
      </Fade>

      <motion.div
        className="flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
          onClick={() => {
            setActiveSection("#contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Connect <Mail color={"#9ca3af"} />
        </Link>

        <a
          className="bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/omkarbhavare/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-gray-900 p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-90 transition cursor-pointer dark:bg-white/10 dark:text-white/60"
          href="https://github.com/omkarbhavare"
          target="_blank"
        >
          <FaGithubSquare />
        </a>

        {/* Download Resume Button */}
        <motion.button
          onClick={handleDownload}
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-white ${
            isDownloading ? "bg-teal-300 cursor-wait" : "bg-teal-500"
          } focus:scale-105 hover:scale-105 active:scale-95 transition dark:bg-white/10 dark:text-white/60`}
          disabled={isDownloading}
        >
          {isDownloading ? (
            <>
              <FaDownload />
              <span>{downloadPercentage}%</span>
            </>
          ) : (
            <>
              <FaDownload />
              <span>Download Resume</span>
            </>
          )}
        </motion.button>
      </motion.div>
    </section>
  );
}
