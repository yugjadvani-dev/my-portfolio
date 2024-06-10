/* The code you provided is importing various dependencies and defining constants for a TypeScript
React application. */
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../assets/images/corpcomment.png";
import rmtdevImg from "../assets/images/rmtdev.png";
import wordanalyticsImg from "../assets/images/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Veer Narmad South Gujarat University",
    location: "Surat, IN",
    description:
      "I will graduate after 2 years of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  {
    title: "Front-End Developer",
    location: "Surat, IN",
    description:
      "I working as a front-end developer in Delemont studio. I also upskilled to the Deep Learn In ReactJs.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Code Review",
    location: "Surat, IN",
    description:
      "I was in a Big program application, I was reviewing and understanding another experienced developer's code. My stack includes React, Redux, JavaScript, Tailwind, Prisma and MongoDB.",
    // "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML/HTML5",
  "CSS",
  "SASS",
  "JavaScript",
  "React",
  "JSX",
  "Redux",
  "Git",
  "Bootstrap",
  "Tailwind",
  "Styled Components",
  "Code Review",
  "Web Applications",
  "Material-UI",
  "Ant Design",
  "Responsive Web Design",
  "CI/CD",
  "Debugging",
  "Google Analytics",
  "Amazon S3",
  "JSON",
] as const;
