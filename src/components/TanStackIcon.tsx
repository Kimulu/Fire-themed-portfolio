import React from "react";

const TanStackIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-12 h-12 text-white hover:text-white"
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="white"
        strokeWidth="5"
        fill="none"
      />
      <path d="M30 40 L50 20 L70 40 L50 60 Z" fill="white" />
    </svg>
  );
};

export default TanStackIcon;
