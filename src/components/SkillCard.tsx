import React, { JSX, useState } from "react";

interface SkillCardProps {
  icon: JSX.Element;
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name }) => {
  const [showName, setShowName] = useState(false);

  return (
    <div
      className="relative group flex items-center justify-center p-6 bg-gray-800 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-orange-400 hover:text-black hover:shadow-yellow-500/50"
      onMouseEnter={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
      onClick={() => setShowName(!showName)}
    >
      <div className="text-5xl mb-2 transition-transform transform hover:rotate-6">
        {icon}
      </div>

      {showName && (
        <div className="absolute -top-8 text-sm font-semibold bg-gray-900 text-white py-1 px-3 rounded-md opacity-90">
          {name}
        </div>
      )}
    </div>
  );
};

export default SkillCard;
