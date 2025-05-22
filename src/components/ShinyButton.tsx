import React from "react";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";

type ShinyButtonProps = {
  label?: string;
  onClick?: () => void;
};

const ShinyButton: React.FC<ShinyButtonProps> = ({ label, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-orange-600 text-white px-3 py-2 rounded-md hover:bg-orange-700 transition duration-300 transform relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 flex justify-center"
        animate={{ opacity: [0, 0.5, 0], x: [-150, 150] }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 9 }}
      />
      <div className="flex flex-row">
        <div className="pt-1 pr-1">
          {label === "Book a Call" ? <FiPhone className="text-white" /> : " "}
        </div>
        <span className="relative z-5">{label}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 shine-effect" />
      <style jsx>{`
        .shine-effect {
          animation: shine 2s ease-in-out infinite;
        }

        @keyframes shine {
          0% {
            opacity: 0;
            transform: translateX(-150%);
          }
          50% {
            opacity: 0.5;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(150%);
          }
        }
      `}</style>
    </motion.button>
  );
};

export default ShinyButton;
