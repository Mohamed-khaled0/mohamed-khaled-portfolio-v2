"use client";
import Image from "next/image";
import React from "react";
import personalPhoto from "@/public/personalphoto.webp";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] mt-[8rem] "
    >
      <div className="flex flex-col items-center justify-center ">
        <div className="relative   ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              className=" rounded-full object-cover border-[0.10rem] border-white shadow-xl "
              priority={true}
              quality={96}
              width={130}
              height={130}
              src={personalPhoto}
              alt={"Mohamed personal photo"}
              aria-label="Mohamed personal photo"
            />
          </motion.div>
        </div>

        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hi, I'm Mohamed Khaled.</span> I'm a{" "}
          <span className="font-bold">frontend developer.</span> I was an intern
          as a web developer at ITI and am certified by Meta in front-end
          development. I enjoy building{" "}
          <span className="italic">sites and apps</span> with a focus on{" "}
          <span className="font-bold">
            TypeScript, Tailwind CSS, and React.js (Next.js)
          </span>
          .
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <a
            className="group bg-white px-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40 cursor-pointer borderBlack dark:bg-white/10"
            href="/CV.pdf"
            aria-label="cv"
            download
          >
            Resume <HiDownload className="opacity-60  transition" />
          </a>
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
            href="https://github.com/Mohamed-khaled0"
            aria-label="github"
            target="_blank"
          >
            GitHub <FaGithub className="opacity-70" />
          </a>

          <a
            className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
            href="https://www.linkedin.com/in/mohamed-khaled3/"
            target="_blank"
            aria-label="linkedin"
          >
            <span className="opacity-70">LinkedIn</span>
            <BsLinkedin className="opacity-70" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
