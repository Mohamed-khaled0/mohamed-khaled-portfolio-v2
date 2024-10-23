"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { Icon } from "@iconify/react";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  icons: readonly string[];
  imageUrl: StaticImageData;
  githubLink?: string;
  urlLink?: string;
};

export default function Project({
  title,
  description,
  icons,
  imageUrl,
  githubLink,
  urlLink,
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
      <section className="bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <div className="flex ">
          <p className="font-bold text-gray-800 dark:text-white/90 ">Made with:</p>
          <ul className="flex flex-wrap  gap-2 mb-3 sm:mt-auto">
            {icons.map((icon, iconIndex) => (
              <li key={iconIndex}>
                <Icon icon={icon} className= " ml-1 mr-1 text-2xl  " />
              </li>
            ))}
          </ul>
          </div>
          <p className="mt-2 leading-relaxed text-gray-900 dark:text-white/100 mb-3">
            {description}
          </p>
          <div className="flex">
            {urlLink && (
              <a
                href={urlLink}
                target="_blank"
                rel={`Live demo for ${title}`} 
                className="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-full hover:scale-105"
                aria-label={`Live demo for ${title}`} 
              >
                <BiLinkExternal className="mr-1" /> Live
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel={`GitHub repository for ${title}`} 
                className="flex items-center border border-[#111827] py-2 px-4 rounded-full mr-2 text-[#111827] hover:scale-105 dark:border-white dark:text-white dark:border-opacity-40"
                aria-label={`GitHub repository for ${title}`} 
                
              >
                <AiFillGithub className="mr-1 opacity-70" />
                <span className="opacity-70">GitHub</span>
              </a>
            )}
          </div>
        </div>

        {urlLink && (
          <a href={urlLink} target="_blank" rel="noopener noreferrer">
            <Image
            aria-label={`Project image for ${title}`} 
              src={imageUrl}
              alt={`Image for ${title}`}
              quality={95}
              className="absolute hidden lg:block top-[60px] -right-10 w-[28.25rem] rounded-t-lg shadow-2xl scale-[1.0] transition lg:scale-[1.1] hover:scale-[1.11]"
            />
          </a>
        )}
      </section>
    </motion.div>
  );
}
