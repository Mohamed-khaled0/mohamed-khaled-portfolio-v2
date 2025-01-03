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
    title: "Coding Expertise for AI Training",
    date: "November 2024 - Present",
    company: "Outlier AI",
    location: "US, Remote",
    description: [
      "Achieved exceptional outcomes, earning over $1300 through consistently high-quality contributions.",
      "Wrote clear and concise prompts to guide AI behavior and task performance for over 150 tasks, improving output quality and adherence to coding standards.",
    ],
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Food Quality Control (Last Mile)",
    date: "June 2021 - December 2021",
    company: "Maxab",
    location: "Haram, Egypt",
    description: [
      "Reviewed over 6+ orders daily before shipment to ensure 100% accuracy in SKUs, product quantities, and customer requirements.",
      "Collaborated with warehouse teams to resolve issues quickly, ensuring smooth operations and reducing shipment delays.",
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
    name: "Manual Testing",
    icon: "mdi:magnify",
  },
  {
    name: "Automated Testing",
    icon: "mdi:robot",
  },
  {
    name: "Selenium",
    icon: "logos:selenium",
  },
  {
    name: "Postman",
    icon: "logos:postman-icon",
  },
  {
    name: "API Testing",
    icon: "mdi:api",
  },
  {
    name: "Agile Methodology",
    icon: "mdi:account-group-outline",  
  },
  {
    name: "Jira",
    icon: "logos:jira",
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
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },

] as const;
