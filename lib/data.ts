import React from "react";
import cryptoImg from "@/public/crypto.webp";
import resturantImg from "@/public/resturant.webp";
import portfolioImg from "@/public/portfolio.webp";

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
] as const;

export const projectsData = [
  {
    title: "My-Portfolio",
    description:
      "Modern personal website designed to showcase my skills, projects, and experience in web development. It is built using modern web technologies like Next.js, React, Tailwind CSS, and TypeScript to ensure a responsive and optimized user experience.",
    tags: ["Typescript", "NextJs", "Tailwind CSS"],
    icons: [
      "devicon:nextjs",
      "logos:framer",
      "devicon:typescript",
      "devicon:tailwindcss",
    ],
    imageUrl: portfolioImg,
    githubLink:
      "https://github.com/Mohamed-khaled0/mohamed-khaled-portfolio-v2",
    urlLink: "https://mohamed-khaled-frontend-developer.netlify.app/",
    features: [
      "Real-time cryptocurrency prices",
      "Responsive design with Dark/Light mode toggle",
      "User Authentication using Firebase",
      "Mobile-friendly navigation with secure routing",
    ],
  },
  {
    title: "Crypto",
    description:
      "A modern cryptocurrency tracking app providing real-time cryptocurrency prices, trends, and charts. Users can sign up, manage profiles, and personalize theme preferences.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    icons: ["logos:react", "logos:firebase", "devicon:tailwindcss"],
    imageUrl: cryptoImg,
    githubLink: "https://github.com/Mohamed-khaled0/Crypto-React-Firebase-App",
    urlLink: "https://crypto-6f014.web.app/",
    features: [
      "Real-time cryptocurrency prices",
      "Responsive design with Dark/Light mode toggle",
      "User Authentication using Firebase",
      "Mobile-friendly navigation with secure routing",
    ],
  },
  {
    title: "Restaurant Website",
    description:
      "A food menu project with filtering options allowing users to sort items by type (burgers, pizza, salads, etc.) and price range. Built with React and Tailwind CSS.",
    tags: ["React", "JavaScript", "Tailwind CSS", "HTML5"],
    icons: [
      "logos:react",
      "logos:javascript",
      "devicon:tailwindcss",
      "logos:html5",
    ],
    imageUrl: resturantImg,
    githubLink: "https://github.com/Mohamed-khaled0/food-app-react-tailwind",
    urlLink: "https://restaurant-app-react-tailwind.netlify.app/",
    features: [
      "Display top-rated menu items with images and prices",
      "Filter by food type and price",
      "Responsive design with hover and scaling effects",
    ],
  },
] as const;

export const skillsData = [
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "Bootstrap",
    icon: "logos:bootstrap",
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
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Redux",
    icon: "logos:redux",
  },
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
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
    name: "MongoDB",
    icon: "logos:mongodb-icon",
  },
  {
    name: "Framer Motion",
    icon: "logos:framer",
  },
  {
    name: "Postman",
    icon: "logos:postman-icon",
  },
] as const;
