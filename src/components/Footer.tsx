import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-4 mt-8 border-t border-gray-800 relative z-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        {/* Copyright Information */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} . All rights reserved.
        </p>

        {/* Tagline */}
        <p className="text-sm mt-2 sm:mt-0">
          Forged with <span className="text-yellow-500">🔥</span> by Michael
          Kimulu
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Link
            href="https://github.com/Kimulu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-500 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_5px_rgba(255,165,0,0.6)]"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/michael-kimulu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-500 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_5px_rgba(255,165,0,0.6)]"
          >
            <FaLinkedin size={20} />
          </Link>
          <Link
            href="https://x.com/Kimulu__Michael"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-500 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_5px_rgba(255,165,0,0.6)]"
          >
            <FaSquareXTwitter size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
