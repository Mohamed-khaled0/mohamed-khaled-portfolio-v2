// Header.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data"; 
import Link from "next/link";
import { FaGlobe } from "react-icons/fa"; 
import { useActiveSectionContext } from "@/context/active-section-context";
import clsx from "clsx";

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[1000] relative ">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[42rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

<nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
<ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
      {links.map((link) => {
            // Check if the current item is the language switcher
            if ("isLanguageSwitcher" in link) {
              return (
                <motion.li key="language-switcher" className="h-3/4 flex items-center justify-center"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                >
                  <button
                  aria-label="LanguageSwitcher"
                    className="flex items-center justify-center w-full px-3 py-3 dark:text-gray-300 transition text-black"
                    title="Switch to Deutsch"
                  >
                    <FaGlobe size={16}  />
                    <span className="ml-1 text-sm">EN</span>
                  </button>
                </motion.li>
              );
            }

            // Render regular links
            return (
              <motion.li key={link.hash} className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              >
               <Link
              aria-label="name of items in a header"
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-200 text-black ",
                  {
                    "text-gray-950 dark:white":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                  aria-label="activeSection"
                    className="text-white rounded-full absolute inset-0 -z-10 dark:bg-gray-800 bg-gray-200  "
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
