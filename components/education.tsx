"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import ThebesLogo from "@/public/edu-logo.webp";
import Image from "next/image";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px] "
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <SectionHeading>My Education</SectionHeading>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-sm pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 mx-6 ">
        <div>
          <Image
          className="hidden sm:block"
          aria-label='ThebesLogo' 
            src={ThebesLogo}
            alt="Thebes"
            quality={100}
            width="150"
            style={{ borderRadius: "5px" }}
          />
        </div>

        <div>
          <p className="text-lg font-medium">Bachelor of Computer Science</p>
          <p>Thebes Higher Institute of Information Technology </p>
          <p className="mt-1">2021 : 2025</p>
          <p className="my-1">GPA 3/4</p>
          <ul className="list-disc pl-6">
            <li>Major in Computer Science</li>
            <li>Minor in Web Applications</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
