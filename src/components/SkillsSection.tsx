import React, { JSX } from "react";
import SkillCard from "./SkillCard";
import TanStackIcon from "./TanStackIcon";

// FontAwesome Icons
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiReactrouter,
} from "react-icons/si";

type Skill = {
  icon: JSX.Element;
  name: string;
};

const technicalSkills: Skill[] = [
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiFramer />, name: "Framer Motion" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "React.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiReactrouter />, name: "React Router" },
  { icon: <TanStackIcon />, name: "TanStack Query" }, // Custom Icon
];

const SkillsSection: React.FC = () => {
  return (
    <section className="container mx-auto p-8 relative z-6">
      <h2 className="text-2xl font-bold mb-6 text-white dark:text-gray-200">
        My Technical Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {technicalSkills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
