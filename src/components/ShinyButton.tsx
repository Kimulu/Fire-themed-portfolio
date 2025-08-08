import React from "react";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";

type ShinyButtonProps = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const ShinyButton: React.FC<ShinyButtonProps> = ({
  label,
  onClick,
  disabled,
}) => {
  return (
    <motion.button
      onClick={!disabled ? onClick : undefined} // Only trigger onClick if not disabled
      whileHover={!disabled ? { scale: 1.05 } : {}} // Disable hover animation
      whileTap={!disabled ? { scale: 0.95 } : {}} // Disable tap animation
      className={`relative overflow-hidden rounded-md px-3 py-2 transition duration-300 transform
        ${
          disabled
            ? "bg-gray-600 text-gray-400 cursor-not-allowed opacity-50"
            : "bg-orange-600 text-white hover:bg-orange-700 hover:scale-105"
        }`}
      disabled={disabled} // Pass the disabled prop to the button element
    >
      {/* The shiny effect animation is conditional on the disabled prop */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 flex justify-center"
          animate={{ opacity: [0, 0.5, 0], x: [-150, 150] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 9 }}
        />
      )}
      <div className="flex flex-row">
        <div className="pt-1 pr-1">
          {label === "Book a Call" ? <FiPhone className="text-white" /> : " "}
        </div>
        <span className="relative z-5">{label}</span>
      </div>
      {!disabled && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 shine-effect" />
      )}
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
