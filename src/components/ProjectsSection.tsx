import React from "react";
import { FaGithub } from "react-icons/fa";
import ShinyButton from "./ShinyButton";
import Image from "next/image";

type Project = {
  name: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveDemo?: string;
  imageSrc: string;
};

const projects: Project[] = [
  {
    name: "Portfolio Website",
    description: "My personal portfolio to showcase my projects and skills.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/your-username/portfolio",
    liveDemo: "https://your-portfolio-link.com",
    imageSrc: "/images/portfolio.png",
  },
  {
    name: "E-commerce Store",
    description:
      "A modern e-commerce platform with full checkout capabilities.",
    techStack: ["React", "Redux", "Firebase", "Tailwind CSS"],
    githubLink: "https://github.com/your-username/e-commerce",
    liveDemo: "https://your-ecommerce-link.com",
    imageSrc: "/images/ecommerce.png",
  },
  {
    name: "Task Manager App",
    description: "Manage your daily tasks efficiently with this React app.",
    techStack: ["React", "TypeScript", "TanStack Query"],
    githubLink: "https://github.com/your-username/task-manager",
    imageSrc: "/images/taskmanager.png",
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
            {/* Image Preview */}
            <Image
              src={project.imageSrc}
              alt={project.name}
              width={500}
              height={300}
              className="w-full h-40 object-cover rounded-lg mb-4"
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
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition pt-2"
              >
                <FaGithub size={20} />
              </a>

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShinyButton label="View Project" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
