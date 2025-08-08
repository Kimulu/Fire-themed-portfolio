import React from "react";
import { FaGithub } from "react-icons/fa";
import ShinyButton from "./ShinyButton";
import Image from "next/image";

type Project = {
  name: string;
  description: string;
  techStack: string[];
  githubLink?: string; // Made optional
  liveDemo?: string; // Made optional
  imageSrc: string;
  isProduction?: boolean;
  isComingSoon?: boolean; // NEW: Field to indicate a coming soon project
};

const projects: Project[] = [
  {
    name: "Portfolio Website",
    description:
      "My personal portfolio to showcase my projects and skills. Designed for a sleek and modern user experience.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/Kimulu/Fire-themed-portfolio",
    liveDemo:
      "https://fire-themed-portfolio-git-main-michael-kimulus-projects.vercel.app/",
    imageSrc: "/images/Portfolio.jpg",
    isProduction: false,
  },
  {
    name: "ALX Capstone Project - Job Board Platform",
    description:
      "An interactive job board platform for exploring and filtering job postings. Built as a capstone project, it features dynamic API integration, advanced filtering, and a fully responsive design. We overcame challenges with third-party APIs and implemented Firebase for a robust backend.",
    techStack: [
      "Next.js",
      "Context API",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "Firebase",
    ],
    githubLink: "https://github.com/Kimulu/alx-project-nexus",
    liveDemo: "https://alx-project-nexus-michael-kimulus-projects.vercel.app/",
    imageSrc: "/images/job_board.png",
    isProduction: false,
  },
  {
    name: "Pomoflow - Time Management Web App",
    description:
      "A comprehensive time management and productivity tool leveraging the Pomodoro Technique. Features include robust task management, advanced reporting, project organization, and secure payment integration for premium plans.",
    techStack: [
      "Next.js",
      "Context API",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "TypeScript",
      "Paystack",
      "M-Pesa",
    ],
    githubLink: "",
    liveDemo: "https://www.pomoflow.app",
    imageSrc: "/images/pomoflow.png",
    isProduction: true,
  },
  {
    // NEW: Placeholder for the Reactivate project
    name: "Reactivate - React Learning Platform",
    description:
      "An interactive, gamified platform for developers to learn React by solving code challenges. Coming soon!",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "MongoDB"],
    imageSrc: "https://placehold.co/500x300/1F2937/F3F4F6?text=Coming+Soon", // Placeholder image
    isComingSoon: true,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects-section"
      className="container mx-auto p-8 relative z-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-white dark:text-gray-200">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 hover:ring-2 hover:ring-yellow-500 relative overflow-hidden"
          >
            {/* NEW: Production or Coming Soon Badge */}
            {project.isProduction && (
              <span className="absolute top-3 right-3 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 flex items-center gap-1">
                Production <span className="text-sm">🚀</span>
              </span>
            )}
            {project.isComingSoon && (
              <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 flex items-center gap-1">
                Coming Soon <span className="text-sm">✨</span>
              </span>
            )}

            {/* Image Preview */}
            <Image
              src={project.imageSrc}
              alt={project.name}
              width={500}
              height={300}
              className="w-full h-auto object-cover rounded-lg mb-4 aspect-video"
              layout="responsive"
            />

            <h3 className="text-xl font-semibold text-white mb-2">
              {project.name}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>

            <div className="mb-4">
              <strong className="text-gray-500">Tech Stack:</strong>
              <ul className="flex flex-wrap gap-2 mt-1">
                {project.techStack.map((tech, idx) => (
                  <li
                    key={idx}
                    className="bg-gray-700 px-2 py-1 rounded text-gray-300 text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 mt-2">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                  className="text-gray-400 hover:text-white transition pt-2"
                >
                  <FaGithub size={24} />
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.name}`}
                >
                  <ShinyButton label="View Project" disabled={false} />
                </a>
              )}

              {project.isComingSoon && (
                <ShinyButton label="Coming Soon" disabled={true} />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
