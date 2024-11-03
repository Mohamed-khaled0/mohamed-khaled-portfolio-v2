import React from "react";
import cryptoImg from "@/public/crypto.webp";
import portfolioImg from "@/public/portfolio.webp";
import photoReviveImg from "@/public/photoReviveImg.webp";


import { CgWorkAlt } from "react-icons/cg";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "Web Developer Intern",
    date: "August 2024 - September 2024",
    company: "Information Technology Institute ITI",
    location: "Port Said ,Egypt",
    description: [
      "  Developed responsive and dynamic web pages, collaborated with colleagues and mentors as part of a team, and used version control to manage project versions and changes.",
    ],
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Mobile Developer Intern",
    date: "March 2024 - April 2024",
    company: "CodeAlpha",
    location: "Remote | Online",
    description: [
      "Designed and developed a responsive and user-friendly e-commerce application, created custom views and user interfaces using SwiftUI, integrated third-party libraries and APIs into existing applications, and utilized Git for version control to manage source code."
    ],
    icon: React.createElement(CgWorkAlt),
  },
] as const;

export const projectsData = [
  {
    title: "PhotoRevive - Image Resolution",
    description:
      "An advanced AI-powered application focused on restoring and enhancing the resolution of old photos. Our project leverages deep learning techniques to deliver impressive photo restoration results, preserving cherished memories by improving quality and clarity. ",
    tags: ["React", "TensorFlow.js", "Tailwind CSS", "AI", "Image Processing"],
    icons: [
      "devicon:react",
      "logos:tensorflow",
      "devicon:tailwindcss",
      "logos:python",
      "devicon:googlecolab",

    ],
    imageUrl: photoReviveImg,
    githubLink: "https://github.com/Mohamed-khaled0/image-super-resolution",
    urlLink: "https://image-super-resolution.netlify.app/",
    features: [
      "AI-based image enhancement for photo restoration",
      "Intuitive and user-friendly interface",
      "Real-time preview of enhanced photos",
      "Responsive design for mobile and desktop",
      "Image upload and download functionality"
    ],
  },
  
  // {
  //   title: "My-Portfolio Website",
  //   description:
  //     "Modern personal website designed to showcase my skills, projects, and experience in web development. It is built using modern web technologies like Next.js, React, Tailwind CSS, and TypeScript to ensure a responsive and optimized user experience.",
  //   tags: ["Typescript", "NextJs", "Tailwind CSS"],
  //   icons: [
  //     "devicon:nextjs",
  //     "logos:framer",
  //     "devicon:typescript",
  //     "devicon:tailwindcss",
  //   ],
  //   imageUrl: portfolioImg,
  //   githubLink:
  //     "https://github.com/Mohamed-khaled0/mohamed-khaled-portfolio-v2",
  //   urlLink: "https://mohamed-khaled-frontend-developer.netlify.app/",
  //   features: [
  //     "Real-time cryptocurrency prices",
  //     "Responsive design with Dark/Light mode toggle",
  //     "User Authentication using Firebase",
  //     "Mobile-friendly navigation with secure routing",
  //   ],
  // },
  // {
  //   title: "Crypto Website",
  //   description:
  //     "A modern cryptocurrency tracking app providing real-time cryptocurrency prices, trends, and charts. Users can sign up, manage profiles, and personalize theme preferences.",
  //   tags: ["React", "Firebase", "Tailwind CSS"],
  //   icons: ["logos:react", "logos:firebase", "devicon:tailwindcss"],
  //   imageUrl: cryptoImg,
  //   githubLink: "https://github.com/Mohamed-khaled0/Crypto-React-Firebase-App",
  //   urlLink: "https://crypto-6f014.web.app/",
  //   features: [
  //     "Real-time cryptocurrency prices",
  //     "Responsive design with Dark/Light mode toggle",
  //     "User Authentication using Firebase",
  //     "Mobile-friendly navigation with secure routing",
  //   ],
  // },

] as const;

export const skillsData = [
  {
    name: "Dart",
    icon: "logos:dart",
  },
 
  {
    name: "Shared Preferences",
    icon: "ic:round-storage",
  },
  {
    name: "Hive",
    icon: "simple-icons:hive",
  },
  {
    name: "Firebase",
    icon: "logos:firebase",
  },
  {
    name: "Dio",
    icon: "simple-icons:dart",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "GitHub",
    icon: "logos:github-icon",
  },
  {
    name: "Payment Gateways",
    icon: "mdi:credit-card-outline",
  },
  {
    name: "Google Maps",
    icon: "logos:google-maps",
  },
  {
    name: "Responsive Design",
    icon: "bx:bx-devices",
  },
  {
    name: "Postman",
    icon: "logos:postman-icon",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "Tailwind",
    icon: "logos:tailwindcss-icon",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Framer Motion",
    icon: "logos:framer",
  },

] as const;
