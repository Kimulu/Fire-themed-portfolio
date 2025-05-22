import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import dynamic from "next/dynamic";
import ShinyButton from "@/components/ShinyButton";
import BookCallModal from "./BookCallModal";

// Dynamically import lottie-react without SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import flameAnimation from "@/../public/flame.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 z-50 p-5 transition-all duration-300 ${
        isScrolled ? "bg-black/70 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">
          <Link href="/">
            🔥 Michael<span className="text-orange-300">.</span>
          </Link>
        </h1>

        <div className="hidden md:flex space-x-13">
          {menuItems.map((item) => (
            <div
              className="relative group pt-2"
              key={item.name}
              suppressHydrationWarning
            >
              <Link
                href={item.path}
                className={`${
                  router.pathname === item.path
                    ? "text-orange-400"
                    : "hover:text-orange-400 text-white"
                } transition duration-300 relative`}
              >
                {item.name}
              </Link>

              {isClient && router.pathname === item.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-[-5px] w-full"
                  suppressHydrationWarning
                >
                  {typeof window !== "undefined" && (
                    <Lottie
                      animationData={flameAnimation}
                      loop={true}
                      autoplay={true}
                      className="w-15 h-23 absolute -bottom-4 left-1/2 -translate-x-1/2 drop-shadow-[0_0_10px_rgba(255,140,0,0.8)] rounded-full overflow-hidden"
                      suppressHydrationWarning
                    />
                  )}
                </motion.div>
              )}
            </div>
          ))}

          <ShinyButton
            label="Book a Call"
            onClick={() => setIsModalOpen(true)}
          />
          <BookCallModal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
          />
        </div>

        <div className="md:hidden text-white">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/90 p-5 space-y-5">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block text-white hover:text-orange-400 transition duration-300"
              onClick={toggleMenu}
              suppressHydrationWarning
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
