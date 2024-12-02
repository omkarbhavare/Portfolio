"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectInfo } from "@/lib/types";

type ProjectProps = ProjectInfo;

export default function Project({
  title,
  description,
  tags,
  imageUrl,  // imageUrl is passed here
  link,  // URL for the project
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-white max-w-full md:max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-3 pb-6 px-4 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col sm:flex-row items-center h-auto">
          <div className="flex-1 sm:max-w-[50%]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-1 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>

            {/* Button that links to the project URL */}
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Preview
              </button>
            </a>
          </div>

          {/* Dynamically set the imageUrl */}
          <div className="flex justify-center sm:justify-end mt-4 sm:mt-0 sm:ml-6 sm:max-w-[40%]">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              width={300}
              height={200}
              className="rounded-t-lg shadow-2xl transition object-contain sm:max-w-[300px] sm:max-h-[200px]"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
